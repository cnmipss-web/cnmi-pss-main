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
              	<div class="col-xs-12 col-sm-10 col-sm-push-1">
                  	<h2 class="section-title">Notice to Persons with Disabilities</h2>
                	<p class="section-text">
                  		The CNMI Public School System is committed to providing equal access to educational and professional opportunities to all members of our community.  In accordance with the CNMI Public School System’s obligations under Title II of the Americans with Disabilities Act and Section 504 of the Rehabilitation Act, the CNMI PSS District Website has been re-designed to conform to WCAG 2.0 Level AA and WAI-ARIA 1.0 accessibility guidelines.  The changes to the website include improved compatibility with assistive technology, easier keyboard navigation, and the consistent use of text equivalents for audio/visual content, among other changes.
                  	</p>
                	<p class="section-text">
                    	If you have questions, comments, or concerns regarding the accessibility or usability of any part of the CNMI Public School System website or the websites of any individual public schools or public school programs in the CNMI, please contact the CNMI PSS Webmaster, Tyler Collins, via email at webmaster@cnmipss.org or by telephone at the CNMI PSS Office of Administrative Services (670) 664-3820. 
                	</p>
                	<p class="section-text">
                    	If you would like to file a formal grievance against the CNMI PSS pursuant to the requirements of Section 504 and Title II, you may submit such grievance to the Legal Counsel Office Attorney Ryan Meyerhoff by telephone (670) 237-3080 or email ryan.meyerhoff@cnmipss.org.
                	</p>
              	</div>
          	</div>
      	</div>
  	</div>    
</div><!-- #content -->

    <!-- #content -->

    <footer id="colophon" class="site-footer" role="contentinfo">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2>Contact District Office</h2>
                    <div class="footer-center">
                        <?php 
                        $contact = new WP_Query(array(
                            'title' => 'District Office',
                            'post_type' => 'contact_info',
                        ));
                        cnmi_contact_info($contact->posts[0]);
                        
                        ?>
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