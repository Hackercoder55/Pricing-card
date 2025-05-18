import { useState } from 'react';

export const usePricingState = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly(prev => !prev);
  };

  return {
    isYearly,
    toggleBilling
  };
};