# contact-uploader

This application performs automated updates of CNMI PSS District Office offices, personnel, schools, and headstart location contact information published on the CNMI PSS District Website.

## Installation

The compiled NodeJS application is located in contact-uploader/bin and can be run directly from a command prompt.  This can be done in a development environment or on the production web server so long as the appropriate configuration file is present.

**NOTE**: Do not put the contactUploader.json file in the directory served by the webserver.  This is a massive security risk.

## Usage

From the contact-uploader directory run the follow command:

```
./bin/contactUploader.js --all --download
```

and the program will run.  First it will download the pages of the CNMI PSS District Office Directory spreadsheet from Google Docs.  Then it will parse the file and upload it to the web server's MySQL database.

## Options

### contactUploader.json

```json
{
    "host": "www.cnmipss.org",
    "username": "AdminUsername",
    "password": "AdminPassword",
    "secure": true,
    "rateLimit": 250
}
```

## Examples

...

### Bugs

...

### Any Other Sections
### That You Think
### Might be Useful

## License

Copyright © 2017 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
