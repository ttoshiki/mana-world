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
    } elseif (is_page('about')) {
        wp_enqueue_script('about-script', get_stylesheet_directory_uri() . '/assets/js/about.js', array(), '', true);
        wp_enqueue_script('gsap-scripts', get_stylesheet_directory_uri() . '/assets/js/lib/gsap.min.js', array(), '', true);
        wp_enqueue_script('gsap-scroll-scripts', get_stylesheet_directory_uri() . '/assets/js/lib/ScrollTrigger.min.js', array(), '', true);
        wp_enqueue_script('about-animation-scripts', get_stylesheet_directory_uri() . '/assets/js/about-animation.js', array(), '', true);
    } elseif (is_page('payment')) {
        wp_enqueue_script('payment-script', get_stylesheet_directory_uri() . '/assets/js/payment.js', array(), '', true);
    } elseif (is_page('update-card')) {
        wp_enqueue_script('polyfill', 'https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch', array(), '', false);
        wp_enqueue_script('stripe-script', 'https://js.stripe.com/v3/', array(), '', false);
        wp_enqueue_script('update-card-script', get_stylesheet_directory_uri() . '/assets/js/update-card.js', array(), '', true);
    }
}
add_action('wp_enqueue_scripts', 'mana_world_scripts');

add_filter('wpmem_login_redirect', 'my_login_redirect', 10, 2);
function my_login_redirect($redirect_to, $user_id)
{
    if (is_page('login')) {
        return 'https://mana-world.jp';
    } else {
        return $_SERVER['REQUEST_URI'];
    }
}

add_filter('run_wptexturize', '__return_false');
