<?php

if(!is_page(1807)){
	echo get_template_part('lead-magnet/lead-magnet');	
}

?>

<div class="bg-accent" style="height:20px"></div>

<?php

echo '<footer>';
echo '<section class="text-white bg-accent-secondary-gradient" style="padding-top:50px;padding-bottom:25px;">';
echo '<div class="container">';
echo '<div class="row justify-content-center">';

echo '<div class="col-12 text-center" style="">';

wp_nav_menu(array(
    'menu' => 'footer',
    'menu_class'=>'menu list-unstyled mb-0 d-flex justify-content-center align-items-center flex-wrap',
));

echo '</div>';

?>
<div class="col-lg-6 text-center" style="padding:20px 0;">
<a href="<?php echo home_url() ?>" title="Homepage link for <?php echo get_bloginfo('name') ?> - <?php echo get_bloginfo('description') ?>">
<div style="max-width:405px;fill:white;margin:auto;" id="logoMain">
<div style="pointer-events:none;">
<?php echo logoSVG(); ?>
</div>
</div>
</a>
</div>
<div class="col-12"></div>
<div class="col-lg-3 col-md-6">
    <a class="d-flex align-items-center justify-content-lg-start justify-content-center phone text-white" role="button" href="tel:+1<?php echo globalPhone(); ?>" style="font-size:25px;" target="" id="">
<svg fill="white" style="height:25px;width:25px;margin-right:10px;" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 417">
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path d="M101.7,62.6c13.02,12.64,29.74,28.29,41.38,41.77,24.86,28.78-11.76,49.9-29.55,69.1-5.93,6.4-3.31,8.95-.04,15.92,7.69,16.42,21.12,33.72,33.07,47.33,23.96,27.3,53.38,52.7,86.91,67.44,2.11.28,3.7-1.06,5.25-2.27,20.84-16.42,40.24-57.45,70.92-30.98,18.3,15.8,35.33,36.68,52.83,53.54,17.17,24.99-11.04,44.01-26.89,59.82-10.66,10.63-15.36,16.85-30.92,21.02-6.28,1.68-17.13,2.63-23.79,1.76-.92-.12-.64-.93-1.06-1.03-2.05-.48-5.22-.23-7.33-.57-56.76-9.31-120.64-51.61-161.56-91.14-44.54-43.03-91.29-109.94-102.38-171.79-1.39-7.73-2.63-19.39-1.6-27.43.11-.87.89-.7.99-1.11,2.62-10.37,3.49-15.97,10.56-24.68,10.84-13.35,27.21-26.31,39.56-38.46,18.57-11.35,30.75-.74,43.64,11.77Z"/>
      <path d="M217.11,7.65c5.81,2.46,15.03,3.27,21.72,4.97,80.55,20.5,143.36,85.38,164.04,165.56,1.01,3.92,1.42,8.8,2.46,12.54.34,1.24,2,1.69,1.18,4.04l-28.8,4.81-2.11-.36c-.23-4.01-1.22-8.12-2.19-12.04-18.27-73.68-75.84-130.15-150.06-146.58-4.57-1.01-9.32-1.5-13.89-2.6l3.78-30.5c1.21.15,2.73-.32,3.86.16Z"/>
      <path d="M291.96,131.53c16.95,18.94,28.17,42.08,33.19,67,.1,1.29-.74,1.83-1.89,2.12-7.2,1.77-16.78,2.73-24.24,3.72-1.33.18-2.5,1.43-4.05.44-5.12-28.8-22.35-54.72-46.8-70.67-12.91-8.42-27.54-13.53-42.69-16.24l3.53-28.99c.18-.31.42-.6.75-.76,1.25-.63,13.19,1.9,15.5,2.49,24.62,6.26,49.83,22.04,66.71,40.91Z"/>
    </g>
  </g>
</svg> <?php echo globalPhone(); ?></a>
<!-- <div class="divider w-100"></div>
<p style="font-size:26px;text-align:center;">1234 Main Street<br>  
Sandy, UT 84070</p> -->
</div>


<div class="col-lg-3 col-md-6">
<p style="margin-top:0px;"><?php echo companyAbout() ?></p>
</div>
<div class="col-lg-3 col-md-6">
<!-- <div class="divider w-100"></div> -->
<p style="margin:0px;font-size:16px;text-align:center;">Sandy, UT 84070</p>
</div>
<style>
  .quote {
    display: block;
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 300;
    text-align: center;
    line-height: 1.4;
    letter-spacing: 1px;
    quotes: "“" "”";
  }

  .quote::before {
    content: open-quote;
  }

  .quote::after {
    content: close-quote;
  }
</style>

<div class="col-12">
    <hr style="margin:20px auto !important;border-color:#f7f7f7;">
</div>


<div class="col-12 text-center" style="color:gray;">
    <small class=""><a href="https://latinowebstudio.com/" target="_blank" rel="noopener noreferrer" title="Web Design, Development & SEO done by Latino Web Studio in Denver, CO" style="color:gray;" class="">Web Design &amp; Search Engine Optimization</a> done by Latino Web Studio.</small>
