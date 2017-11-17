"""
    Run scrapy spiders to collect data from cnmipss.org, then run tests on the
    data, then email results to webmaster@cnmipss.org.
"""
import os
import datetime
import smtplib
import re
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from string import Template

import pytest


def main():
    "Run pytest and email results to webmaster@cnmipss.org"
    pytest.main("--tap-combined")

    # Email Results
    email_template = Template(
        "Automated Functional Test Results for today: \n\n${RESULTS}")
    username, password = os.environ['SMTP_USER'], os.environ['SMTP_PASS']
    sender = smtplib.SMTP_SSL(host='smtp.gmail.com', port=465)
    sender.ehlo()
    sender.login(username, password)

    email = MIMEMultipart()
    email['From'] = 'no-reply@cnmipss.org'
    email['To'] = 'webmaster@cnmipss.org'

    with open('testresults.tap',
              mode='r',
              encoding='utf-8') as test_results:
        results = test_results.read()
        message = email_template.substitute(
            RESULTS=results)
        email.attach(MIMEText(message, 'plain'))

        regex = re.compile('not\\s*ok\\s*\\d', re.MULTILINE)
        if regex.findall(results) is not None:
            email['Subject'] = 'FAILING Functional Tests for CNMIPSS.ORG ' + \
                str(datetime.date.today())
        else:
            email['Subject'] = 'PASSING Functional Tests for CNMIPSS.ORG ' + \
                str(datetime.date.today())
        sender.send_message(email)


if __name__ == '__main__':
    main()
