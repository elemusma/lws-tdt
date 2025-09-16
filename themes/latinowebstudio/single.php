<?php 

get_header();

$posts_page_id = get_option( 'page_for_posts' );
$posts_page_title = get_the_title( $posts_page_id );

?>
<section>
<div class="container" style="padding:50px 0px;">
<div class="row">
<div class="col-lg-9">
<?php
if ( have_posts() ) : while ( have_posts() ) : the_post();
the_content();
endwhile; else:
echo '<p>Sorry, no posts matched your criteria.</p>';
endif;
	?>
	</div>
	<?php
get_template_part('partials/sidebar'); ?>
</div>
</div>
</section>

<section class="position-relative text-white bg-black" style="padding:100px 0px;" id="new-patient-special"><div class="container" style="" id=""><div class="row justify-content-end background-wrapper" style="background: url(/wp-content/uploads/2025/08/Radiant-Results-Weight-Loss-12.jpg) center/cover no-repeat;" id=""><div class="col-lg-6 text-left position-relative aos-init aos-animate" style="padding:150px 50px;background:rgba(0,0,0,0.65);" id="" data-aos="fade-up" data-aos-delay="">
<?php echo do_shortcode('[new_patient_special]') ?>
    
    
</div></div></div></section>

<?php

echo '<section class="bg-black text-white" style="padding:50px 0px;">';
echo '<div class="container">';

echo '<div class="row justify-content-center pt-5">';
echo '<div class="col-md-6" id="previous">';
echo '<small>Previous</small>';
echo '<h3 class="h5">' . get_previous_post_link() . '</h3>';
echo '</div>';
echo '<div class="col-md-6 text-right" id="next">';
echo '<small>Next</small>';
echo '<h3 class="h5">' . get_next_post_link() . '</h3>';
echo '</div>';
echo '</div>';
echo '</div>';
echo '</section>';
get_footer(); ?>