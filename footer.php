<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package SHIELD
 */

?>

  <footer class="footer">
    <div class="footer__toTop">
      <a href="#"><?php echo file_get_contents(get_stylesheet_directory_uri() . '/assets/images/icons/toTop.svg'); ?></a>
    </div>
    <nav class="footer__nav">
      <?php
        wp_nav_menu(array(
          'theme_location' => 'footer',
          'container_class' => 'menu-footer-container',
        ));
      ?>
    </nav>
    <div class="footer__companyCopyrightWrapper">
      <p>掲載されているすべてのコンテンツ<br class="-sp">(記事、画像、音声データ、映像データ等)の無断転載を禁じます。</p>
      <small class="footer__companyCopyright">© 2020 株式会社EXSENSE</small>
    </div>
  </footer>
</div><!-- #wrapper -->

<?php wp_footer(); ?>

</body>
</html>
