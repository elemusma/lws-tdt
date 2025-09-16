/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	useBlockProps,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	__experimentalInputControl as InputControl,
	TextControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		section_style,
		section_class,
		section_id,
		section_image,
		section_image_class,
		section_image_style,
		section_block,
		container_style,
		container_class,
		container_id,
		row_style,
		row_class,
		row_id,
		col_style,
		col_class,
		col_id,
		columns_style,
		columns_class,
		columns_id,
		columns,
	} = attributes;

	const [ value, setValue ] = useState( '' );

	const utilityFunction = () => ({
		col_class: 'col-md-6 d-flex align-items-stretch',
		col_style: '',
		col_id: '',
		inner_col_style: '',
		inner_col_class: '',
		data_aos: 'fade-up',
		data_aos_delay:'',
		img: '',
		img_class: 'w-100',
		img_style: '',
		title: 'new column',
		content: 'new column content',
		code_block: ''
	})

	const addColumn = () => {
		setAttributes( {
			columns: [
				...columns,
				utilityFunction(),
			],
		} );
	};

	const updateColumn = (columnIndex, field, value) => {
		setAttributes({
			columns: columns.map((column, index) => {
				if (index === columnIndex) {
					// Check if the value is an object (in case of multiple updates)
					if (typeof value === 'object' && value !== null) {
						return {
							...column,
							...value, // Spread the object fields
						};
					}
					return {
						...column,
						[field]: value, // Single field update
					};
				}
				return column;
			}),
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Section' ) } initialOpen={ false }>
					<InputControl
						label="Section Style"
						value={ section_style }
						onChange={ ( nextValue ) =>
							setAttributes( { section_style: nextValue } )
						}
					/>
					<InputControl
						label="Section Class"
						value={ section_class }
						onChange={ ( nextValue ) =>
							setAttributes( { section_class: nextValue } )
						}
					/>
					<InputControl
						label="Section ID"
						value={ section_id }
						onChange={ ( nextValue ) =>
							setAttributes( { section_id: nextValue } )
						}
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Background Image' ) }
					initialOpen={ false }
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) =>
								setAttributes( { section_image: media.url } )
							}
							type="image"
							allowedTypes={ [ 'image' ] }
							value={ section_image }
							render={ ( { open } ) => (
								<div>
									{ section_image && (
										<Button
											isLink
											isDestructive
											onClick={ () =>
												setAttributes( {
													section_image: '',
												} )
											}
										>
											{ __( 'Remove Section Image' ) }
										</Button>
									) }
									<Button
										onClick={ open }
										icon="upload"
										className="editor-media-placeholder__button is-button is-default is-large"
									>
										{ __( 'Select Section Image' ) }
									</Button>
								</div>
							) }
						/>
					</MediaUploadCheck>

					<InputControl
						label="Background Image Class"
						value={ section_image_class }
						onChange={ ( nextValue ) =>
							setAttributes( { section_image_class: nextValue } )
						}
					/>
					<InputControl
						label="Background Image Style"
						value={ section_image_style }
						onChange={ ( nextValue ) =>
							setAttributes( { section_image_style: nextValue } )
						}
					/>
				</PanelBody>
				<PanelBody title={ __( 'Code Block' ) } initialOpen={ false }>
					{ /* <InputControl
						label="Code Block"
						value={section_block}
						onChange={(nextValue) => setAttributes({ section_block: nextValue })}
					/> */ }
					<label style={ { lineHeight: '2' } }>Code Block</label>
					<textarea
						id="sectionStyleTextarea"
						value={ attributes.section_block }
						onChange={ ( event ) =>
							setAttributes( {
								section_block: event.target.value,
							} )
						}
						placeholder="Enter section block here"
						style={ { width: '100%', height: '100px' } }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Container' ) } initialOpen={ false }>
					<InputControl
						label="Container Section Style"
						value={ container_style }
						onChange={ ( nextValue ) =>
							setAttributes( { container_style: nextValue } )
						}
					/>
					<InputControl
						label="Container Section Class"
						value={ container_class }
						onChange={ ( nextValue ) =>
							setAttributes( { container_class: nextValue } )
						}
					/>
					<InputControl
						label="Container Section ID"
						value={ container_id }
						onChange={ ( nextValue ) =>
							setAttributes( { container_id: nextValue } )
						}
					/>
				</PanelBody>
				<PanelBody title={ __( 'Row' ) } initialOpen={ false }>
					<InputControl
						label="Row Style"
						value={ row_style }
						onChange={ ( nextValue ) =>
							setAttributes( { row_style: nextValue } )
						}
					/>
					<InputControl
						label="Row Class"
						value={ row_class }
						onChange={ ( nextValue ) =>
							setAttributes( { row_class: nextValue } )
						}
					/>
					<InputControl
						label="Row ID"
						value={ row_id }
						onChange={ ( nextValue ) =>
							setAttributes( { row_id: nextValue } )
						}
					/>
				</PanelBody>
				<PanelBody title={ __( 'Column' ) } initialOpen={ false }>
				<InputControl
						label="Column Style"
						value={ col_style }
						onChange={ ( nextValue ) =>
							setAttributes( { col_style: nextValue } )
						}
					/>
					<InputControl
						label="Column Class"
						value={ col_class }
						onChange={ ( nextValue ) =>
							setAttributes( { col_class: nextValue } )
						}
					/>
					<InputControl
						label="Column ID"
						value={ col_id }
						onChange={ ( nextValue ) =>
							setAttributes( { col_id: nextValue } )
						}
					/>
				</PanelBody>
				
				<PanelBody
					title={ __( 'Columns Settings' ) }
					initialOpen={ false }
				>
					<InputControl
						label="Column Style"
						value={ columns_style }
						onChange={ ( nextValue ) =>
							setAttributes( { columns_style: nextValue } )
						}
					/>
					<InputControl
						label="Column Class"
						value={ columns_class }
						onChange={ ( nextValue ) =>
							setAttributes( { columns_class: nextValue } )
						}
					/>
					<InputControl
						label="Column ID"
						value={ columns_id }
						onChange={ ( nextValue ) =>
							setAttributes( { columns_id: nextValue } )
						}
					/>
					<button onClick={ () => addColumn() }>
						Add New Column
					</button>
				</PanelBody>
			</InspectorControls>
			<section { ...useBlockProps() }>
				<img src={ section_image } alt="" />
				{ console.log( section_image ) }
				<div className="column-wrapper">

				<InnerBlocks />

					{ columns.map( ( column, index ) => {
						return (
							<div
								className={ `column ${ column.col_class }` }
								style={ {
									padding: '25px',
									borderBottom: '1px solid',
									marginBottom: '25px',
								} }
							>
								<div style={{display:'flex'}}>
								<div style={{paddingRight:'25px'}}>
								<p style={ { marginBottom: '0px' } }>
									Column Class
								</p>
								<input
									type="text"
									value={ column.col_class }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'col_class',
											content.target.value
										)
									}
								/>
								</div>
								<div style={{paddingRight:'25px'}}>
								<p style={ { marginBottom: '0px' } }>
									Column Style
								</p>
								<input
									type="text"
									value={ column.col_style }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'col_style',
											content.target.value
										)
									}
								/>
								</div>
								<div>
								<p style={ { marginBottom: '0px' } }>
									Column ID
								</p>
								<input
									type="text"
									value={ column.col_id }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'col_id',
											content.target.value
										)
									}
								/>
								</div>
								</div>
								<div style={{display:'flex'}}>
								<div style={{paddingRight:'25px'}}>
								<p style={ { marginBottom: '0px' } }>Inner Column Style</p>
								<input
									type="text"
									style={{width:'300px'}}
									value={ column.inner_col_style }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'inner_col_style',
											content.target.value
										)
									}
								/>
								
								</div>
								<div>
								<p style={ { marginBottom: '0px' } }>Inner Column Class</p>
								<input
									type="text"
									style={{width:'300px'}}
									value={ column.inner_col_class }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'inner_col_class',
											content.target.value
										)
									}
								/>
								
								</div>
								</div>
								<div style={{display:'flex'}}>
								<div style={{paddingRight:'25px'}}>
								<p style={ { marginBottom: '0px' } }>Data AOS</p>
								<input
									type="text"
									style={{width:'300px'}}
									value={ column.data_aos }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'data_aos',
											content.target.value
										)
									}
								/>
								
								</div>
								<div>
								<p style={ { marginBottom: '0px' } }>Data AOS Delay</p>
								<input
									type="text"
									style={{width:'300px'}}
									value={ column.data_aos_delay }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'data_aos_delay',
											content.target.value
										)
									}
								/>
								
								</div>
								</div>
								<div
									style={ {
										display: 'flex',
										paddingTop: '25px',
									} }
								>
									<div>
										
<MediaUploadCheck>
	<MediaUpload
		onSelect={(media) =>
			updateColumn(index, 'img', { img: media.url, alt: media.alt })
		}
		type="image"
		allowedTypes={['image']}
		value={column.img}
		render={({ open }) => (
			<div>
				{column.img && (
				<p className={``} style={{fontSize:'80%',lineHeight:'1.2'}}>{__('Alt Text:')} {column.alt}</p>
			)}
				{column.img && (
					<Button
						isLink
						isDestructive
						onClick={() => updateColumn(index, 'img', '')}
					>
						{__('Remove Col Image')}
					</Button>
				)}
				<Button
					onClick={open}
					icon="upload"
					className="editor-media-placeholder__button is-button is-default is-large"
				>
					{__('Select Col Image')}
				</Button>
			</div>
		)}
	/>
</MediaUploadCheck>
{ column.img && (
	<img
		src={ column.img }
		style={ {
			width: '400px',
			height: '225px',
			objectFit: 'cover',
		} }
	/>
)}

										<div style={{display:'flex'}}>
								<div style={{paddingRight:'25px'}}>
								<p style={ { marginBottom: '0px' } }>Image Class</p>
								<input
									type="text"
									style={{width:'175px'}}
									value={ column.img_class }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'img_class',
											content.target.value
										)
									}
								/>
								
								</div>
								<div>
								<p style={ { marginBottom: '0px' } }>Image Style</p>
								<input
									type="text"
									style={{width:'175px'}}
									value={ column.img_style }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'img_style',
											content.target.value
										)
									}
								/>
								
								</div>
								</div>

									</div>
									<div style={ { paddingLeft: '50px' } }>
									<textarea
										style={{height:'200px',width:'300px'}}
											value={ column.code_block }
											onChange={ ( content ) =>
												updateColumn(
													index,
													'code_block',
													content.target.value
												)
											}
											placeholder={ __(
												'Code goes here'
											) }
										/>
										<p style={{marginBottom:'0px'}}>Title</p>
										<RichText
											value={ column.title }
											onChange={ ( content ) =>
												updateColumn(
													index,
													'title',
													content
												)
											}
											placeholder={ __( 'Column Title' ) }
										/>
										<p style={{marginBottom:'0px'}}>Content</p>
										<RichText
											value={ column.content }
											onChange={ ( content ) =>
												updateColumn(
													index,
													'content',
													content
												)
											}
											placeholder={ __( 'Column Content' ) }
										/>
										
										{ /* <RichText
									
								/> */ }
										{ /* <p>{ column.content }</p> */ }
									</div>
								</div>