</div>

</div>
</div>



</section>

<!-- The first Modal -->
<div id="mobileMenu" class="modal-custom mobile-menu" style="opacity:0;pointer-events:none;">

<!-- Modal content -->
<div class="modal-content-menu modal-content-custom bg-accent-secondary" style="padding: 50px 15px;
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 0;
    border-left: 0;
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    height: 100vh;
	background: var(--accent-secondary);">
<span class="close-custom" id="navMenuClose">&times;</span>
	<?php

echo '<div style="width:100%;max-width:165px;" id="logoMain">';
echo '<a href="' . home_url() . '" title="Homepage link for Mark McFarland, P.E. - Expert Witness & Forensic Engineering">';

echo logoSVG();
echo '</a>';
echo '</div>';

wp_nav_menu(array(
    'menu' => 'primary',
    'menu_class'=>'menu list-unstyled mb-0'
));
?>
<?php echo do_shortcode('[button class="white" href="#new-patient-special"]New Patient Special[/button]') ?>
		<a class="d-flex align-items-center phone text-white" role="button" href="tel:+1<?php echo globalPhone(); ?>" style="" target="" id="">
<svg fill="white" style="height:15px;width:15px;margin-right:10px;" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 417">
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path d="M101.7,62.6c13.02,12.64,29.74,28.29,41.38,41.77,24.86,28.78-11.76,49.9-29.55,69.1-5.93,6.4-3.31,8.95-.04,15.92,7.69,16.42,21.12,33.72,33.07,47.33,23.96,27.3,53.38,52.7,86.91,67.44,2.11.28,3.7-1.06,5.25-2.27,20.84-16.42,40.24-57.45,70.92-30.98,18.3,15.8,35.33,36.68,52.83,53.54,17.17,24.99-11.04,44.01-26.89,59.82-10.66,10.63-15.36,16.85-30.92,21.02-6.28,1.68-17.13,2.63-23.79,1.76-.92-.12-.64-.93-1.06-1.03-2.05-.48-5.22-.23-7.33-.57-56.76-9.31-120.64-51.61-161.56-91.14-44.54-43.03-91.29-109.94-102.38-171.79-1.39-7.73-2.63-19.39-1.6-27.43.11-.87.89-.7.99-1.11,2.62-10.37,3.49-15.97,10.56-24.68,10.84-13.35,27.21-26.31,39.56-38.46,18.57-11.35,30.75-.74,43.64,11.77Z"/>
      <path d="M217.11,7.65c5.81,2.46,15.03,3.27,21.72,4.97,80.55,20.5,143.36,85.38,164.04,165.56,1.01,3.92,1.42,8.8,2.46,12.54.34,1.24,2,1.69,1.18,4.04l-28.8,4.81-2.11-.36c-.23-4.01-1.22-8.12-2.19-12.04-18.27-73.68-75.84-130.15-150.06-146.58-4.57-1.01-9.32-1.5-13.89-2.6l3.78-30.5c1.21.15,2.73-.32,3.86.16Z"/>
      <path d="M291.96,131.53c16.95,18.94,28.17,42.08,33.19,67,.1,1.29-.74,1.83-1.89,2.12-7.2,1.77-16.78,2.73-24.24,3.72-1.33.18-2.5,1.43-4.05.44-5.12-28.8-22.35-54.72-46.8-70.67-12.91-8.42-27.54-13.53-42.69-16.24l3.53-28.99c.18-.31.42-.6.75-.76,1.25-.63,13.19,1.9,15.5,2.49,24.62,6.26,49.83,22.04,66.71,40.91Z"/>
    </g>
  </g>
</svg> <?php echo globalPhone(); ?></a>

<?php
echo '</div>';
echo '</div>';
// end of mobile nav menu


echo '</footer>';


echo codeFooter();
// if(get_field('footer', 'options')) { the_field('footer', 'options'); }
// if(get_field('footer_code')) { the_field('footer_code'); }

?>

<style>
label.screen-reader-text {
    display: none;
}
#searchform input#searchsubmit {
    width: 332px;
}

#searchform input#s {
    width: 300px;
}</style>
<!-- <div id="searchMenu" class="modal-custom" style="opacity:0;pointer-events:none;background-color:rgba(0, 0, 0, 0.75);">
<div class="modal-content-custom d-flex align-items-center position-relative" style="background: transparent;box-shadow: none;border: none;">
<span class="close-custom position-absolute text-white" style="top:25px;right:0px;z-index:1;font-size:4rem;">&times;</span>

<div class="row">
<div class="col-12 text-center">
<span class="h2 text-white">Search for:</span>
<?php echo get_search_form(); ?>
</div>

</div>

</div>
</div> -->

<?php

wp_footer();

echo '</body>';
echo '</html>';
?>