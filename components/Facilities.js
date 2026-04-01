import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const facilities = [
  {
    image: '/images/facility-gym.png',
    title: 'Modern Gym',
    desc: 'State-of-the-art equipment for strength & conditioning',
  },
  {
    image: '/images/facility-courts.png',
    title: 'Sports Courts',
    desc: 'Tennis & badminton courts at SL Tennis Association',
  },
  {
    image: '/images/facility-physio.png',
    title: 'Recovery & Physio',
    desc: 'On-site sports physiotherapy & injury prevention',
  },
  {
    image: '/images/facility-group.png',
    title: 'Functional Zone',
    desc: 'Turf area, battle ropes, TRX & plyometric boxes',
  },
];

export default function Facilities() {
  return (
    <section className="facilities" id="facilities">
      <div className="container">
        <div className="facilities-header reveal">
          <span className="section-label">Our Facilities</span>
          <h2 className="section-title">World-Class Facilities</h2>
          <p className="section-subtitle">
            Train in Colombo&apos;s most advanced sports centre with cutting-edge
            equipment, dedicated courts, and professional recovery services.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div className="facility-card reveal" key={index}>
              <Image
                src={facility.image}
                alt={facility.title}
                width={400}
                height={533}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="facility-card-overlay">
                <div className="facility-card-content">
                  <h3 className="facility-card-title">{facility.title}</h3>
                  <p className="facility-card-desc">{facility.desc}</p>
                </div>
                <div className="facility-card-icon">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
