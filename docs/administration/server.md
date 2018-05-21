# Linode Server Administration

The CNMI PSS District Website is hosted on an Ubuntu Linux server provided by [Linode](http://linode.com).  This server runs a variety of applications including an HTTTP web servers and RDBMSs to provide content to users visiting the CNMI PSS District Website.

## Logging In (SSH)

Login access to the server is done via ssh.  The server is configured to only allow SSH via keyfile (except for the webmaster account, which can login by password) and to ban any user who repeatedly fails to login correctly.  In order to give an account access to the server you will have to transfer a copy of your keyfile to the server.

The basic process is

* Make sure that ssh is installed on your system.  [Bitvise](https://www.bitvise.com/ssh-client-download) is a good Windows client.  Mac OS X and Linux systems should have the ssh command available by default.
* Generate a keyfile for access.  This means generating a private key and a public key.  Consult your ssh client's documentation for how to do this.  The public key should be added to `~/.ssh/authorized_keys` on the Linode server for your user account.  This must be performed via SFTP under the `webmaster` account, which is the only way to login via password rather than keyfile.  The private key should be kept private.
* Once the server has your public key, you should be able to connect via ssh to the server securely.

## Logging In (FTP)

FTP is only available over SSH (SFTP) and requires the use of keyfiles except for the `webmaster` account which can login with a password.

## Software Updates

To update the server's operating system and other software run the following command (while logged in via ssh)

```bash
    sudo apt-get update
    sudo apt-get upgrade
```

Press `y` when prompted and wait for the updates to finish.

## Restarting the Server

The server can be restarted from [Linode's management interface](https://manager.linode.com) or by running the `reboot` command via ssh (*note: this will log you out from the server while it reboots*).

## Restarting Server Services

There are several services you may want to stop or restart on the server.  These can be simply started/stopped/restarted by running the appropriate command from the following options

```bash

    sudo service apache2 start/stop/restart
    sudo service mysql start/stop/restart
    sudo service webtools start/stop/restart
    sudo service postgresql start/stop/restart

    sudo service SERVICE_NAME start/stop/restart
```

## Apache Administration

[Official documentation for the Apache HTTP Server](https://httpd.apache.org/docs/2.4/)

### Reverse Proxy Setup

The Apache server provides a reverse proxy to unify multiple services behind the `cnmipss.org` domain.  Ensure that the following reverse proxy rules are included in the apache configuration

```linux-config
    ProxyPass /webtools http://localhost:3000
    ProxyPassReverse /webtools http://localhost:3000
```

### Enabled Modules

The Apache configuration for the CNMI PSS District website relies on the following Apache modules:

```none
    setenvif (enabled by maintainer script)
    proxy_ajp (enabled by site administrator)
    proxy_balancer (enabled by site administrator)
    autoindex (enabled by maintainer script)
    mime (enabled by maintainer script)
    proxy_connect (enabled by site administrator)
    access_compat (enabled by maintainer script)
    proxy (enabled by site administrator)
    authz_core (enabled by maintainer script)
    filter (enabled by maintainer script)
    deflate (enabled by maintainer script)
    php7.0 (enabled by maintainer script)
    status (enabled by maintainer script)
    dir (enabled by maintainer script)
    authn_file (enabled by maintainer script)
    authz_host (enabled by maintainer script)
    headers (enabled by site administrator)
    authz_user (enabled by maintainer script)
    xml2enc (enabled by site administrator)
    slotmem_shm (enabled by site administrator)
    ssl (enabled by site administrator)
    expires (enabled by site administrator)
    auth_basic (enabled by maintainer script)
    reqtimeout (enabled by maintainer script)
    env (enabled by maintainer script)
    socache_shmcb (enabled by site administrator)
    alias (enabled by maintainer script)
    proxy_http (enabled by site administrator)
    negotiation (enabled by maintainer script)
    mpm_prefork (enabled by maintainer script)
    authn_core (enabled by maintainer script)
    proxy_html (enabled by site administrator)
    rewrite (enabled by site administrator)
```

### SSL Encryption

Apache is configured to use a Let's Encrypt SSL certificate for secure communications.  All non-secure traffic should be redirected to secure traffic by the following mode_rewrite rule

```linux-config
    <IfModule mod_ssl.c>
        RewriteEngine on
        RewriteCond %{SERVER_NAME} =server.cnmipss.org [OR]
        RewriteCond %{SERVER_NAME} =www.cnmipss.org [OR]
        RewriteCond %{SERVER_NAME} =cnmipss.org
        RewriteRule ^ https://www.cnmipss.org%{REQUEST_URI} [END,NE,R=permanent]
    </IfModule>
```

Certificate installation and renewal is managed using [Certbot](https://certbot.eff.org/#ubuntutzesty-apache) and should occur automatically without needing any intervention.  If for some reason automatic renewal of the SSL certificate does not work, try running `sudo certbot renew` when connected via ssh.

## MySQL Administration

[Official documentation for MySQL](https://dev.mysql.com/doc/refman/5.7/en/)

MySQL is used by the WordPress installation to store data for the CNMI PSS District website.  It has its own set of user accounts and passwords separate from the Linode server's accounts and passwords.  Check the KeePassX file for accounts and passwords.

### Backups

The primary reason to directly interact with the MySQL RDBMS is to backup or restore data for the WordPress installation.

#### Create

To create a database backup run the following command

```bash
sudo mysqldump -u cnmipss_website -p cnmipss_website > /var/www/html/cnmipss.org/backup/cnmipss_website-20180101.sql
```

Replace `20180101` with the current YEAR MONTH DAY to identify the backup file that will be created.  You will be prompted to enter two passwords, first your sudo password and second the cnmipss_website MySQL password.

#### Restore

To restore the database from a backup file run the following command

```bash
    sudo mysql -u cnmipss_website -p < /var/www/html/cnmipss.org/backup/cnmipss_website-20180101.sql
```

Replace `20180101` with the current YEAR MONTH DAY to identify the backup file that will be created.  You will be prompted to enter two passwords, first your sudo password and second the cnmipss_website MySQL password.

## Postgresql Administration

[Official documentation for Postgresql](https://www.postgresql.org/docs/9.6/static/index.html)

Postgres is used as the RDBMS for the Webtools application.  It has its own set of user accounts and passwords separate from the Linode server's accounts and passwords.  Check the KeePassX file for accounts and passwords.

Be extremely careful modifying this DB is production.  Certain features depend on external user input that cannot be recreated if lost.  Be sure to store a database backup before attempting any modifications.

### Backups

#### Create

To create a database backup run the following commands

```bash
sudo -u cnmipss_webtools pg_dump cnmipss_webtools > ~/cnmipss_webtools-20180101.sql
```

Replace `20180101` with the current YEAR MONTH DAY to identify the backup file that will be created.  You will be prompted to enter your sudo password.

#### Restore

To restore a database backup run the following command

```bash
    sudo -u cnmipss_webtools dropdb cnmipss_webtools
    sudo -u cnmipss_webtools pg_restore -C -d postrgres cnmipss_webtools-20180101.sql
```