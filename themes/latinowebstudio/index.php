<?php

get_header();

// Fetch the posts page title for the header
$posts_page_id = get_option('page_for_posts');
$posts_page_title = get_the_title($posts_page_id);
?>

<!-- <div class="col-12 text-center text-white" style="padding-top:25px;padding-bottom:25px;background:#1E2D34;">

</div> -->

<section class="body bg-accent-secondary-gradient text-white" style="padding:50px 0;">
    <div class="container">
        <div class="row">
			<div class="col-12">
                <div style="padding-left:15px;">
                    <h1><?php echo esc_html($posts_page_title); ?></h1>
                </div>
			</div>
<div class="col-md-9 order-1 d-flex flex-wrap">
            <?php
            if (have_posts()) :
                $counterBlog = 0;
                while (have_posts()) : the_post();
                    $counterBlog++;
                    if ($counterBlog > 2) {
                        $counterBlog = 1; // Reset counter for delay calculation
                    }

                    ?>

                    <?php echo get_template_part('partials/blogs-query'); ?>
                    
            <?php
                endwhile;

                echo '<div class="col-12 d-flex justify-content-center pt-4">';
                the_posts_pagination(array(
                    'mid_size' => 2, // Reduced mid_size to show fewer page numbers
                    'prev_text' => __('Previous Page', 'textdomain'),
                    'next_text' => __('Next Page', 'textdomain'),
                ));
                echo '</div>';

            else : ?>
                <div class="col-12"><p><?php echo esc_html__('No posts found.', 'textdomain') ?></p></div>
<?php           
	endif;
            ?>
			</div>
			<?php echo get_template_part('partials/sidebar'); ?>
        </div>
    </div>
</section>

<section class="position-relative text-white bg-black" style="padding:100px 0px;" id="new-patient-special"><div class="container" style="" id=""><div class="row justify-content-end background-wrapper" style="background: url(/wp-content/uploads/2025/08/Radiant-Results-Weight-Loss-12.jpg) center/cover no-repeat;" id=""><div class="col-lg-6 text-left position-relative aos-init aos-animate" style="padding:150px 50px;background:rgba(0,0,0,0.65);" id="" data-aos="fade-up" data-aos-delay="">
<?php echo do_shortcode('[new_patient_special]') ?>
    
    
</div></div></div></section>

<?php get_footer(); ?>