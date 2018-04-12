<?php
/**
 * Template part for displaying page contact info in other pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package CNMI_PSS
 */

?>
<p>For more info contact: </p>

<?php
$contacts = get_field('contact_name');
$include = get_field('include_info');

foreach ($contacts as $entry) {
    $name = $entry->post_title;
    if(strlen($name) > 0) { ?>
        <p><?php echo $name; ?></p>
        <?php 
        cnmi_contact_info($entry, $include);
    }
}
?>
