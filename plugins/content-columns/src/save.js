/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
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
						{ /* <div className="column-wrapper"> */ }
						{ attributes.columns.map( ( column, index ) => {
	const columnContent = (
		<div
			className={ column.data_aos_class }
			style={ column.data_aos_style }
			data-aos={ column.data_aos }
			data-aos-delay={ column.data_aos_delay }
		>
			{ column.img && (
				<img
					src={ column.img }
					alt={ column.img_alt || column.img_title }
					className={ column.img_class }
					style={ column.img_style }
				/>
			) }
			<div
				className={ ` ${ column.col_inner_class }` }
				style={ column.col_inner_style }
			>
				{ column.title && (
					<h2 className={ `h3` }>
						{ column.title }
					</h2>
				) }
				<RawHTML>
					{ column.content }
				</RawHTML>
			</div>
		</div>
	);

	if ( column.col_link ) {
		return (
			<a href={ column.col_link } key={ index } className={column.col_class} style={column.col_style}>
				{ columnContent }
			</a>
		);
	}

	return (
		<div key={ index } className={column.col_class} style={column.col_style}>
			{ columnContent }
		</div>
	);
} ) }
						{ /* </div> */ }
					</div>
				</div>
			</section>
		</div>
	);
}
