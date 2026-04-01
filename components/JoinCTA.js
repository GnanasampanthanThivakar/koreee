import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function JoinCTA() {
  return (
    <section className="join-cta">
      <div className="join-cta-bg">
        <Image
          src="/images/join-cta-bg.png"
          alt="Kore Sports Centre facility"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="join-cta-overlay"></div>

      <div className="container join-cta-content reveal">
        <span className="section-label">Ready to Begin?</span>
        <h2 className="section-title">
          Join Kore and<br />Start Your Journey
        </h2>
        <p className="join-cta-desc">
          Whether you&apos;re looking to get fit, join a team, or find expert
          coaching — you&apos;ll feel right at home here. Experience Colombo&apos;s 
          premier sports community with professional support.
        </p>
        <a href="#register" className="btn-primary">
          Register Now <span className="btn-arrow"><ArrowUpRight /></span>
        </a>
      </div>
    </section>
  );
}
