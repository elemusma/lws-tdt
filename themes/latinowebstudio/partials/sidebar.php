<?php 

echo '<div class="col-lg-3 col-12 order-2">';
// echo '<div class="card p-3 mb-2">';
// get_search_form();
// echo '</div>';

?>

<div class="card text-white d-lg-block d-none" style="background:#3d3d3d;padding:15px;border-radius:25px;">
	<?php 
	// echo do_shortcode('[new_patient_special]'); 
	?>
	<h2 class="" style="margin-top:0px;font-size:22px;">New Patient Special</h2>
	<div class="divider" style="margin-left:0;"></div>
<h3 style="margin-bottom:0px;"><strong class="h5" style="text-shadow:none;">$79 Red Light Body Sculpting</strong></h3>
<!-- <p>or</p> -->
<h3 style="margin-top:0px;"><strong class="h5" style="text-shadow:none;">$79 Skin Rejuvenation</strong></h3>
<p>Claim your $79 New Patient Special today and experience your first full-body light therapy session—slimming, tightening, and rejuvenating with zero pain or downtime.</p>
<?php 
echo do_shortcode('[button target="_blank" href="https://offer.getradiantresults.com/" class="white" style="margin-left:0px;"]Get New Patient Special[/button]');
// echo do_shortcode('[gravityform id="1" title="false" description="false" ajax="true"]'); 
?>
</div>

<?php
echo '<div class="card p-3 mt-2 mb-2">';
echo '<h3 class="teko">Recent Posts</h3>';

$recentBlog = new WP_Query(array(
'posts_per_page' => 5,
'post_type' => 'post',
'post__not_in' => [get_the_ID()],
));
echo '<ul>';
while($recentBlog->have_posts()){
$recentBlog->the_post();
echo '<li><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></li>';
} wp_reset_postdata();
echo '</ul>';
echo '</div>';
echo '</div>';

?>