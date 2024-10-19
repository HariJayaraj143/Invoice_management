import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYouPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productName = params.get('product');

  return (
    <div className="thank-you-page">
      <h1>Thank you for your interest in {productName}!</h1>
      <p>We appreciate your visit!</p>
    </div>
  );
};

export default ThankYouPage;
