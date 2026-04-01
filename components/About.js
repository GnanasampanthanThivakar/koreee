import Image from 'next/image';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal-left">
            <Image
              src="/images/about-section.png"
              alt="Kore coaches and trainers leading athletes in high-intensity drills"
              width={600}
              height={750}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="about-image-accent"></div>
          </div>

          <div className="about-content reveal-right">
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              An Elite Sports<br />Hub in Colombo
            </h2>
            <p className="about-text">
              Kore Sports Centre was founded to empower grit and athletic potential
              in Sri Lanka. Partnering with the Sri Lanka Tennis Association, we
              created an elite training hub that brings international-standard
              fitness and sports performance to Colombo 7. Our name &quot;Kore&quot;
              represents our core belief: hard work and community support are at
              the heart of every athlete&apos;s success.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon"><CheckCircle2 /></div>
                <div className="about-feature-text">
                  <strong>Our Mission:</strong> Provide a dynamic training
                  environment that inspires people to reach new heights
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><CheckCircle2 /></div>
                <div className="about-feature-text">
                  <strong>Our Vision:</strong> Become Sri Lanka&apos;s leading
                  multi-sport centre, uniting athletes and enthusiasts
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><CheckCircle2 /></div>
                <div className="about-feature-text">
                  <strong>Expert Training:</strong> Certified coaches with
                  experience coaching national athletes and corporates
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><CheckCircle2 /></div>
                <div className="about-feature-text">
                  <strong>Family-Friendly:</strong> Programs tailored
                  to every level with physiotherapy support
                </div>
              </div>
            </div>

            <a href="#programs" className="btn-primary">
              Explore Programs <span className="btn-arrow"><ArrowUpRight /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
