<!DOCTYPE html>
<html lang="ja">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php get_template_part('ogp'); ?>
<?php if (is_home() || is_front_page()): ?>
<?php $mydesc = get_bloginfo('description') ?>
<?php if (! empty($mydesc)): ?>
<title><?php bloginfo('name'); ?>｜<?php bloginfo('description'); ?></title>
<?php else: ?>
<title><?php bloginfo('name'); ?></title>
<?php endif; ?>
<?php elseif (is_page()): ?>
<title><?php wp_title('', 'right'); ?>｜<?php bloginfo('name'); ?></title>
<?php elseif (is_single()): ?>
<title><?php wp_title('', 'right'); ?>｜<?php bloginfo('name'); ?></title>
<?php elseif (is_category()): ?>
<title><?php cps_category_title() ?>｜<?php bloginfo('name'); ?></title>
<?php elseif (is_tag()): ?>
<title>【<?php esc_html(single_cat_title()); ?>】タグの記事一覧｜<?php bloginfo('name'); ?></title>
<?php elseif (is_month()): ?>
<title><?php the_time("Y年m月") ?>の記事一覧｜<?php bloginfo('name'); ?></title>
<?php elseif (is_year()): ?>
<title><?php the_time("Y年") ?>の記事一覧｜<?php bloginfo('name'); ?></title>
<?php elseif (is_search()): ?>
<title>検索結果｜<?php bloginfo('name'); ?></title>
<?php elseif (is_404()): ?>
<title>ページが見つかりませんでした</title>
<?php else: ?>
<title><?php bloginfo('name'); ?></title>
<?php endif; ?>
<?php if (! get_theme_mod('desc_text') == "" && is_home() || is_front_page()): ?>
<meta name="description" itemprop="description" content="<?php echo get_theme_mod('desc_text'); ?>">
<?php endif; ?>
<?php if (is_single()): ?>
<?php if (! get_post_meta($post->ID, 'post_desc', true) == null) :?>
<meta name="description" itemprop="description" content="<?php echo get_post_meta($post->ID, 'post_desc', true) ?>" >
<?php else: ?>
<meta name="description" itemprop="description" content="<?php echo get_the_excerpt(); ?>" >
<?php endif; ?>
<?php elseif (is_page()): ?>
<?php if (! get_post_meta($post->ID, 'post_desc', true) == null) :?>
<meta name="description" itemprop="description" content="<?php echo get_post_meta($post->ID, 'post_desc', true) ?>" >
<?php endif; ?>
<?php elseif (is_category()): ?>
<meta name="description" itemprop="description" content="<?php cps_category_desc(); ?>" >
<?php endif; ?>
<?php if (! has_site_icon()): ?>
<link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/favicon.ico">
<?php endif; ?>
<?php $t_id = get_query_var('cat'); $cat_option = get_option($t_id); $cps_meta_noindex = isset($cat_option['cps_meta_noindex'][0]); ?>
<?php if (is_category() && $cps_meta_noindex == 'noindexにする') :?>
<meta name="robots" content="noindex">
<?php endif; ?>
<?php if (is_singular('cta') || is_page('law') || is_page('privacy')) :?>
<meta name="robots" content="noindex">
<?php endif; ?>
<?php if (! is_404() && ! get_post_meta($post->ID, 'post_noindex', true) == null) :?>
<meta name="robots" content="noindex">
<?php endif; ?>
<?php wp_head(); ?>

<?php if (! get_option('space_head') == null) : ?>
<?php echo get_option('space_head'); ?>
<?php endif; ?>

</head>
<body <?php body_class(); ?> id="<?php echo is_font_style(); ?>">
<div id="wrapper">
  <header id="header" class="header"<?php if (is_front_page()) { echo(' style="opacity:0"'); } ?>>
    <h1 class="site-logo -sp"><a href="<?php echo home_url(); ?>"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/logo.svg'); ?></a></h1>
    <div class="header__space"></div>
    <div class="header__loginButton -sp"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/login_button.svg'); ?></div>
		<nav class="header__hammenu -sp">
			<span class="header__trigger" href="#" @click="toggleMenu" id="trigger">
				<span></span>
				<span></span>
				<span></span>
			</span>
			<div class="header__hammenuWrapper">
				<div class="header__hammenuInner">
					<ul class="header__hammenuList">
            <li class="header__hammenuItem"><a href="<?php echo home_url(); ?>" class="-en">INFORMATION</a></li>
            <li class="header__hammenuItem"><a href="<?php echo home_url(); ?>" class="-en">ABOUT</a></li>
            <li class="header__hammenuItem"><a href="<?php echo home_url(); ?>" class="-en">PROFILE</a></li>
            <li class="header__hammenuItem"><a href="<?php echo home_url(); ?>" class="-en">CONTACT</a></li>
          </ul>
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/menu_heading-sp@2x.png" alt="" class="header__hammenuHeading">
          <ul class="header__hammenuList">
            <li class="header__hammenuItem"><a href="<?php echo home_url(); ?>" class="-en">COLUMN</a></li>
            <li class="header__hammenuItem"><a href="<?php echo home_url(); ?>" class="-en">DIARY</a></li>
            <li class="header__hammenuItem"><a href="<?php echo home_url(); ?>" class="-en">LIVE STREAM</a></li>
            <li class="header__hammenuItem"><a href="<?php echo home_url(); ?>" class="-en">Q&A</a></li>
          </ul>
          <div class="header__hammenuFollow">
            <span class="header__hammenuFollowHeading -en">FOLLOW ME</span>
            <ul class="header__hammenuFollowList">
              <li class="header__followItem">
                <div class="header__followIcon"><a href=""><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_fb.svg'); ?></a></div>
              </li>
              <li class="header__followItem">
                <div class="header__followIcon"><a href=""><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_instagram.svg'); ?></a></div>
              </li>
              <li class="header__followItem">
                <div class="header__followIcon"><a href=""><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_twitter.svg'); ?></a></div>
              </li>
              <li class="header__followItem">
                <div class="header__followIcon"><a href=""><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_mail.svg'); ?></a></div>
              </li>
            </ul>
          </div>
				</div>
			</div>
		</nav>
		<nav class="header__nav -pc">
      <div class="header__navUpper">
			  <h1 class="site-logo"><a href="<?php echo home_url(); ?>"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/logo.svg'); ?></a></h1>
        <div class="header__loginButton"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/login_button.svg'); ?></div>
      </div>
			<?php
          wp_nav_menu(array(
              'theme_location' => 'primary',
              'menu_class'      => 'header__menuList',
          ));
      ?>
		</nav>
	</header>