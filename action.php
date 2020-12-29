<?php

  require_once(dirname(__FILE__) . '/stripe/init.php');

  header('Content-Type: application/json');

  $token  = $_POST['stripeToken'];
  $stripe = new \Stripe\StripeClient(
      'sk_test_51HbIJAJnp86bDaQ9jkO8ZVixPcygtKtJAqgyVzef00dOdHeWMtiN6xYIOINaAwVNYPzfMQFunAIfa6WPaEEmNq4A00PNpsVByd'
  );

  $stripe_id = $_POST['stripe_id'];

  try {
    // カード一覧を取得
    $cards = $stripe->customers->allSources(
        $stripe_id,
        ['object' => 'card']
    );
  } catch (\Stripe\Error\Base $e) {
    // Code to do something with the $e exception object when an error occurs
    echo($e->getMessage());
  } catch (Exception $e) {
    header('Location: http:/manaworld.local/update-card/?error=true');
    // Catch any other non-Stripe exceptions
  }

    if (!empty($cards->data)) {
      // // 登録されているカードを削除
      $stripe->customers->deleteSource(
        $stripe_id,
        $cards->data[0]->id,
        []
      );
    }

  $stripe->customers->createSource(
      $stripe_id,
      ['source' => $token]
  );

  header('Location: https://mana-world.jp/thanks');

  exit;
