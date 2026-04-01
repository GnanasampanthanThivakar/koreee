import Image from 'next/image';

export default function Community() {
  return (
    <section className="community">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal-right">
            <Image
              src="/images/community-section.png"
              alt="Athletes celebrating together after a group workout at Kore"
              width={600}
              height={750}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>

          <div className="about-content reveal-left">
            <span className="section-label">Community</span>
            <h2 className="section-title">
              More Than a Gym,<br />It&apos;s a Community
            </h2>
            <p className="about-text">
              We&apos;re more than a gym; we&apos;re a community. Kore organizes
              tournaments, boot camps, and wellness events that connect athletes
              and families. Our internationally-inspired approach ensures every
              athlete — from weekend warriors to competitive champions — can
              train smarter and grow together.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <div className="about-feature-text">
                  <strong>Weekly Bootcamps:</strong> HIIT, CrossFit, and
                  endurance challenges for all fitness levels
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <div className="about-feature-text">
                  <strong>Monthly Tournaments:</strong> Football 5-a-side,
                  badminton leagues, and cricket cups
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <div className="about-feature-text">
                  <strong>Corporate Wellness:</strong> Team sports days and
                  corporate fitness programs
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <div className="about-feature-text">
                  <strong>Youth Development:</strong> Supervised junior programs
                  and sports camps for kids
                </div>
              </div>
            </div>

            <a href="#events" className="btn-primary">
              View Events →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
