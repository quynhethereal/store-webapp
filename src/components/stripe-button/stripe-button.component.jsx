import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    'pk_test_51J11dfBiLt6yQmuAFW11a9gcBgYfTECgRoeVlZhP4iDHwpELymFf5GboppSiK1ES46oeFvY7ilrEzZE7RjHkvYdn00KrBq8TrZ';
  const priceForStripe = price * 100;

  const onToken = token => {
      console.log(token)
      alert("Payment successful!")
  }

  return (
    <StripeCheckout
      label="Pay now"
      name="Emerald Clothing Store"
      billingAddress
      shippingAddress
      description={`Your totatal is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken} 
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton
