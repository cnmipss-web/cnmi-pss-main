<?php return array(

/* Theme Admin Menu */
"menu" => array(
    array("id"    => "1",
          "name"  => "General"),
    
    array("id"    => "2",
          "name"  => "Homepage"),
),

/* Theme Admin Options */
"id1" => array(
    array("type"  => "preheader",
          "name"  => "Theme Settings"),

	array("name"  => "Display Search Form in the Header",
          "id"    => "search_form",
          "std"   => "on",
          "type"  => "checkbox"),

    array("name"  => "Custom Feed URL",
          "desc"  => "Example: <strong>http://feeds.feedburner.com/wpzoom</strong>",
          "id"    => "misc_feedburner",
          "std"   => "",
          "type"  => "text"),

    array("type"  => "preheader",
          "name"  => "Header Settings"),

	array("type"  => "startsub",
          "name"  => "Header Text"),

    array("name"  => "Display Header Text",
          "desc"  => "Leave this checked if you want to display the special text in header (demo: telephone number).",
          "id"    => "tel_enable",
          "std"   => "on",
          "type"  => "checkbox"), 
 
    array("name"  => "Header Text Caption",
          "desc"  => "Example: Call today: ",
          "id"    => "tel_caption",
          "std"   => "Edit this in WPZOOM Theme Options ",
          "type"  => "text"),

    array("name"  => "Header Text Value",
          "desc"  => "Example: 0800-123-456",
          "id"    => "tel_text",
          "std"   => "800-123-456",
          "type"  => "text"),
          
	array("type"  => "endsub"),

	array("type"  => "startsub",
          "name"  => "Header Social Icons"),

    array("name"  => "Display Social Icons in Secondary Menu",
          "desc"  => "Leave this checked if you want to display the social icons in the secondary menu in the header.",
          "id"    => "social_icons_show",
          "std"   => "on",
          "type"  => "checkbox"), 
 
    array("name"  => "E-mail Address",
          "desc"  => "Example: <strong>hello@wpzoom.com</strong>",
          "id"    => "social_icons_email",
          "std"   => "",
          "type"  => "text"),

    array("name"  => "Facebook URL",
          "desc"  => "Example: <strong>http://www.facebook.com/wpzoom</strong>",
          "id"    => "social_icons_facebook",
          "std"   => "",
          "type"  => "text"),

    array("name"  => "Twitter URL",
          "desc"  => "Example: <strong>http://twitter.com/wpzoom</strong>",
          "id"    => "social_icons_twitter",
          "std"   => "",
          "type"  => "text"),

    array("name"  => "Vimeo URL",
          "desc"  => "Example: <strong>http://www.vimeo.com/</strong>",
          "id"    => "social_icons_vimeo",
          "std"   => "",
          "type"  => "text"),

    array("name"  => "Yelp URL",
          "desc"  => "Example: <strong>http://www.yelp.com/</strong>",
          "id"    => "social_icons_yelp",
          "std"   => "",
          "type"  => "text"),

    array("name"  => "YouTube URL",
          "desc"  => "Example: <strong>http://www.youtube.com/</strong>",
          "id"    => "social_icons_youtube",
          "std"   => "",
          "type"  => "text"),

	array("type"  => "endsub"),

 	array("type"  => "preheader",
          "name"  => "Global Menu Options"),

    array("name"  => "Show main menu",
          "id"    => "menu_top_show",
          "std"   => "on",
          "type"  => "checkbox"),

    array("name"  => "Show secondary menu",
          "id"    => "menu_top_secondary_show",
          "std"   => "on",
          "type"  => "checkbox"),

 	array("type"  => "preheader",
          "name"  => "Global Posts Options"),
	
     array("name"  => "Post Archives Columns",
          "desc"  => "Display posts on archives in one column or two.",
          "id"    => "display_posts_columns",
          "options" => array('One', 'Two'),
          "std"   => "One",
          "type"  => "select"),

    array("name"  => "Posts with Thumbnails",
          "desc"  => "How many posts to display with thumbnails on archive pages. Default: 4.",
          "id"    => "display_with_thumbs",
          "std"   => "4",
          "type"  => "text"),

    array("name"  => "Excerpt length",
          "desc"  => "Default: <strong>30</strong> (words)",
          "id"    => "excerpt_length",
          "std"   => "30",
          "type"  => "text"),

    array("name"  => "Show Date/time",
          "desc"  => "<strong>Date/Time format</strong> can be changed <a href='options-general.php' target='_blank'>here</a>.",
          "id"    => "display_date",
          "std"   => "on",
          "type"  => "checkbox"),  

    array("name"  => "Show Category",
          "id"    => "display_category",
          "std"   => "on",
          "type"  => "checkbox"),           

	array("type"  => "preheader",
          "name"  => "Single Post Options"),
          
	array("name"  => "Show Date/time",
          "desc"  => "<strong>Date/Time format</strong> can be changed <a href='options-general.php' target='_blank'>here</a>.",
          "id"    => "post_date",
          "std"   => "on",
          "type"  => "checkbox"),  
          
    array("name"  => "Show Category",
          "id"    => "post_category",
          "std"   => "off",
          "type"  => "checkbox"), 
          
    array("name"  => "Show Author",
          "desc"  => "You can edit your profile on this <a href='profile.php' target='_blank'>page</a>.",
          "id"    => "post_author",
          "std"   => "on",
          "type"  => "checkbox"),
          
    array("name"  => "Show Tags",
          "id"    => "post_tags",
          "std"   => "on",
          "type"  => "checkbox"),
          
	array("name"  => "Show Social Buttons",
          "id"    => "post_share",
          "std"   => "on",
          "type"  => "checkbox"),
          
    array("name"  => "Show Comments",
          "id"    => "post_comments",
          "std"   => "on",
          "type"  => "checkbox"),

	array("type"  => "preheader",
          "name"  => "Single Page Options"),
          
	array("name"  => "Show Social Buttons",
          "id"    => "page_share",
          "std"   => "on",
          "type"  => "checkbox"),
          
    array("name"  => "Show Comments",
          "id"    => "page_comments",
          "std"   => "on",
          "type"  => "checkbox"),

),

"id2" => array(          

	array("type"  => "preheader",
          "name"  => "Featured Posts"),

	array("name"  => "Display Featured Posts",
          "desc"  => "Display featured posts at the top of the Homepage.<br />If you have troubles displaying posts in this section, please <a href='http://www.wpzoom.com/documentation/erudito/#featured' target='_blank'>read the documentation</a>.",
          "id"    => "featured_enable",
          "std"   => "on",
          "type"  => "checkbox"),

	array("name"  => "Number of posts to display",
          "desc"  => "Choose how many posts should be displayed in the slider.",
          "id"    => "featured_number",
          "std"   => "5",
          "type"  => "text"),

 	array("name"  => "Autoplay slider",
          "desc"  => "Should the slider start rotating automatically?",
          "id"    => "featured_rotate",
          "std"   => "off",
          "type"  => "checkbox"),

	array("name"  => "Autoplay Interval",
          "desc"  => "Select the interval (in miliseconds) at which the slider should change posts (if autoplay is enabled). Default: 5000 (5 seconds).",
          "id"    => "featured_interval",
          "std"   => "5000",
          "type"  => "text"),

    ),

/* end return */);