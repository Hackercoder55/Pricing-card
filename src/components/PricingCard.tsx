import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  cardStyle: {
    gradientFrom: string;
    gradientTo: string;
    borderColor: string;
    buttonClasses: string;
  };
  ctaText: string;
  isYearly: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  monthlyPrice,
  yearlyPrice,
  features,
  isPopular = false,
  cardStyle,
  ctaText,
  isYearly,
}) => {
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(currentPrice);

  return (
    <div
      className={`relative rounded-2xl p-0.5 transition-all duration-300 hover:scale-105 ${
        isPopular ? 'scale-105 md:scale-110 z-10' : ''
      }`}
      style={{
        background: `linear-gradient(to bottom right, ${cardStyle.gradientFrom}, ${cardStyle.gradientTo})`,
        boxShadow: isPopular
          ? `0 0 30px ${cardStyle.borderColor}40`
          : '0 0 0 transparent',
      }}
    >
      {isPopular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-max px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="relative h-full rounded-xl p-6 bg-slate-900/75 backdrop-blur-md flex flex-col">
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-slate-400">{subtitle}</p>
        </div>
        
        <div className="mb-5">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">{formattedPrice}</span>
            <span className="text-slate-400 ml-2">/{isYearly ? 'year' : 'month'}</span>
          </div>
          {isYearly && (
            <p className="text-indigo-400 text-sm mt-1">
              Billed annually ({(monthlyPrice * 0.8).toFixed(0)} × 12)
            </p>
          )}
        </div>
        
        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-indigo-400" />
                </div>
                <span className="ml-3 text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button
          className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 ${cardStyle.buttonClasses}`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;