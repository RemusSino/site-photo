'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageModal from '@/components/ImageModal';

interface Image {
  src: string;
  aspectRatio: string;
}

interface CategoryCollageProps {
  title: string;
  images: Image[];
}

export default function CategoryCollage({ title, images }: CategoryCollageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl md:text-2xl font-serif text-center mb-16">{title}</h1>
          
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-2 gap-10 [column-fill:_balance] mb-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-6 cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <div className={`relative w-full ${image.aspectRatio} overflow-hidden bg-gray-100`}>
                  <Image
                    src={image.src}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        currentImage={images[currentImageIndex].src}
        onPrevious={previousImage}
        onNext={nextImage}
        totalImages={images.length}
        currentIndex={currentImageIndex}
      />

      <Footer />
    </main>
  );
} 