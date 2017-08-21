FROM ubuntu:17.04
MAINTAINER Tyler Collins <webmaster@cnmipss.org>

LABEL Description="LAMP Stack for deploying CNMI PSS District Website on Ubuntu 17.10" \
      Version="0.1.1"

#Setup environment variables for installation
ENV DEBIAN_FRONTEND noninteractive
ENV DATE_TIMEZONE UTC
ENV LOG_STDOUT **Boolean**
ENV LOG_STDERR **Boolean**
ENV LOG_LEVEL warn
ENV ALLOW_OVERRIDE all

#Install LAMP stack
RUN apt-get update -y -qq && apt-get upgrade -y -qq
RUN apt-get install -y \
        php7.0 \
	php7.0-bz2 \
	php7.0-cgi \
	php7.0-cli \
	php7.0-common \
	php7.0-curl \
	php7.0-dev \
	php7.0-enchant \
	php7.0-fpm \
	php7.0-gd \
	php7.0-gmp \
	php7.0-imap \
	php7.0-interbase \
	php7.0-intl \
	php7.0-json \
	php7.0-ldap \
	php7.0-mcrypt \
	php7.0-mysql \
	php7.0-odbc \
	php7.0-opcache \
	php7.0-pgsql \
	php7.0-phpdbg \
	php7.0-pspell \
	php7.0-readline \
	php7.0-recode \
	php7.0-snmp \
	php7.0-sqlite3 \
	php7.0-sybase \
	php7.0-tidy \
	php7.0-xmlrpc \
	php7.0-xsl

RUN apt-get install apache2 libapache2-mod-php7.0 -y
RUN apt-get install mysql-client mysql-server -y

RUN apt-get install emacs-nox -y

#Prepare html directory
RUN rm -rf /var/www/html/*

#Copy html files
COPY *ini /var/www/html/
COPY *php /var/www/html/
COPY .htaccess /var/www/html/
COPY *html /var/www/html/
COPY *htm /var/www/html/
COPY *txt /var/www/html/
COPY wp-admin /var/www/html/wp-admin/
COPY wp-includes /var/www/html/wp-includes/
COPY wp-content /var/www/html/wp-content/
RUN mkdir /var/www/html/wp-content/uploads/

EXPOSE 80 443 3306 33060

RUN a2enmod rewrite
RUN chown -R www-data:www-data /var/www/html

VOLUME /var/www/html
VOLUME /var/log/httpd
VOLUME /var/lib/mysql
VOLUME /var/log/mysql

RUN service apache2 start
RUN service mysql start

