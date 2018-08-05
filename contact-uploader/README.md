# contact-uploader

This application performs automated updates of CNMI PSS District Office offices, personnel, schools, and headstart location contact information published on the CNMI PSS District Website.

## Installation

The compiled NodeJS application is located in contact-uploader/bin and can be run directly from a command prompt.  This can be done in a development environment or on the production web server so long as the appropriate configuration file is present.

**NOTE**: Do not put the contactUploader.json or credentials.json files in the directory served by the webserver.  This is a *massive* security risk.

## Usage

From the contact-uploader directory in the cnmipss-main repository run the follow command:

```
./bin/contactUploader.js --all --download
```

and the program will run.  First it will download the pages of the CNMI PSS District Office Directory spreadsheet from Google Docs.  Then it will parse the file and upload it to the web server's MySQL database.

## Options

The contactUploader script accepts the following commandline options:

```
  -h, --help     Show this help message and exit.
  -v, --version  Show program's version number and exit.
  --all          Parse and upload data from all files
  --personnel    Parse and upload data from personnel.csv
  --offices      Parse and upload data from offices.csv
  --schools      Parse and upload data from schools.csv
  --headstarts   Parse and upload data from headstarts.csv
  --test         Perform a test run without uploading any data and report any
                 errors in data that are detected.
  --download     Whether to download new data from Google Drive. Requires
                 access to user credentials.
```

### contactUploader.json

The contactUploader.json configuration file provides login information for the contactUploader script to access the WordPress server in order to update entries in the contact information database.

```json
{
    "host": "www.cnmipss.org",
    "username": "WPAdminUsername",
    "password": "WPAdminPassword",
    "secure": true,
    "rateLimit": 250
}
```

A copy of this file is stored in the KeePassX database containing other authentication details for CNMI PSS Web services.

### credentials.json

The credentials.json configuration file provides login information for the contactUploader script to access the Google Docs spreadsheet that serves as the master copy of the CNMI PSS Central Office Directory.

This file is stored in the KeePassX database containing other authentication details for CNMI PSS Web services.  It should be placed in the same directory as the contactUploader.json file.