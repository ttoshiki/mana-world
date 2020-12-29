// Create an instance of the Stripe object with your publishable API key
var stripe = Stripe("pk_test_51HbIJAJnp86bDaQ9lqqw26hNBURLcFUzVOcq0iuvFolILjPmlBMOO27IX424lSK1cpVjDdFYc6slMqDfDpIvSU2N00YsB2jUXd");
var checkoutButton = document.getElementById("checkout-button");
const elements = stripe.elements();
// スタイルのカスタマイズ
var style = {
    base: {
        fontSize: '16px',
        color: "#32325d",
    }
};

// クレジットカード情報入力欄の構築
var card = elements.create('card', {style: style, hidePostalCode: true});
card.mount('#card-element');

// submit時のリスナー
var form = document.getElementById('payment-form');


function stripeIdValidation() {
  let error;
  const stripeIdForm = document.getElementById('update-card-stripe-id')
  const errorMessageText = document.getElementById('page-update-card-error')
  let value = stripeIdForm.value

  if (value == "" || !value.match(/^cus_/) || value.length !== 18) {
    error = true;
  }

  if (error) {
    stripeIdForm.style.borderColor = '#dc3232'
    errorMessageText.style.display = 'block'
    return false
  } else {
    stripeIdForm.style.borderColor = '#ccc'
    errorMessageText.style.display = 'none'
    return true
  }
}

jQuery(function() {
  jQuery("#update-card-stripe-id").on("blur", function() {
    stripeIdValidation()
  })
})

form.addEventListener('submit', function(event) {
    event.preventDefault();

    isValid = stripeIdValidation()
    if(isValid){
      stripe.createToken(card).then(function(result) {
        var errorElement = document.getElementById('card-errors');
        if (result.error) {
          errorElement.textContent = result.error.message;
        } else {
          errorElement.style.display = 'none'
          // クレジットカードトークンを自サーバにsubmitする
          stripeTokenHandler(result.token);
        }
      });
    }
});

function stripeTokenHandler(token) {
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
    form.submit();
}