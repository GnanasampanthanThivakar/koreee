import { Dumbbell, Flame, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: <Dumbbell />,
    title: 'Expert Coaches',
    desc: 'Certified sports professionals with national-level coaching experience.',
  },
  {
    icon: <Flame />,
    title: 'HYROX Training',
    desc: 'Official HYROX-style functional fitness races and programming.',
  },
  {
    icon: <Trophy />,
    title: 'Community Events',
    desc: 'Tournaments, boot camps, and wellness events that connect athletes.',
  },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        
        <div className="benefits-header-split reveal">
          <div className="benefits-header-left">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Experience the Best<br/>Kore Lifestyle</h2>
          </div>
          <div className="benefits-header-right">
            <p>
              We go beyond just renting gym space. We deliver a premium fitness 
              experience with high-quality facilities, expert guidance, and a 
              strong sense of community.
            </p>
          </div>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-item reveal" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