<Button
    style={{
		border:'1px solid',
		background:'white'
	}}
	className={`button-hero`}
    onClick={() => {
        const newColumns = [...columns]; // Create a copy of the columns array
        const newColumn = { // Define a new column object
            col_class: 'col-lg-3 col-md-4 col-6',
            col_style: '',
            col_id: '',
			data_aos: 'fade-up',
			data_aos_delay: '',
			img: '',
			alt:'',
			img_style:'',
			img_class:'',
			title: '',
			content: '',
			code_block: ''
        };
        newColumns.splice(index, 0, newColumn); // Insert the new column at the current index
        setAttributes({ columns: newColumns }); // Update the columns attribute with the new array
    }}
>
    {__('Add Column Above')}
</Button>
<Button
    style={{
		border:'1px solid',
		background:'white'
	}}
	className={`button-hero`}
    onClick={() => {
        const newColumns = [...columns]; // Create a copy of the columns array
        const newColumn = { // Define a new column object
            col_class: 'col-md-5 team text-center',
			col_style: 'margin-bottom:50px;',
			col_id: '',
			inner_col_style: '',
			inner_col_class: '',
			data_aos: 'fade-up',
			data_aos_delay:'',
			img: '',
			img_class: 'w-75',
			img_style: 'z-index:1;position:relative;height:400px;object-fit:cover;border-radius:25px;',
			title: '',
			content: '',
			code_block: ''
        };
        newColumns.splice(index + 1, 0, newColumn); // Insert the new column at the current index
        setAttributes({ columns: newColumns }); // Update the columns attribute with the new array
    }}
>
    {__('Add Column Below')}
</Button>
{/* Duplicate Button */}
<Button
style={{
	border:'1px solid',
	background:'white'
}}
className={`button-hero`}
onClick={() => {
const newColumns = [...columns];
const duplicateFeature = { ...column }; // Copy the tab object
newColumns.splice(index + 1, 0, duplicateFeature); // Insert the copy after the current tab
setAttributes({ columns: newColumns });
}}
>
{__('Duplicate Column')}
</Button>
<Button
style={{
	border:'1px solid',
	background:'peachpuff'
}}
className={`button-hero`}
isDestructive
onClick={() => {
const newColumns = [...columns];
newColumns.splice(index, 1);
setAttributes({ columns: newColumns });
}}
>
{__('Remove Column')}
</Button>
{/* Move Up Button */}
<Button
style={{
	border:'1px solid',
	background:'white'
}}
className={`button-hero`}
onClick={() => {
	if (index === 0) return; // Prevent moving the first item up
	const newColumns = [...columns];
	const temp = newColumns[index - 1];
	newColumns[index - 1] = newColumns[index];
	newColumns[index] = temp;
	setAttributes({ columns: newColumns });
}}
disabled={index === 0} // Disable if it's the first item
>
{__('Move Up')}
</Button>

{/* Move Down Button */}
<Button
style={{
	border:'1px solid',
	background:'white'
}}
className={`button-hero`}
onClick={() => {
	if (index === columns.length - 1) return; // Prevent moving the last item down
	const newColumns = [...columns];
	const temp = newColumns[index + 1];
	newColumns[index + 1] = newColumns[index];
	newColumns[index] = temp;
	setAttributes({ columns: newColumns });
}}
disabled={index === columns.length - 1} // Disable if it's the last item
>
{__('Move Down')}
</Button>
							</div>
						);
					} ) }
				</div>
			</section>
		</>
	);
}