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
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

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
		section_image_alt,
		section_image_class,
		section_image_style,
		section_block,
		container_style,
		container_class,
		container_id,
		row_style,
		row_class,
		row_id,
		cards,
	} = attributes;

	const utilityFunction = () => ({
		card_class: 'service-card',
		card_style: '',
		card_id: '',
		card_link: '#',
		card_link_text: 'Learn More',
		card_link_class: 'learn-more-link',
		card_link_style: '',
		overlay_class: 'card-overlay',
		overlay_style: '',
		img: '',
		img_alt: '',
		img_class: 'card-image',
		img_style: '',
		content_wrapper_class: 'card-content',
		content_wrapper_style: '',
		title: 'Service Title',
		title_class: 'card-title',
		title_style: '',
		description: 'Service description text',
		description_class: 'card-description',
		description_style: '',
		data_aos: '',
		data_aos_delay: '',
		data_aos_duration: '',
	});

	const addCard = () => {
		setAttributes( {
			cards: [
				...cards,
				utilityFunction(),
			],
		} );
	};

	const updateCard = (cardIndex, field, value) => {
		setAttributes({
			cards: cards.map((card, index) => {
				if (index === cardIndex) {
					if (typeof value === 'object' && value !== null) {
						return {
							...card,
							...value,
						};
					}
					return {
						...card,
						[field]: value,
					};
				}
				return card;
			}),
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Section Settings' ) } initialOpen={ false }>
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
							onSelect={(media) => setAttributes({ section_image: media.url, section_image_alt: media.alt })}
							type="image"
							allowedTypes={['image']}
							value={section_image}
							render={({ open }) => (
								<div>
									{section_image && (
										<>
											<Button
												isLink
												isDestructive
												onClick={() => setAttributes({ section_image: '', section_image_alt: '' })}
											>
												{__('Remove Section Image')}
											</Button>
											<img src={section_image} alt={section_image_alt || 'Image'} style={{maxWidth: '100%'}} />
											{section_image_alt && (
												<p>{__('Alt Text:')} {section_image_alt}</p>
											)}
										</>
									)}
									<Button
										onClick={open}
										icon="upload"
										className="editor-media-placeholder__button is-button is-default is-large"
									>
										{__('Select Section Image')}
									</Button>
								</div>
							)}
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
				<PanelBody title={ __( 'Container Settings' ) } initialOpen={ false }>
					<InputControl
						label="Container Style"
						value={ container_style }
						onChange={ ( nextValue ) =>
							setAttributes( { container_style: nextValue } )
						}
					/>
					<InputControl
						label="Container Class"
						value={ container_class }
						onChange={ ( nextValue ) =>
							setAttributes( { container_class: nextValue } )
						}
					/>
					<InputControl
						label="Container ID"
						value={ container_id }
						onChange={ ( nextValue ) =>
							setAttributes( { container_id: nextValue } )
						}
					/>
				</PanelBody>
				<PanelBody title={ __( 'Row Settings' ) } initialOpen={ false }>
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
				
				<PanelBody
					title={ __( 'Card Management' ) }
					initialOpen={ false }
				>
					<button onClick={ () => addCard() } className="button button-primary">
						Add New Card
					</button>
				</PanelBody>
			</InspectorControls>
			<section { ...useBlockProps() }>
				{section_image && <img src={ section_image } alt="" style={{maxWidth: '200px', marginBottom: '20px'}} />}
				<div className="cards-wrapper" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
					{ cards.map( ( card, index ) => {
						return (
							<div
								key={index}
								className="card-editor"
								style={ {
									width: 'calc(50% - 10px)',
									padding: '20px',
									border: '2px solid #ddd',
									borderRadius: '8px',
									marginBottom: '20px',
									background: '#f9f9f9'
								} }
							>
								<h4 style={{marginTop: 0, marginBottom: '15px', borderBottom: '2px solid #333', paddingBottom: '10px'}}>
									Card #{index + 1}
								</h4>

								{/* Card Container Settings */}
								<div style={{marginBottom: '20px', padding: '15px', background: '#fff', borderRadius: '4px'}}>
									<h5 style={{marginTop: 0, marginBottom: '10px'}}>Card Container</h5>
									<div style={{display:'flex', gap: '10px', marginBottom: '10px'}}>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Class</p>
											<input
												type="text"
												value={ card.card_class }
												onChange={ ( e ) => updateCard(index, 'card_class', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>ID</p>
											<input
												type="text"
												value={ card.card_id }
												onChange={ ( e ) => updateCard(index, 'card_id', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
									</div>
									<div>
										<p style={ { marginBottom: '5px', fontSize: '12px' } }>Style</p>
										<input
											type="text"
											value={ card.card_style }
											onChange={ ( e ) => updateCard(index, 'card_style', e.target.value)}
											style={{width: '100%'}}
										/>
									</div>
								</div>

								{/* Image Settings */}
								<div style={{marginBottom: '20px', padding: '15px', background: '#fff', borderRadius: '4px'}}>
									<h5 style={{marginTop: 0, marginBottom: '10px'}}>Card Image</h5>
									{card.img && (
										<img 
											src={card.img}
											alt={card.img_alt || ''}
											style={{width:'100%', maxWidth: '200px', height:'auto', marginBottom: '10px'}}
										/>
									)}
									<MediaUploadCheck>
										<MediaUpload
											onSelect={(media) =>
												updateCard(index, null, { img: media.url, img_alt: media.alt })
											}
											type="image"
											allowedTypes={['image']}
											value={card.img}
											render={({ open }) => (
												<div style={{marginBottom: '10px'}}>
													{card.img && (
														<>
															<p style={{fontSize:'12px', margin: '5px 0'}}>{__('Alt Text:')} {card.img_alt}</p>
															<Button
																isLink
																isDestructive
																onClick={() => updateCard(index, null, {img: '', img_alt: ''})}
															>
																{__('Remove Image')}
															</Button>
														</>
													)}
													<Button
														onClick={open}
														icon="upload"
														className="button"
													>
														{__('Select Image')}
													</Button>
												</div>
											)}
										/>
									</MediaUploadCheck>

									<div style={{display:'flex', gap: '10px'}}>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Image Class</p>
											<input
												type="text"
												value={ card.img_class }
												onChange={ ( e ) => updateCard(index, 'img_class', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Image Style</p>
											<input
												type="text"
												value={ card.img_style }
												onChange={ ( e ) => updateCard(index, 'img_style', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
									</div>
								</div>

								{/* Overlay Settings */}
								<div style={{marginBottom: '20px', padding: '15px', background: '#fff', borderRadius: '4px'}}>
									<h5 style={{marginTop: 0, marginBottom: '10px'}}>Overlay/Content Wrapper</h5>
									<div style={{display:'flex', gap: '10px', marginBottom: '10px'}}>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Overlay Class</p>
											<input
												type="text"
												value={ card.overlay_class }
												onChange={ ( e ) => updateCard(index, 'overlay_class', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Overlay Style</p>
											<input
												type="text"
												value={ card.overlay_style }
												onChange={ ( e ) => updateCard(index, 'overlay_style', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
									</div>
									<div style={{display:'flex', gap: '10px'}}>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Content Wrapper Class</p>
											<input
												type="text"
												value={ card.content_wrapper_class }
												onChange={ ( e ) => updateCard(index, 'content_wrapper_class', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Content Wrapper Style</p>
											<input
												type="text"
												value={ card.content_wrapper_style }
												onChange={ ( e ) => updateCard(index, 'content_wrapper_style', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
									</div>
								</div>

								{/* Title Settings */}
								<div style={{marginBottom: '20px', padding: '15px', background: '#fff', borderRadius: '4px'}}>
									<h5 style={{marginTop: 0, marginBottom: '10px'}}>Title</h5>
									<RichText
										tagName="h3"
										value={ card.title }
										onChange={ ( content ) => updateCard( index, 'title', content )}
										placeholder={ __( 'Card Title' ) }
										style={{marginBottom: '10px'}}
									/>
									<div style={{display:'flex', gap: '10px'}}>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Title Class</p>
											<input
												type="text"
												value={ card.title_class }
												onChange={ ( e ) => updateCard(index, 'title_class', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Title Style</p>
											<input
												type="text"
												value={ card.title_style }
												onChange={ ( e ) => updateCard(index, 'title_style', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
									</div>
								</div>

								{/* Description Settings */}
								<div style={{marginBottom: '20px', padding: '15px', background: '#fff', borderRadius: '4px'}}>
									<h5 style={{marginTop: 0, marginBottom: '10px'}}>Description</h5>
									<RichText
										tagName="p"
										value={ card.description }
										onChange={ ( content ) => updateCard( index, 'description', content )}
										placeholder={ __( 'Card Description' ) }
										style={{marginBottom: '10px'}}
									/>
									<div style={{display:'flex', gap: '10px'}}>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Description Class</p>
											<input
												type="text"
												value={ card.description_class }
												onChange={ ( e ) => updateCard(index, 'description_class', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Description Style</p>
											<input
												type="text"
												value={ card.description_style }
												onChange={ ( e ) => updateCard(index, 'description_style', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
									</div>
								</div>

								{/* Link Settings */}
								<div style={{marginBottom: '20px', padding: '15px', background: '#fff', borderRadius: '4px'}}>
									<h5 style={{marginTop: 0, marginBottom: '10px'}}>Link Settings</h5>
									<div style={{marginBottom: '10px'}}>
										<p style={ { marginBottom: '5px', fontSize: '12px' } }>Link URL</p>
										<input
											type="text"
											value={ card.card_link }
											onChange={ ( e ) => updateCard(index, 'card_link', e.target.value)}
											style={{width: '100%'}}
											placeholder="https://example.com"
										/>
									</div>
									<div style={{marginBottom: '10px'}}>
										<p style={ { marginBottom: '5px', fontSize: '12px' } }>Link Text</p>
										<input
											type="text"
											value={ card.card_link_text }
											onChange={ ( e ) => updateCard(index, 'card_link_text', e.target.value)}
											style={{width: '100%'}}
										/>
									</div>
									<div style={{display:'flex', gap: '10px'}}>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Link Class</p>
											<input
												type="text"
												value={ card.card_link_class }
												onChange={ ( e ) => updateCard(index, 'card_link_class', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Link Style</p>
											<input
												type="text"
												value={ card.card_link_style }
												onChange={ ( e ) => updateCard(index, 'card_link_style', e.target.value)}
												style={{width: '100%'}}
											/>
										</div>
									</div>
								</div>

								{/* AOS Animation Settings */}
								<div style={{marginBottom: '20px', padding: '15px', background: '#fff', borderRadius: '4px'}}>
									<h5 style={{marginTop: 0, marginBottom: '10px'}}>Animation (AOS)</h5>
									<div style={{display:'flex', gap: '10px'}}>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>Data AOS</p>
											<input
												type="text"
												value={ card.data_aos }
												onChange={ ( e ) => updateCard(index, 'data_aos', e.target.value)}
												style={{width: '100%'}}
												placeholder="fade-up"
											/>
										</div>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>AOS Delay</p>
											<input
												type="text"
												value={ card.data_aos_delay }
												onChange={ ( e ) => updateCard(index, 'data_aos_delay', e.target.value)}
												style={{width: '100%'}}
												placeholder="100"
											/>
										</div>
										<div style={{flex: 1}}>
											<p style={ { marginBottom: '5px', fontSize: '12px' } }>AOS Duration</p>
											<input
												type="text"
												value={ card.data_aos_duration }
												onChange={ ( e ) => updateCard(index, 'data_aos_duration', e.target.value)}
												style={{width: '100%'}}
												placeholder="800"
											/>
										</div>
									</div>
								</div>

								{/* Action Buttons */}
								<div style={{display: 'flex', flexWrap: 'wrap', gap: '5px', paddingTop: '15px', borderTop: '1px solid #ddd'}}>
									<Button
										className="button"
										onClick={() => {
											const newCards = [...cards];
											const newCard = utilityFunction();
											newCards.splice(index, 0, newCard);
											setAttributes({ cards: newCards });
										}}
									>
										{__('Add Above')}
									</Button>
									<Button
										className="button"
										onClick={() => {
											const newCards = [...cards];
											const newCard = utilityFunction();
											newCards.splice(index + 1, 0, newCard);
											setAttributes({ cards: newCards });
										}}
									>
										{__('Add Below')}
									</Button>
									<Button
										className="button"
										onClick={() => {
											const newCards = [...cards];
											const duplicateCard = { ...card };
											newCards.splice(index + 1, 0, duplicateCard);
											setAttributes({ cards: newCards });
										}}
									>
										{__('Duplicate')}
									</Button>
									<Button
										className="button"
										onClick={() => {
											if (index === 0) return;
											const newCards = [...cards];
											const temp = newCards[index - 1];
											newCards[index - 1] = newCards[index];
											newCards[index] = temp;
											setAttributes({ cards: newCards });
										}}
										disabled={index === 0}
									>
										{__('Move Up')}
									</Button>
									<Button
										className="button"
										onClick={() => {
											if (index === cards.length - 1) return;
											const newCards = [...cards];
											const temp = newCards[index + 1];
											newCards[index + 1] = newCards[index];
											newCards[index] = temp;
											setAttributes({ cards: newCards });
										}}
										disabled={index === cards.length - 1}
									>
										{__('Move Down')}
									</Button>
									<Button
										className="button"
										isDestructive
										onClick={() => {
											const newCards = [...cards];
											newCards.splice(index, 1);
											setAttributes({ cards: newCards });
										}}
										style={{marginLeft: 'auto'}}
									>
										{__('Remove Card')}
									</Button>
								</div>
							</div>
						);
					} ) }
				</div>
			</section>
		</>
	);
}