<?php
/**
 * Template for search form
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package CNMI_PSS
 */

?>
<form class="search-form form-inline" action="/" method="get">
    <div class="form-group" >
        <label for="search" class="screen-reader-text">Search</label>
        <input class="search-field form-control" type="text" name="s" id="search" value="<?php the_search_query(); ?>" />
        <input class="search-submit btn btn-default" type="submit" alt="Search" src="<?php bloginfo( 'template_url' ); ?>/images/search.png" />
    </div>
</form>
