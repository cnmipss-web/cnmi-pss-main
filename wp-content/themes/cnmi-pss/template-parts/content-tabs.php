<?php
/**
 * Template part for tabbed content using Bootstrap tabs
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package CNMI_PSS
 */

?>

<div class="row">
    <div class="col-xs-12">
        <ul class="nav nav-tabs" role="tablist" id="tablist">
            <?php
            $tabs = cnmi_get_report_tabs();
            foreach ($tabs as $this_tab) {
                if(strlen($this_tab['title']) > 0) {
            ?>
                <li role="presentation" class="active in">
                    <a href="<?php echo '#' . $this_tab['id']; ?>"
                       role="tab"
                       aria-controls="<?php echo $this_tab['id']; ?>"
                       data-toggle="tab">
                        <?php echo $this_tab['title']; ?>
                    </a>
                </li>
            <?php
            }
            }
            ?>
        </ul>
        <div class="tab-content">
            <?php
            foreach ($tabs as $this_tab) {
                if (strlen($this_tab['title']) > 0) {
            ?>
                <div role="tabpanel" class="tab-pane active in"
                     id="<?php echo $this_tab['id']; ?>">
                    <?php echo $this_tab['content']; ?>
                </div>
            <?php
            }
            }
            ?>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-xs-12 col-sm-10 col-sm-push-1">
        <?php get_template_part( 'template-parts/info', 'contact' ); ?>
    </div>
</div>
<script>
 (function() {
     //Clear noscript display of ALL tabs
     let allTabs = jQuery('#tablist').children();
     let allPanes = jQuery('.tab-pane');
     jQuery(allTabs).removeClass('active').removeClass('in');
     jQuery(allPanes).removeClass('active').removeClass('in');
     // Set active tab and tabpanel
     let firstTab = jQuery('#tablist').children()[0];
     jQuery(firstTab).addClass('active').addClass('in');
     let firstPane = jQuery(".tab-pane")[0];
     jQuery(firstPane).addClass('active').addClass('in');
 })()
</script>
