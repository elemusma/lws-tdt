/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, RichText } from '@wordpress/block-editor';
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
				className={ `position-relative ${ attributes.section_class }` }
				style={ `${ attributes.section_style }` }
				id={ attributes.section_id }
			>
				{ attributes.section_image && (
					<img
						src={ attributes.section_image }
						alt={ attributes.section_image_alt || attributes.section_image_title }
						className={ ` ${ attributes.section_image_class }` }
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
						{ attributes.cards.map( ( card, index ) => {
							// Default inline styles for the card wrapper
							const cardDefaultStyle = 'position:relative;overflow:hidden;border-radius:8px;height:400px;display:block;text-decoration:none;';
							const cardCombinedStyle = card.card_style ? `${cardDefaultStyle}${card.card_style}` : cardDefaultStyle;
							
							// Default inline styles for the image
							const imgDefaultStyle = 'width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;';
							const imgCombinedStyle = card.img_style ? `${imgDefaultStyle}${card.img_style}` : imgDefaultStyle;
							
							// Default inline styles for the overlay
							const overlayDefaultStyle = 'position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);display:flex;align-items:flex-end;';
							const overlayCombinedStyle = card.overlay_style ? `${overlayDefaultStyle}${card.overlay_style}` : overlayDefaultStyle;
							
							// Default inline styles for content wrapper
							const contentDefaultStyle = 'padding:30px;color:#ffffff;width:100%;';
							const contentCombinedStyle = card.content_wrapper_style ? `${contentDefaultStyle}${card.content_wrapper_style}` : contentDefaultStyle;
							
							// Default inline styles for title
							const titleDefaultStyle = 'color:#ffffff;font-size:28px;font-weight:bold;margin-bottom:10px;line-height:1.2;';
							const titleCombinedStyle = card.title_style ? `${titleDefaultStyle}${card.title_style}` : titleDefaultStyle;
							
							// Default inline styles for description
							const descDefaultStyle = 'color:#ffffff;font-size:16px;margin-bottom:15px;line-height:1.4;';
							const descCombinedStyle = card.description_style ? `${descDefaultStyle}${card.description_style}` : descDefaultStyle;
							
							// Default inline styles for link
							const linkDefaultStyle = 'color:#ff6b6b;font-size:16px;font-weight:600;text-decoration:none;border-bottom:2px solid #ff6b6b;display:inline-block;padding-bottom:2px;';
							const linkCombinedStyle = card.card_link_style ? `${linkDefaultStyle}${card.card_link_style}` : linkDefaultStyle;

							return (
								<div 
									key={ index }
									className={ card.card_class } 
									style={ cardCombinedStyle } 
									id={ card.card_id }
									data-aos={ card.data_aos }
									data-aos-delay={ card.data_aos_delay }
									data-aos-duration={ card.data_aos_duration }
								>
									{ card.img && (
										<img
											src={ card.img }
											alt={ card.img_alt || card.img_title }
											className={ card.img_class }
											style={ imgCombinedStyle }
										/>
									) }
									
									<div className={ card.overlay_class } style={ overlayCombinedStyle }>
										<div className={ card.content_wrapper_class } style={ contentCombinedStyle }>
											{ card.title && (
												<RichText.Content
													tagName="h2"
													value={ card.title }
													className={ card.title_class }
													style={ titleCombinedStyle }
												/>
											) }
											
											{ card.description && (
												<RichText.Content
													tagName="p"
													value={ card.description }
													className={ card.description_class }
													style={ descCombinedStyle }
												/>
											) }
											
											{ card.card_link && (
												<a 
													href={ card.card_link }
													className={ card.card_link_class }
													style={ linkCombinedStyle }
												>
													{ card.card_link_text }
												</a>
											) }
										</div>
									</div>
								</div>
							);
						} ) }
					</div>
				</div>
			</section>
		</div>
	);
}