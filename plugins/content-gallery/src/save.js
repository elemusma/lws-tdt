/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			<section
				className={ `${ attributes.section_class }` }
				style={ `${ attributes.section_style }` }
				id={ attributes.section_id }
			>
				{ attributes.section_image && (
					<img
						src={ attributes.section_image }
						alt={ attributes.section_image_alt }
						className={ `${ attributes.section_image_class }` }
						style={ `${ attributes.section_image_style }` }
					/>
				) }

				<RawHTML>{ attributes.section_block }</RawHTML>

				<div
					className={ attributes.container_class }
					style={ attributes.container_style }
					id={ attributes.container_id }
				>
					<div
						className={ attributes.row_class }
						style={ attributes.row_style }
						id={ attributes.row_id }
					>
						<div
							className={ attributes.col_class }
							style={ attributes.col_style }
							id={ attributes.col_id }
							data-aos="fade-up"
						>
							<InnerBlocks.Content />
						</div>
						<div
							className={ attributes.col_image_class }
							style={ attributes.col_image_style }
							id={ attributes.col_image_id }
							data-aos="fade-up"
						>
							{ /* {attributes.col_image && (
			<img src={attributes.col_image} alt="" className={`${attributes.image_class}`} style={`width:100%;height:auto;${attributes.image_style}`} id={attributes.image_id} />
		)} */ }
							{ /* Your gallery rendering logic */ }
							
							{ /* Your gallery rendering logic */ }
							{ attributes.gallery_images &&
								attributes.gallery_images.map( ( image ) => (
							<div
							className={ `${ attributes.gallery_columns }` }>
								<a href={ image.url } data-lightbox={attributes.gallery_images_lightbox}>
									<img
										key={ image.id }
										src={ image.url }
										alt={ image.alt }
										style={`${ attributes.image_style }`}
										className={attributes.image_class}
									/>
									</a>
									<div className="text-center">
									  {/* Image Title */}
  {image.title && (
    <div className="image-title" style={{ fontWeight: 'bold', marginTop: '8px' }}>
      <h3 style={{marginBottom:0}}>{image.title}</h3>
    </div>
  )}

  {/* Image Caption */}
  {image.caption && (
    <div className="image-caption" style={{ fontStyle: 'italic', fontSize: '0.9em' }}>
      <h4 className="dreamboat" style={{marginTop:"-1rem"}}><RawHTML>{image.caption}</RawHTML></h4>
    </div>
  )}
  </div>
									</div>
								) ) }
						
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

// // Define your Gallery component
// const Gallery = ( { gallery_images, gallery_columns } ) => {
// 	// Render your gallery based on the images and columns
// 	// You can use the images array to loop through and display the selected images
// 	return (
// 		<div className={ `gallery columns-${ gallery_columns }` }>
// 			{ /* Your gallery rendering logic */ }
// 			{ gallery_images &&
// 				gallery_images.map( ( image ) => (
// 					<img key={ image.id } src={ image.url } alt={ image.alt } />
// 				) ) }
// 		</div>
// 	);
// };