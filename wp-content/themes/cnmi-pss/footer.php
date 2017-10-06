<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package CNMI_PSS
 */

// Continued from #content
?>
    <div class="footer-notice">
        <div class="container">
            <div class="row notice">
                <div class="col-xs-12">
                    <h2 class="section-title">Notice to Persons with Disabilities</h2>
                </div>
                <div class="col-xs-12 col-sm-10 col-sm-push-1">
                    <p class="section-text">
                        THE CNMI PSS’ current website content and functionality is not accessible to people with disabilities including but not limited
                        to those who are blind, have low-vision, those with disabilities affecting fine motor control, or
                        by those who are deaf. As such, these barriers deny persons with disabilities access to programs,
                        services, and activities, offered on the website and may impede CNMI PSS’ communications with persons
                        with disabilities.
                    </p>
                    <p class="section-text">
                        Anyone facing a barrier to access to the CNMI PSS’ website content and functionality can contact Associate Commissioner Glenn
                        Muna at (670) 783-8683 or glenn.muna@cnmipss.org or his office at (670) 664-3820 and the requested
                        functionality and or content will be made accessible and or available to you within 24 hours of your
                        request. If you would like to file a formal grievance against the CNMI PSS pursuant to the requirements
                        of Section 504 and Title II, you may submit such grievance to the Legal Counsel Office Attorneys:
                        Adam Hardwicke (670) 783-8966 adam.hardwicke@cnmipss.org or Tiberius Mocanu (670) 287-8427 tiberius.mocanu@cnmipss.org.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- #content -->

    <footer id="colophon" class="site-footer" role="contentinfo">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2>Contact District Office</h2>
                    <div class="footer-center">
                        <?php cnmi_contact_info('district-office'); ?>
                    </div>
                </div>
                <!-- <div class="col-xs-0 col-sm-3">
                 <h2>State Board of Education</h2>
                 <?php cnmi_contact_info('state-board-of-education'); ?>
                 </div>
                 <div class="col-xs-0 col-sm-3">
                 <h2>Commissioner of Education</h2>
                 <?php cnmi_contact_info('commissioner-of-education'); ?>
                 </div>
                 <div class="col-xs-6 col-sm-3">
                 <h2>Issues With Website?</h2>
                 <?php cnmi_contact_info('webmaster'); ?>
                 </div> -->
            </div>
        </div>

        <div class="site-info container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-sm-7 col-md-8">
                        <p>
                            <?php
                       $copyYear = 2017;
                       $curYear = date('Y');
                       echo trim('Copyright ©' . $copyYear . (($copyYear != $curYear) ? '-' . $curYear : '') . ' CNMI PSS.');
                       ?>
                        </p>
                    </div>
                    <div class="col-xs-6 col-sm-5 col-md-4">
                        <p style="white-space: pre-wrap">Contact Webmaster: webmaster@cnmipss.org</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- #colophon -->
    </div>
    <!-- #page -->

    <?php wp_footer(); ?>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
    <script src="/wp-content/dist/js/compiled/cnmipss.js"></script>
    </body>

    </html>