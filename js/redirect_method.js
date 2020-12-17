jQuery(document).ready(function($) {


	// jump to stripe form
	function cf7pp_jump(h) {
		var cf7pp_url = location.href;              //Save down the URL without hash.
		location.href = "#"+h;                 		//Go to the target element.
		history.replaceState(null,null,cf7pp_url);  //Don't like hashes. Changing it back.
	}


	var cf7pp_formid;
	var cf7pp_formid_long;
	var cf7pp_pub_key;
	var cf7pp_amount_total;
	var cf7pp_default_symbol;
	var cf7pp_stripe_return;
	var cf7pp_tags_id;
	var cf7pp_input_id;




	// for redirect method 1
	document.addEventListener('wpcf7mailsent', function( event ) {

		if (ajax_object_cf7pp.method == 1) {

			var cf7pp_id_long =			event.detail.id;
			var cf7pp_id = 				event.detail.contactFormId;

			var cf7pp_formid = cf7pp_id_long;
			var cf7pp_formid = cf7pp_id;

			cf7pp_redirect(cf7pp_formid, cf7pp_id_long);
		}

	}, false );








	// for redirect method 2
	if (ajax_object_cf7pp.method == 2) {

		var cf7pp_form_counter = 0;

		jQuery('.wpcf7-form').bind('DOMSubtreeModified', function(e) {

			if (cf7pp_form_counter == 0) {
				if (jQuery('.wpcf7-form').hasClass('sent')) {

					// get form id
					var cf7pp_id = jQuery(this).parent().attr('id').substring(7);

					cf7pp_id = cf7pp_id.split('-')[0];

					var cf7pp_id_long = jQuery(this).parent().attr('id');

					cf7pp_redirect(cf7pp_id, cf7pp_id_long);
					cf7pp_form_counter = 1;
				}
			}

		  });
	}



	// used for redirect method 1 and 2
	function cf7pp_redirect(cf7pp_id, cf7pp_id_long) {

		var cf7pp_forms = ajax_object_cf7pp.forms;
		var cf7pp_result_paypal = cf7pp_forms.indexOf(cf7pp_id+'|paypal');
		var cf7pp_result_stripe = cf7pp_forms.indexOf(cf7pp_id+'|stripe');


		var cf7pp_gateway;

		var cf7pp_data = {
			'action':	'cf7pp_get_form_post',
		};

		jQuery.ajax({
			type: "GET",
			data: cf7pp_data,
			dataType: "json",
			async: false,
			url: ajax_object_cf7pp.ajax_url,
			xhrFields: {
				withCredentials: true
			},
			success: function (response) {
				cf7pp_gateway = 			response.gateway;
				cf7pp_skip = 				response.skip;
				cf7pp_pub_key = 			response.pub_key;
				cf7pp_amount_total = 		response.amount_total;
				cf7pp_default_symbol = 		response.default_symbol;
				cf7pp_stripe_return = 		response.stripe_return;
				cf7pp_tags_id =				response.tags_id;
				cf7pp_input_id =			response.input_id;
			}
		});


		var cf7pp_path = ajax_object_cf7pp.path+cf7pp_id+'&t='+cf7pp_tags_id+'&i='+cf7pp_input_id;


		// skip redirect for 0.00 amounts
		if (cf7pp_skip != '1') {


			// gateway chooser
			if (cf7pp_gateway != null) {
				// paypal
				if (cf7pp_result_paypal > -1 && cf7pp_gateway == 'paypal') {
					window.location.href = cf7pp_path;
				}

				// stripe
				if (cf7pp_result_stripe > -1 && cf7pp_gateway == 'stripe') {

					var cf7pp_data = {
						'action':	'cf7pp_get_form_stripe',
					};

					jQuery.ajax({
						type: "GET",
						data: cf7pp_data,
						dataType: "json",
						async: false,
						url: ajax_object_cf7pp.ajax_url,
						xhrFields: {
							withCredentials: true
						},
						success: function (response) {

							jQuery('#'+cf7pp_id_long).html(response.html);


							// jump to form
							if (ajax_object_cf7pp.jump == 2) {
								cf7pp_jump('cf7pp_stripe_form');
							}


						}
					});

				}
			} else {
				// no gateway chooser
				if (cf7pp_result_paypal > -1) {
					window.location.href = cf7pp_path;
				}

				// stripe
				if (cf7pp_result_stripe > -1) {

					var cf7pp_data = {
						'action':	'cf7pp_get_form_stripe',
					};

					jQuery.ajax({
						type: "GET",
						data: cf7pp_data,
						dataType: "json",
						async: false,
						url: ajax_object_cf7pp.ajax_url,
						xhrFields: {
							withCredentials: true
						},
						success: function (response) {

							jQuery('#'+cf7pp_id_long).html(response.html);

							// jump to form
							if (ajax_object_cf7pp.jump == 2) {
								cf7pp_jump('cf7pp_stripe_form');
							}

						}
					});

				}
			}
		}

	};



	// stripe payment form

	// method 1
	jQuery(document).ajaxComplete(function() {
		cf7pp_load_stripe();
	});

	// method 2
	if (jQuery('.cf7pp_stripe').length ) {
		cf7pp_load_stripe();
	};




	function cf7pp_load_stripe () {
		if (jQuery('.cf7pp_stripe').length ) {

			var stripe = Stripe(cf7pp_pub_key);

			var elements = stripe.elements();

			var elementClasses = {
				base:		'cf7pp_details_input',
				focus: 		'focus',
				empty: 		'empty',
				invalid: 	'invalid',
			};

			var cardNumber = elements.create('cardNumber', {
				classes: 	elementClasses,
				placeholder:  "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022",
			});
			cardNumber.mount('#cf7pp_stripe_credit_card_number');

			var cardExpiry = elements.create('cardExpiry', {
				classes: elementClasses,
				placeholder:  "\u2022\u2022 / \u2022\u2022",
			});
			cardExpiry.mount('#cf7pp_stripe_credit_card_expiration');

			var cardCvc = elements.create('cardCvc', {
				classes: elementClasses,
				placeholder:  "\u2022\u2022\u2022",
			});
			cardCvc.mount('#cf7pp_stripe_credit_card_csv');

			// カスタマイズ 郵便番号を表示しない
			// var cardPostalCode = elements.create('postalCode', {
			// 	classes: elementClasses,
			// 	placeholder:  "\u2022\u2022\u2022\u2022\u2022",
			// });
			// cardPostalCode.mount('#cf7pp_stripe_credit_card_zip');




			// Handle real-time validation errors from the card Element.
			cardNumber.addEventListener('change', function(event) {

				var displayError = document.getElementById('card-errors');

				if (event.error) {
					displayError.textContent = event.error.message;
				} else {
					displayError.textContent = '';
				}

			});

			cardExpiry.addEventListener('change', function(event) {

				var displayError = document.getElementById('card-errors');

				if (event.error) {
					displayError.textContent = event.error.message;
				} else {
					displayError.textContent = '';
				}

			});

			cardCvc.addEventListener('change', function(event) {

				var displayError = document.getElementById('card-errors');

				if (event.error) {
					displayError.textContent = event.error.message;
				} else {
					displayError.textContent = '';
				}

			});

			//カスタマイズ 郵便番号をバリデートしない
			// cardPostalCode.addEventListener('change', function(event) {

			// 	var displayError = document.getElementById('card-errors');

			// 	if (event.error) {
			// 		displayError.textContent = event.error.message;
			// 	} else {
			// 		displayError.textContent = '';
			// 	}

			// });







			// Handle form submission

			var cf7pp_form = document.getElementById('cf7pp-payment-form');

			cf7pp_form.addEventListener('submit', function(event) {


				// id get lost using method 1, so we need to get it again
				var cf7pp_id_long 	= jQuery('.cf7pp_stripe').closest('.wpcf7').attr("id");
				var cf7pp_formid 	= cf7pp_id_long.split('f').pop().split('-').shift();


				// disable submit button
				jQuery('#stripe-submit').attr("disabled", "disabled");
				jQuery('#stripe-submit').val(ajax_object_cf7pp.processing);

				event.preventDefault();

				stripe.createToken(cardNumber).then(function(result) {
					if (result.error) {


						// Inform the user if there was an error
						var errorElement = document.getElementById('card-errors');
						errorElement.textContent = result.error.message;

						// undisable submit button
						jQuery('#stripe-submit').removeAttr("disabled");
						var cf7pp_button_text = ajax_object_cf7pp.pay+" "+default_symbol+amount_total;
						jQuery('#stripe-submit').val(cf7pp_button_text);
					} else {
						// Send the token to your server

						var data = {
							'action':				'cf7pp_stripe_charge',
							'token':				result.token,
							'nonce':				jQuery('#cf7pp_stripe_nonce').val(),
							'id':					cf7pp_formid,
						};

						jQuery.ajax({
							type: "POST",
							data: data,
							dataType: "json",
							url: ajax_object_cf7pp.ajax_url,
							xhrFields: {
								withCredentials: true
							},
							success: function (result) {

								if (result.response == 'completed') {

									if (cf7pp_stripe_return) {
										window.location.href = cf7pp_stripe_return;
									} else {
										jQuery('#'+cf7pp_id_long).html(result.html_success);
									}

								} else {
									// undisable submit button
									jQuery('#card-errors').html(ajax_object_cf7pp.failed);
									jQuery('#stripe-submit').removeAttr("disabled");
									var cf7pp_button_text = ajax_object_cf7pp.pay+" "+cf7pp_default_symbol+cf7pp_amount_total;
									jQuery('#stripe-submit').val(cf7pp_button_text);
								}


							}
						});
					}
				});

			});

		};
	};







});
