<?php get_header(); ?>

<div class="animation__wrapper">
  <div class="animation__inner"></div>
</div>
<main class="site-main">
  <div class="home__wrapper">
    <section class="home__header">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/glitter.png" srcset="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/glitter.png 1x, <?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/glitter@2x.png 2x" alt="" class="home__headerGlitter -pc">
      <div class="home__headerList">
        <a href="<?php echo home_url('/about/'); ?>" class="home__headerItem">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/about_manaworld_bg.png" alt="" class="home__headerItemIllust -about">
          <span class="home__headerItemText">ABOUT<br>MANAWORLD</span>
        </a>
        <a href="<?php echo home_url('/profile/'); ?>" class="home__headerItem">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/profile_bg.png" alt="" class="home__headerItemIllust -profile">
          <span class="home__headerItemText">PROFILE</span>
        </a>
        <?php
          $args = array(
            'post_type' => 'post',
            'posts_per_page' => 1,
            'tax_query' => array(
                array(
                    'taxonomy' => 'category',
                    'field' => 'slug',
                    'terms' => 'murmur',
                    'operator' => 'IN'
                ),
            )
          );
          $the_query = new WP_Query($args); if ($the_query->have_posts()):
        ?>
        <?php while ($the_query->have_posts()): $the_query->the_post(); ?>
          <a href="<?php the_permalink(); ?>" class="home__headerItem" id="home__headerMutterWrapper">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/tsubuyaki_bg.png" alt="" class="home__headerItemIllust -mutter">
            <span>
              <div>
                <h2 class="home__headerHeading">MANA’S “TSUBUYAKI”</h2>
              </div>
              <div id="post-<?php the_ID(); ?>" <?php post_class('home__headerMutter'); ?>>
                <?php
                  if (has_post_thumbnail()) {
                      the_post_thumbnail();
                  }
                ?>
                <div class="home__headerMutterMeta">
                  <h3 class="home__headerMutterHeading"><?php echo get_the_title(); ?></h3>
                  <p class="home__headerMutterExcerpt"><?php echo get_the_excerpt(); ?></p>
                  <span class="home__headerMutterMore">…もっとみる</span>
                </div>
              </div>
            </span>
          </a>
        <?php endwhile; ?>
        <?php else: ?>
            <p>準備中です</p>
        <?php endif; ?>
      </div>
    </section>
    <section class="home__information">
      <h2 class="home__sectionHeading">INFORMATION</h2>
      <article class="home__informationArticle">
        <ul class="home__informationList">
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
              <a href="<?php the_permalink(); ?>" class="home__informationLink"><span class="home__informationTitle"><?php echo get_the_title(); ?></span></a>
            </li>
          <?php endwhile; ?>
          <?php wp_reset_postdata(); ?>
          <?php else: ?>
            <p>準備中です</p>
          <?php endif; ?>
        </ul>
      </article>
    </section>
    <div class="home__onstage">
      <a href="/onstage"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/onstage.png" alt="" class="home__onstageImae"></a>
    </div>
    <section class="home__newPost">
      <picture>
        <source media="(max-width: 480px)" srcset="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/newpost_bg-sp.png">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/newpost_bg.png" alt="" class="home__newPostBackground">
      </picture>
      <h2 class="home__sectionHeading">NEW POST</h2>
      <ul class="home__newPostList">
        <?php
          $args = array(
            'post_type' => 'post',
            'posts_per_page' => 3,
            'tax_query' => array(
              array(
                'taxonomy' => 'category',
                'field' => 'slug',
                'terms' => array('information', 'murmur'),
                'operator' => 'NOT IN'
              ),
            )
          );
          $the_query = new WP_Query($args); if ($the_query->have_posts()):
        ?>
        <?php while ($the_query->have_posts()): $the_query->the_post(); ?>
          <li id="post-<?php the_ID(); ?>" class="home__newPostItem">
            <a href="<?php the_permalink(); ?>" class="home__newPostLink">
              <h3 class="home__newPostTitle"><?php echo get_the_title(); ?></h3>
              <?php
                if (has_post_thumbnail()) {
                    the_post_thumbnail();
                }
              ?>
              <div class="home__newPostExcerpt"><?php echo get_the_excerpt(); ?></div>
            </a>
          </li>
        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
        <?php else: ?>
          <p>準備中です</p>
        <?php endif; ?>
      </ul>
    </section>
    <section class="home__memberMenu">
      <h2 class="home__sectionHeading">MEMBER’S<br class="-sp"> MENU</h2>
      <ul class="home__memberMenuList">
        <li class="home__memberMenuItem -column">
          <a href="/archives/category/column" class="home__memberMenuLink -column">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/column_bg.png" alt="" class="home__memberMenuImage -column">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/column_shadow.png" alt="" class="home__memberMenuShadow -column">
            <span class="home__memberMenuText -column">COLUMN</span>
          </a>
        </li>
        <li class="home__memberMenuItem -diary">
          <a href="/archives/category/diary" class="home__memberMenuLink -diary">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/diary_bg.png" alt="" class="home__memberMenuImage -diary">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/diary_shadow.png" alt="" class="home__memberMenuShadow -diary">
            <span class="home__memberMenuText -diary">DIARY</span>
          </a>
        </li>
        <li class="home__memberMenuItem -live">
          <a href="/archives/category/live-stream" class="home__memberMenuLink -live">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/livestream_bg.png" alt="" class="home__memberMenuImage -live">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/livestream_shadow.png" alt="" class="home__memberMenuShadow -live">
            <div class="home__memberMenuStreamText">
              <span class="home__memberMenuStream -top">LIVE</span>
              <span class="home__memberMenuStream -bottom">STREAM</span>
            </div>
          </a>
        </li>
        <li class="home__memberMenuItem -qa">
          <a href="/archives/category/faqs" class="home__memberMenuLink -qa">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/qa_bg.png" alt="" class="home__memberMenuImage -qa">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/home/qa_shadow.png" alt="" class="home__memberMenuShadow -qa">
            <span class="home__memberMenuText -qa">Q&A</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="home__follow">
      <h2 class="home__sectionHeading">FOLLOW ME</h2>
      <ul class="home__followList">
        <li class="home__followItem">
          <div class="home__followIcon"><a href="https://www.facebook.com/manyabbit"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_fb.svg'); ?></a></div>
        </li>
        <li class="home__followItem">
          <div class="home__followIcon"><a href="https://instagram.com/manalog29"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_instagram.svg'); ?></a></div>
        </li>
        <li class="home__followItem">
          <div class="home__followIcon"><a href="https://twitter.com/manalog29"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_twitter.svg'); ?></a></div>
        </li>
        <li class="home__followItem">
          <div class="home__followIcon"><a href="https://48auto.biz/pbfs77/touroku/sp/entryform4.htm"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/icon_mail.svg'); ?></a></div>
        </li>
      </ul>
    </section>
  </div>
</main>

<?php get_footer(); ?>