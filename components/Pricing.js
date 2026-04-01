import { CheckCircle, ArrowUpRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    desc: 'Beginners & Casual Users',
    price: '5,000',
    period: 'per month',
    features: [
      'Gym equipment access',
      '3 group classes per week',
      'my Kore app access',
      'Flexible gym hours',
      'Locker room access',
      'Community event updates',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro Athlete',
    desc: 'Competitive Athletes',
    price: '15,000',
    period: 'per month',
    popular: 'Most Popular',
    features: [
      '24/7 facility access',
      'Unlimited group classes',
      '4 personal training sessions',
      'Sports court access (tennis/badminton)',
      'Free physiotherapy consult',
      'Performance assessments',
      'Priority event registration',
      'Nutrition guidance',
    ],
    cta: 'Go Pro',
    featured: true,
  },
  {
    name: 'Team',
    desc: 'Clubs / Schools / Companies',
    price: '40,000',
    period: 'per team / month',
    features: [
      'Gym & group class access',
      '5 PT sessions for team',
      'Priority event entry',
      'Dedicated team scheduling',
      'Corporate wellness programs',
      'Custom training plans',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header reveal">
          <span className="section-label">Membership</span>
          <h2 className="section-title">Membership & Pricing</h2>
          <p className="section-subtitle">
            Flexible plans in LKR to fit every fitness goal and budget. All plans
            include my Kore app access and full trainer support.
          </p>
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
              <p className="pricing-plan-desc">{plan.desc}</p>

              <div className="pricing-price">
                <div className="pricing-amount">
                  <span className="pricing-currency">LKR </span>
                  {plan.price}
                </div>
                <div className="pricing-period">{plan.period}</div>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li className="pricing-feature" key={i}>
                    <span className="pricing-feature-icon"><CheckCircle /></span>
                    {feature}
                  </li>
                ))}
              </ul>


              <a
                href="#register"
                className={plan.featured ? 'btn-primary' : 'btn-outline'}
              >
                {plan.cta} <span className="btn-arrow"><ArrowUpRight /></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
