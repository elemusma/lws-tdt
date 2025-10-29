<?php
// This file is generated. Do not modify it manually.
return array(
	'content-cards' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/content-cards',
		'version' => '0.1.0',
		'title' => 'Content Cards',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'section_style' => array(
				'type' => 'string',
				'default' => 'padding:50px 0px;'
			),
			'section_class' => array(
				'type' => 'string',
				'default' => ''
			),
			'section_id' => array(
				'type' => 'string',
				'default' => ''
			),
			'section_image' => array(
				'type' => 'string',
				'default' => null
			),
			'section_image_alt' => array(
				'type' => 'string',
				'default' => null
			),
			'section_image_class' => array(
				'type' => 'string',
				'default' => ''
			),
			'section_image_style' => array(
				'type' => 'string',
				'default' => ''
			),
			'section_block' => array(
				'type' => 'string',
				'default' => ''
			),
			'container_style' => array(
				'type' => 'string',
				'default' => ''
			),
			'container_class' => array(
				'type' => 'string',
				'default' => 'container'
			),
			'container_id' => array(
				'type' => 'string',
				'default' => ''
			),
			'row_style' => array(
				'type' => 'string',
				'default' => ''
			),
			'row_class' => array(
				'type' => 'string',
				'default' => 'row justify-content-center'
			),
			'row_id' => array(
				'type' => 'string',
				'default' => ''
			),
			'cards' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'object'
				),
				'default' => array(
					array(
						'card_class' => 'service-card',
						'card_style' => '',
						'card_id' => '',
						'card_link' => '#',
						'card_link_text' => 'Learn More',
						'card_link_class' => 'learn-more-link',
						'card_link_style' => '',
						'overlay_class' => 'card-overlay',
						'overlay_style' => '',
						'img' => '',
						'img_alt' => '',
						'img_class' => 'card-image',
						'img_style' => '',
						'content_wrapper_class' => 'card-content',
						'content_wrapper_style' => '',
						'title' => 'Service Title',
						'title_class' => 'card-title',
						'title_style' => '',
						'description' => 'Service description text',
						'description_class' => 'card-description',
						'description_style' => '',
						'data_aos' => '',
						'data_aos_delay' => '',
						'data_aos_duration' => ''
					)
				)
			)
		),
		'textdomain' => 'content-cards',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
