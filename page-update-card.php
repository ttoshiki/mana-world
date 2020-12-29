<?php get_header(); ?>

	<!-- パラメータがあるか確認する -->
	<?php if($_SERVER['QUERY_STRING']) { $hasError = true; } ?>

	<div id="contents">
		<div id="overlay"></div>
		<!--メインコンテンツ-->
		<main id="main-contents" class="main-contents <?php echo is_article_design(); ?> <?php is_animation_style(); ?>" itemprop="mainContentOfPage">
			<section class="cps-post-box hentry">
				<header class="cps-post-header">
					<h1 class="cps-post-title entry-title update-card-title" itemprop="headline"><?php esc_html(the_title()); ?></h1>
				</header>
				<?php if($hasError) { echo '<p class="update-card-error-message">エラーが発生しました。再度Stripe ID もしくはクレジットカード情報が正しいかご確認ください。</p>'; } ?>
        <form action="/wp-content/themes/jin-child/action.php" method="post" id="payment-form">
					<span class="update-card-label">Stripe ID</span>
					<input id="update-card-stripe-id" placeholder="cus..." name="stripe_id" type="text">
					<span id="page-update-card-error">IDの形式に誤りがあります。</span>
					<div class="form-row">
						<label for="card-element" class="update-card-label">クレジットカード情報</label>
						<div id="card-element"></div>
						<div id="card-errors" role="alert"></div>
					</div>
					<button class="update-card-submit-button" id="update-submit-button">支払い情報を変更する</button>
				</form>
    	</section>

			<?php if (is_bread_display() == "exist") :?>
			<?php if (is_mobile()): ?>
			<?php breadcrumbs(); ?>
			<?php endif; ?>
			<?php endif; ?>

		</main>

		<?php get_sidebar(); ?>
	</div>
	<?php get_footer(); ?>
