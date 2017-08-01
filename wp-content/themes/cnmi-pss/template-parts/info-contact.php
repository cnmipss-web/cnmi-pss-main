<?php
/**
 * Template part for displaying page contact info in other pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package CNMI_PSS
 */

?>

<?php
$contact = get_field('contact_name')->post_title;
$include = get_field('include_info');
if(strlen($contact) > 0):
  ?>
  <p>For more info contact <?php echo $contact; ?>:</p>
  <?php
  $contact = strtolower($contact);
  preg_replace('/\s/', '-', $contact);
  cnmi_contact_info($contact, $include);
endif;?>
