import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Image
          src="/images/hero-premium.png"
          alt="Kore athletes in a cinematically lit sports centre"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-overlay"></div>

      <div className="container hero-split">
        <div className="hero-left">
          <h1 className="hero-title">
            TRAIN, EAT &amp;<br />
            ELEVATE YOUR GAME<br />
            AT <span className="highlight">KORE</span>
          </h1>
        </div>

        <div className="hero-right">
          <p className="hero-description">
            Experience world-class training, certified coaches,
            and seamless membership booking—designed for
            beginners, enthusiasts, and advanced
            competitors.
          </p>

          <div className="hero-buttons">
            <a href="#register" className="btn-primary">
              Join Now <span className="btn-arrow"><ArrowUpRight /></span>
            </a>
            <a href="#programs" className="btn-outline">
              Learn More <span className="btn-arrow"><ArrowUpRight /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
