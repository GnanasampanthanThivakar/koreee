import { Dumbbell, Flame, Trophy, Smartphone } from 'lucide-react';

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
  {
    icon: <Smartphone />,
    title: 'my Kore App',
    desc: 'Book classes, manage memberships and track your progress on the go.',
  },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card reveal" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
