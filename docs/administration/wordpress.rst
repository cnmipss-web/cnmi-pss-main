WordPress Administration
========================

.. only:: html

    .. image:: https://img.shields.io/badge/WordPress-4.9.1-blue.svg?style=flat-square
        :target: http://wordpress.com
        :alt: WordPress Version 4.9.1

    .. image:: https://img.shields.io/badge/PHP-%3E%3D7.0.22-green.svg?style=flat-square
        :target: http://php.net
        :alt: PHP Version >- 7.0.22

The main CNMI PSS District Website located at https://cnmipss.org runs on WordPress 4.9.1 backend hosted on CNMI PSS's Linode server.

Login
--------------

Authorized users can login to WordPress at https://cnmipss.org/wp-login.  Users will be redirected to login using their CNMI PSS Google Email account.  Only users who have been granted access by an admin are able to login.

User Accounts
--------------

Roles
~~~~~~~~~~~~~~

The following user roles are to be used in most cases:

1. Contributor - A user who is authorized to contribute content or maintain existing content on the CNMI PSS District Website.  Referred to as an *Authorized Content Contributor* in the PSS Web Content Policies.

2. Administrator - A user with authority to modify site settings, user accounts, etc.  Limited to the current Webmaster and a small number of key personnel.

Creating Users
~~~~~~~~~~~~~~~~

Only administrators have the ability to create new users.  To create a new user click Users -> Add New in the WordPress interface.  When creating a new user, it is important that the user be using a Google Email account (typically @cnmipss.org).  Accounts with other emails will not be able to login.

WordPress Updates 
------------------

Updating the WordPress installation, plugins, or custom code should be performed using git and **NOT** WordPress's built-in administration interface.  Updates should be applied to a local testing server and committed to the repository before being pushed to the production server.  Updates should never be applied directly to the production server as doing so will cause the production server and source repository to diverge.  This will cause problems when pushing new development work to production at a later date.  The process should be done as follows:

#. Download the newest WordPress version from the `wordpress download page <https://wordpress.org/download/>`_. 

#. Check that the local repository is on the hotfix branch.  If not, switch to and update the hotfix branch by running 
    
    .. code-block:: bash

        git checkout hotfix && git merge master 
    
    Security updates should be applied to the hotfix branch and merged back onto master after testing.

#. Unzip the new Wordpress version over the repository using 
    
    .. code-block:: bash
    
        unzip wordpress_file.zip -d /path/to/local/repository

#. Run functional tests against the test site using

    .. code-block:: bash

        pytest

    If functional tests fail, address failing tests before merging updates to master.  Commit any fixes required.

#. Assuming that functional tests all still pass, commit the changes using 

    .. code-block:: bash
    
        git commit -am 'New Wordpress version X.X.X'

#. When all functional tests are passing, run BackstopJS for visual regression testing by running 

    .. code-block:: bash 
    
        backstop test

#. If all Backstop tests pass, or if visual changes are acceptable, merge hotfix branch onto the master branch

    .. code-block:: bash
        
        git checkout master && git merge hotfix

    Otherwise, fix any visual regressions that have occurred and commit those fixes before merging the hotfix branch onto the master branch.

#. Push updates to production with 

    .. code:: bash    
    
        git push production

#. Push updates to origin with 

    .. code:: bash
    
        git push origin

#. Merge updates onto development branch so that the development branch remains up to date with the current master branch

    .. code:: bash
        
        git checkout development && git merge master

The same process should be followed for both updates to WordPress itself and to any plugins that require updating.  Following this process ensures that production, testing, and development servers will stay in sync.