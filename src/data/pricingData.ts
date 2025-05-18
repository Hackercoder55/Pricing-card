export const pricingPlans = [
  {
    id: 'basic',
    title: 'Basic',
    subtitle: 'For individuals and small projects',
    monthlyPrice: 19,
    yearlyPrice: 180,
    features: [
      'Up to 5 projects',
      '5 GB of storage',
      'Basic analytics',
      'Email support',
      '24/7 system monitoring'
    ],
    isPopular: false,
    cardStyle: {
      gradientFrom: '#3B82F6',
      gradientTo: '#2563EB',
      borderColor: '#3B82F6',
      buttonClasses: 'bg-blue-600 hover:bg-blue-500 border border-blue-500'
    },
    ctaText: 'Start Free Trial'
  },
  {
    id: 'pro',
    title: 'Pro',
    subtitle: 'For growing teams and businesses',
    monthlyPrice: 49,
    yearlyPrice: 470,
    features: [
      'Unlimited projects',
      '50 GB of storage',
      'Advanced analytics',
      'Priority email & chat support',
      'API access',
      'Team collaboration tools'
    ],
    isPopular: true,
    cardStyle: {
      gradientFrom: '#8B5CF6',
      gradientTo: '#6D28D9',
      borderColor: '#8B5CF6',
      buttonClasses: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500'
    },
    ctaText: 'Start Free Trial'
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    subtitle: 'For large organizations',
    monthlyPrice: 99,
    yearlyPrice: 950,
    features: [
      'Unlimited everything',
      '500 GB of storage',
      'Custom analytics',
      'Dedicated support manager',
      'Custom integrations',
      'Advanced security features'
    ],
    isPopular: false,
    cardStyle: {
      gradientFrom: '#EC4899',
      gradientTo: '#BE185D',
      borderColor: '#EC4899',
      buttonClasses: 'bg-pink-600 hover:bg-pink-500 border border-pink-500'
    },
    ctaText: 'Contact Sales'
  }
];