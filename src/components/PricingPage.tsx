import React from 'react';
import PricingToggle from './PricingToggle';
import PricingCard from './PricingCard';
import { pricingPlans } from '../data/pricingData';
import { usePricingState } from '../hooks/usePricingState';

const PricingPage: React.FC = () => {
  const { isYearly, toggleBilling } = usePricingState();

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. Always flexible, always scalable.
        </p>
      </div>
      
      <div className="flex justify-center mb-12">
        <PricingToggle isYearly={isYearly} onToggle={toggleBilling} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            title={plan.title}
            subtitle={plan.subtitle}
            monthlyPrice={plan.monthlyPrice}
            yearlyPrice={plan.yearlyPrice}
            features={plan.features}
            isPopular={plan.isPopular}
            cardStyle={plan.cardStyle}
            ctaText={plan.ctaText}
            isYearly={isYearly}
          />
        ))}
      </div>
      
      <div className="text-center mt-16 text-slate-400">
        <p>All plans include 24/7 support and a 30-day money-back guarantee.</p>
        <p className="mt-2">Need a custom plan? <a href="#" className="text-blue-400 hover:text-blue-300 underline transition-colors">Contact us</a></p>
      </div>
    </div>
  );
};

export default PricingPage;