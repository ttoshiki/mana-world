<?php get_header(); ?>

<div class="animation__wrapper">
  <div class="animation__inner"></div>
</div>
<main class="site-main">
  <div class="home__wrapper">
    <section class="home__header">
      <ul class="home__headerList">
        <li class="home__headerItem">
          <a href="<?php echo home_url('/about/'); ?>">ABOUT<br>MANAWORLD</a>
        </li>
        <li class="home__headerItem">
          <a href="<?php echo home_url('/profile/'); ?>">PROFILE</a>
        </li>
        <li class="home__headerItem">
          <a href="<?php the_permalink(); ?>">
            <h2 class="home__headerHeading">MANA’S “TSUBUYAKI”</h2>
            <?php if (have_posts()): ?>
              <?php while (have_posts()) : the_post(); ?>
                <div id="post-<?php the_ID(); ?>" <?php post_class('home__headerMutter'); ?>>
                  <?php
                    if (has_post_thumbnail()) {
                        the_post_thumbnail();
                    }
                  ?>
                  <div class="home__headerMutterMeta">
                    <h3 class="home__headerMutterHeading"><?php echo get_the_title(); ?></h3>
                    <p class="home__headerMutterExcerpt"><?php get_the_excerpt(); ?></p>
                    <span class="home__headerMutterMore">…もっとみる</span>
                  </div>
                </div>
              <?php endwhile; ?>
              <?php else: ?>
                <p>準備中です</p>
            <?php endif; ?>
          </a>
        </li>
      </ul>
    </section>
    <section class="home__information">
      <article class="home-newsArticle">
        <ul class="home-informationList">
          <?php
            $args = array(
                'post_type' => 'post',
                'posts_per_page' => 3,
                'tax_query' => array(
                    array(
                        'taxonomy' => 'category',
                        'field' => 'slug',
                        'terms' => 'information',
                        'operator' => 'IN'
                    ),
                )
            );
            $the_query = new WP_Query($args); if ($the_query->have_posts()):
          ?>
          <?php while ($the_query->have_posts()): $the_query->the_post(); ?>
            <li id="post-<?php the_ID(); ?>" class="home__informationItem">
              <time datetime="<?php echo get_the_date('Y.m.d'); ?>" class="home__informationDate custom-font"><?php echo get_the_date('Y.m.d'); ?></time>
              <a href="<?php the_permalink(); ?>" class="home-newsLink"><span class="home__informationTitle"><?php echo get_the_title(); ?></span></a>
            </li>
          <?php endwhile; ?>
          <?php wp_reset_postdata(); ?>
          <?php else: ?>
            <p>準備中です</p>
          <?php endif; ?>
        </ul>
      </article>
    </section>
    <section class="home__newpost">
      <ul class="home-informationList">
        <?php
          $args = array(
            'post_type' => 'post',
            'posts_per_page' => 3,
            'tax_query' => array(
              array(
                'taxonomy' => 'category',
                'field' => 'slug',
                'terms' => 'information',
                'operator' => 'NOT IN'
              ),
            )
          );
          $the_query = new WP_Query($args); if ($the_query->have_posts()):
        ?>
        <?php while ($the_query->have_posts()): $the_query->the_post(); ?>
          <li id="post-<?php the_ID(); ?>" class="home__informationItem">
            <time datetime="<?php echo get_the_date('Y.m.d'); ?>" class="home__informationDate custom-font"><?php echo get_the_date('Y.m.d'); ?></time>
            <a href="<?php the_permalink(); ?>" class="home-newsLink"><span class="home__informationTitle"><?php echo get_the_title(); ?></span></a>
          </li>
        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
        <?php else: ?>
          <p>準備中です</p>
        <?php endif; ?>
      </ul>
    </section>
    <section class="home__memberMenu">
      <ul class="memberMenuList">
        <li class="memberMenuItem">
          <a href="<?php echo home_url(); ?>">
            COLUMN
          </a>
        </li>
        <li class="memberMenuItem">
          <a href="<?php echo home_url(); ?>">
            DIARY
          </a>
        </li>
        <li class="memberMenuItem">
          <a href="<?php echo home_url(); ?>">
            LIVE<br>STREAM
          </a>
        </li>
        <li class="memberMenuItem">
          <a href="<?php echo home_url(); ?>">
            Q&A
          </a>
        </li>
      </ul>
    </section>
    <section class="home__follow">
      <h2 class="home__followHeading">FOLLOW ME</h2>
      <ul class="home__followList">
        <li class="home__followItem">
          <div class="home__followIcon"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_fb.svg'); ?></div>
        </li>
        <li class="home__followItem">
          <div class="home__followIcon"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_instagram.svg'); ?></div>
        </li>
        <li class="home__followItem">
          <div class="home__followIcon"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_twitter.svg'); ?></div>
        </li>
        <li class="home__followItem">
          <div class="home__followIcon"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_mail.svg'); ?></div>
        </li>
      </ul>
    </section>
  </div>
</main>

<?php get_footer(); ?>