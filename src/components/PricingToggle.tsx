import React from 'react';

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: () => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ isYearly, onToggle }) => {
  return (
    <div className="flex items-center bg-slate-800/50 p-1 rounded-full backdrop-blur-sm border border-slate-700">
      <div className="relative inline-flex">
        <div
          className="absolute transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-400 to-indigo-400 h-full rounded-full"
          style={{
            width: '50%',
            transform: `translateX(${isYearly ? '100%' : '0'})`,
          }}
        />
        <button
          className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            !isYearly ? 'text-black' : 'text-slate-300'
          }`}
          onClick={() => onToggle()}
        >
          Monthly
        </button>
        <button
          className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            isYearly ? 'text-black' : 'text-slate-300'
          }`}
          onClick={() => onToggle()}
        >
          Yearly
          <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-indigo-500 text-white">
            Save 20%
          </span>
        </button>
      </div>
    </div>
  );
};

export default PricingToggle;