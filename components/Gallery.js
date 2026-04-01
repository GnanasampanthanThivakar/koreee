'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/images/hero-bg.png', category: 'training', caption: 'Group resistance training' },
  { src: '/images/facility-gym.png', category: 'facility', caption: 'Modern gym equipment' },
  { src: '/images/facility-courts.png', category: 'facility', caption: 'Tennis courts' },
  { src: '/images/program-hyrox.png', category: 'training', caption: 'HYROX functional fitness' },
  { src: '/images/about-section.png', category: 'community', caption: 'Team strength training' },
  { src: '/images/community-section.png', category: 'community', caption: 'Team celebration' },
  { src: '/images/program-strength.png', category: 'training', caption: 'Strength & conditioning' },
  { src: '/images/program-tennis.png', category: 'training', caption: 'Tennis action shot' },
  { src: '/images/facility-physio.png', category: 'facility', caption: 'Recovery & physio room' },
  { src: '/images/program-hiit.png', category: 'training', caption: 'Outdoor HIIT bootcamp' },
  { src: '/images/facility-group.png', category: 'facility', caption: 'Functional training zone' },
  { src: '/images/program-youth.png', category: 'community', caption: 'Youth sports camp' },
];

const categories = ['All', 'Training', 'Facility', 'Community'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category === activeFilter.toLowerCase()
        );

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header reveal">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Kore in Action</h2>
          <p className="section-subtitle">
            See the energy, the grit, and the community through our photos.
          </p>
        </div>

        <div className="gallery-filters reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((img, index) => (
            <div
              key={img.src + index}
              className={`gallery-item ${index === 0 ? 'tall' : ''} ${index === 3 ? 'wide' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={img.src}
                alt={img.caption}
                width={400}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="gallery-item-overlay">
                <div className="gallery-item-icon"><Maximize2 size={24} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxOpen ? 'open' : ''}`}>
        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
          <X size={24} />
        </button>
        <button className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="Previous image">
          <ChevronLeft size={32} />
        </button>
        {lightboxOpen && filtered[lightboxIndex] && (
          <Image
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].caption}
            width={1200}
            height={800}
            style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '85vh', width: 'auto', height: 'auto' }}
          />
        )}
        <button className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="Next image">
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
