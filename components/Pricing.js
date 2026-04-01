import { CheckCircle, ArrowUpRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '5,000',
    period: '/MO',
    features: [
      'Gym equipment access',
      '3 group classes per week',
      'my Kore app access',
      'Flexible gym hours',
      'Locker room access',
      'Community event updates',
    ],
    cta: 'Choose Plan',
    featured: false,
  },
  {
    name: 'Pro Athlete',
    price: '15,000',
    period: '/MO',
    popular: 'Most Popular',
    features: [
      '24/7 facility access',
      'Unlimited group classes',
      '4 personal training sessions',
      'Sports court access',
      'Free physiotherapy consult',
      'Performance assessments',
      'Priority event registration',
      'Nutrition guidance',
    ],
    cta: 'Choose Plan',
    featured: true,
  },
  {
    name: 'Team',
    price: '40,000',
    period: '/MO',
    features: [
      'Gym & group class access',
      '5 PT sessions for team',
      'Priority event entry',
      'Dedicated team scheduling',
      'Corporate wellness programs',
      'Custom training plans',
    ],
    cta: 'Choose Plan',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header reveal">
          <span className="section-label">Membership</span>
          <h2 className="section-title">CHOOSE THE MEMBERSHIP THAT<br/>FITS YOUR GOALS</h2>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              className={`pricing-card reveal ${plan.featured ? 'featured' : ''}`}
              key={index}
            >
              {plan.popular && (
                <span className="pricing-popular">{plan.popular}</span>
              )}
              <h3 className="pricing-plan-name">{plan.name}</h3>

              <div className="pricing-price">
                <span className="pricing-currency">LKR </span>
                <span className="pricing-amount">{plan.price}</span>
                <span className="pricing-period">{plan.period}</span>
              </div>
              
              <hr className="pricing-divider" />

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li className="pricing-feature" key={i}>
                    <span className="pricing-feature-icon"><CheckCircle /></span>
                    <span className="pricing-feature-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-card-footer">
                <a
                  href="#register"
                  className={plan.featured ? 'btn-white' : 'btn-primary'}
                >
                  {plan.cta} <span className="btn-arrow"><ArrowUpRight /></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
