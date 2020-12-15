<?php get_header(); ?>

<?php get_template_part('module_pageTit'); ?>
<?php get_template_part('module_panList'); ?>
<div class="section siteContent">
<div class="container">
<div class="row">
<div id="main" class="col-md-8 mainSection" role="main">
<div class="myp">

<h2><?php echo $_SESSION['gopage']; ?></h2><!-- ここにセッションに保存したURLを表示させる -->

<!-- このループで固定ページの内容を出力 -->
<?php if(have_posts()): while(have_posts()): the_post(); ?>
<?php the_content(); ?>
<?php endwhile; endif; ?>

</div>
</div>
<div class="col-md-3 col-md-offset-1 subSection sideSection">
<?php get_sidebar(get_post_type()); ?>

</div><!-- [ /.subSection ] -->

</div><!-- [ /.row ] -->
</div><!-- [ /.container ] -->
</div><!-- [ /.siteContent ] -->
<?php get_footer(); ?>