<?php
/**
 * This is the template that displays the front page by default.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cnmi_scholars
 */
 get_header(); ?>

  <div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
      <h1 class="sr-only">CNMI PSS Main Page</h1>
      <div class="jumbotron container">
        <div id="myCarousel" class="carousel slide">
          <!-- Indicators -->
          <ol id="carousel-indicators" class="carousel-indicators">
          </ol>

          <!-- Wrapper for slides -->
          <div id="carousel-inner" class="carousel-inner">
            <?php
            // Loop goes here
            $news = new WP_Query(array(
              'posts_per_page' => 5,
            ));
            $showcases = new WP_Query(array(
              'post_type' => 'showcase',
              'posts_per_page' => 3,
            ));
            while($news->have_posts()):
              $news->the_post();?>
              <div class="item">
                <h2 class="carousel-img-title">PSS News: <?php the_title(); ?></h2>
                <a title="Link to <?php the_title()?> article" href=<?php the_permalink() ?>>
                  <?php the_post_thumbnail('full', array('class' => 'jumbo-img')); ?>
                </a>
              </div>
            <?php endwhile;
             ?>
          </div>
          <script>
            // Create Correct Number of carousel indicators based on number of posts
            // show from $news and $showcases
            let first = jQuery('#carousel-inner').children()[0];
            jQuery(first).addClass('active');
            jQuery('#carousel-inner').children().each((index) => {
              let listItem = '<li data-target="#myCarousel" data-slide-to="'
                + index + '" '
                + (index === 0 ? 'class="active"' : '')
                + '></li>';
              jQuery('#carousel-indicators').append(listItem)
            });
          </script>

          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="container">
        <div class="row school-links">
          <div class="col-xs-12">
            <h2 class="section-title">Our Schools</h2>
          </div>
          <div class="col-xs-12">
            <ul class="nav nav-tabs" role="tablist" id="tablist">
              <li role="presentation"
                class="active">
                <a
                  href="#head-start-links"
                  role="tab"
                  aria-controls="head-start-links"
                  data-toggle="tab">
                  Head Start / Early Head Start
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#elem-links"
                  role="tab"
                  aria-controls="elem-links"
                  data-toggle="tab">
                  Elementary Schools
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#middle-links"
                  role="tab"
                  aria-controls="middle-links"
                  data-toggle="tab">
                  Middle Schools
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#high-links"
                  role="tab"
                  aria-controls="high-links"
                  data-toggle="tab">
                  High Schools
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade in active" id="head-start-links">
                <?php
                cnmi_create_school_btns(array('Head Start'));
                ?>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="elem-links">
                <?php
                cnmi_create_school_btns(array('Elementary School'));
                ?>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="middle-links">
                <?php
                cnmi_create_school_btns(array('Middle School'));
                ?>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="high-links">
                <?php
                cnmi_create_school_btns(array('Jr Sr High School', 'High School'));
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="container">
        <div class="row notice">
          <div class="col-xs-12">
            <h2 class="section-title">Notice to Persons with Disabilities</h2>
            <p class="section-text">
              THE CNMI PSS’ current website content and functionality is not accessible to people with disabilities including but not limited to those who are blind, have low-vision, those with disabilities affecting fine motor control, or by those who are deaf. As such, these barriers deny persons with disabilities access to programs, services, and activities, offered on the website and may impede CNMI PSS’ communications with persons with disabilities.
            </p>
            <p class="section-text">
              Anyone facing a barrier to access to the CNMI PSS’ website content and functionality can contact Associate Commissioner Glenn Muna at (670) 783-8683 or glenn.muna@cnmipss.org or his office at (670) 664-3820 and the requested functionality and or content will be made accessible and or available to you within 24 hours of your request. If you would like to file a formal grievance against the CNMI PSS pursuant to the requirements of Section 504 and Title II, you may submit such grievance to the Legal Counsel Office Attorneys: Adam Hardwicke (670) 783-8966 adam.hardwicke@cnmipss.org or Tiberius Mocanu (670) 287-8427 tiberius.mocanu@cnmipss.org.
            </p>
          </div>
        </div>
      </div>

    </main><!-- #main -->
  </div><!-- #primary -->

 <?php
 get_footer();
