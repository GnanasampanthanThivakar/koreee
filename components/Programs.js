import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    image: '/images/program-hyrox.png',
    tag: 'Featured',
    title: 'HYROX Training',
    desc: 'Official HYROX-style functional fitness races and endurance programming.',
    link: '#register',
  },
  {
    image: '/images/program-strength.png',
    tag: 'Popular',
    title: 'Strength & Conditioning',
    desc: 'Elite S&C coaching with personalized programs for peak performance.',
    link: '#register',
  },
  {
    image: '/images/program-tennis.png',
    tag: 'Sports',
    title: 'Tennis Coaching',
    desc: 'Expert tennis training at the Sri Lanka Tennis Association courts.',
    link: '#register',
  },
  {
    image: '/images/program-hiit.png',
    tag: 'Fitness',
    title: 'HIIT & Bootcamps',
    desc: 'High-intensity interval training and outdoor circuit challenges.',
    link: '#register',
  },
  {
    image: '/images/program-youth.png',
    tag: 'Youth',
    title: 'Youth Sports Camp',
    desc: 'Intensive junior camps with certified coaches for all sport disciplines.',
    link: '#register',
  },
  {
    image: '/images/program-corporate.png',
    tag: 'Corporate',
    title: 'Corporate Wellness',
    desc: 'Team relay races, sports days, and wellness programs for companies.',
    link: '#register',
  },
];

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="programs-header reveal">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Training Programs & Classes</h2>
          <p className="section-subtitle">
            From HYROX functional fitness to tennis coaching — find the training
            that matches your ambition and take your game to the next level.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-card reveal" key={index}>
              <Image
                src={program.image}
                alt={program.title}
                width={400}
                height={480}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="program-card-overlay">
                <span className="program-card-tag">{program.tag}</span>
                <h3 className="program-card-title">{program.title}</h3>
                <p className="program-card-desc">{program.desc}</p>
                <a href={program.link} className="program-card-link">
                  Learn More <ArrowUpRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
