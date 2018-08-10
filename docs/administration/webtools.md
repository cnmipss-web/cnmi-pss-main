# CNMI PSS Webtools Administration

The CNMI PSS Webtools application provides a web application interface for various CNMI PSS Offices to manage content for the CNMI PSS District Website that is not easily managed using the WordPress CMS.

The Webtools application can be accessed at [https://cnmipss.org/webtools](https://cnmipss.org/webtools).  Login is performed using an authorized cnmipss.org email account.  The webmaster@cnmipss.org account is the admin account for the Webtools Application.

## Application Administration

The webmaster@cnmipss.org account is the only account with administrator access to the Webtools application.

### Managing Users

The primary admistrative task in the application is managing user access to the various roles of the application.  This can be done by selecting the `Manage Users` role where you can invite new users, remove users, and edit the roles assigned to existing users.

## System Administration

### Starting and Stopping the Server

The CNMI PSS Webtools application runs as a [systemd service](https://wiki.ubuntu.com/SystemdForUpstartUsers) on the Linode linux server.  Starting and stopping the server can be done simply using the following commmands

```bash
    service webtools start
    service webtools restart
    service webtools stop
```

### Configuring the Server

The Webtools service file is `/etc/systemd/system/webtools.service` and should contain the following

```linux-config
    [Unit]
    Description = Webtools server
    After = network.target

    [Service]
    Type=simple
    User=www-data
    WorkingDirectory = /var/www/bin
    ExecStart = /usr/local/bin/webtools-server start
    Environment=SERVER_URI=http://cnmipss.org/webtools
    Environment=GOOGLE_CLIENT_ID=************************************
    Environment=GOOGLE_SECRET_ID=************************************
    Environment=GOOGLE_CALLBACK_URI=*********************************
    Environment=DATABASE_URL=****************************************
    Environment=WP_HOST=https://www.cnmipss.org
    Environment=WP_UN=*******************
    Environment=WP_PW=*******************

    [Install]
    Alias=webtools.service
```

where the `*********` entries are secure information to be provided in production only.  It is important that the Linux filesystem permissions of the `webtools.service` file be set to `400` in order to protect the secure information there from unauthorized access.

The executable file which launches the Webtools server, ``/usr/local/bin/webtools-server``, is a shell script which initiates the JVM and loads the jar files installed in /var/www/bin via FTP.  This shell script is:

```bash
    #!/bin/bash
    # /usr/local/bin/webtools-server
    #
    PID=$(ps axu | grep webtools | grep java | grep -v grep | awk '{ print $2 }')
    function start_server () {
        if [[ -z $PID ]]; then
        echo "webtools: starting server"
        java -jar /var/www/bin/webtools.jar
        else
        echo "webtools: already running"
        exit 1
        fi
    }

    function stop_server () {
        echo "webtools : stopping server"
        kill $PID
    }

    function status_server () {
        if [[ ! -z $PID ]]; then
            echo "webtools: running pid " $PID
        else
            echo "webtools: not running"
        fi
    }

    case $1 in
        start)
            start_server
            ;;
        stop)
            stop_server
            ;;
        reload)
            stop_server
            sleep 2
            start_server
            ;;
        status)
            status_server
            ;;
        *)
            echo "Usage: $0 {start | stop | reload | status}"
            exit 1
            ;;
    esac

    exit 0
```

### Deploying Updates

To deploy an update of the CNMI PSS Webtools Application requires the use of FTP to transfer the two `jar` files that make up the application.  The `jar` files are created using [leiningen](https://leiningen.org/) to build the Clojure source code:

* Run `lein clean` in the local repository to clean out previous builds of the application.
* Run `lein uberjar` to build the jar files.
* The jar files will be located in `target/uberjar/`.
* Upload the jar files via FTP to `/var/www/bin/` on the Linode server.
* Login to the Linode server using SSH and run `sudo service webtools restart` to restart the Webtools server using the new jar files.

#### Deploy Updates Via Git

As an alternative, updates can be deployed using the git post-receive hook in a repository hosted on the server.  Doing this requires hosting a copy of the repository in your home directory on the Linode server and writing a script to automate the above steps at repo_dir/hooks/post-receive.  This will also likely require some configuration of permissions to allow your user to copy the jar files to `/var/www/bin`.