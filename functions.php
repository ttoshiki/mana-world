<?php

add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}

// ロゴにsvgを設定可能にする
function custom_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'custom_mime_types');

register_nav_menus(
    array(
        'primary' => esc_html__('Main Menu', 'mana_world'),
        'footer' => esc_html__('Footer Menu', 'mana_world'),
    )
);

/**
 * Add support for core custom logo.
 *
 * @link https://codex.wordpress.org/Theme_Logo
 */
add_theme_support(
    'custom-logo',
    array(
        'flex-width'  => true,
        'flex-height' => true,
    )
);

function mana_world_scripts()
{
    wp_register_style('open_sans', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap', array(), '1.0', 'all');
    wp_enqueue_style('open_sans');

    wp_enqueue_script('jquery');

    wp_enqueue_script('main-script', get_stylesheet_directory_uri() . '/assets/js/main.js', array(), '', true);

    if (is_front_page()) {
        wp_enqueue_script('animation-script', get_stylesheet_directory_uri() . '/assets/js/animation.js', array(), '', true);
    }
}
add_action('wp_enqueue_scripts', 'mana_world_scripts');
