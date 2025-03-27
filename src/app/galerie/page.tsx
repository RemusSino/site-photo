import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Galerie Foto | Adriana Sinorchian Fotografie',
  description: 'Explorează galeria de fotografii profesionale cu lucrări din sesiuni foto, nunți, botezuri și cununii. Imagini de calitate care surprind emoția și frumusețea momentelor speciale.',
  alternates: {
    canonical: '/galerie',
  },
  openGraph: {
    title: 'Galerie Foto | Adriana Sinorchian Fotografie',
    description: 'Explorează galeria de fotografii profesionale cu lucrări din sesiuni foto, nunți, botezuri și cununii.',
    url: 'https://adrianasinorchian.ro/galerie',
    images: [
      {
        url: '/galerie/wedding-1.jpg',
        width: 1200,
        height: 800,
        alt: 'Galerie Foto - Adriana Sinorchian',
      },
    ],
  },
};

// Gallery categories data
const categories = [
  {
    id: 'sesiuni',
    title: 'Sesiuni',
    image: '/galerie/wedding-1.jpg',
    href: '/galerie/sesiuni'
  },
  {
    id: 'botez',
    title: 'Botez',
    image: '/galerie/wedding-2.jpg',
    href: '/galerie/botez'
  },
  {
    id: 'cununie',
    title: 'Cununie',
    image: '/galerie/wedding-3.jpg',
    href: '/galerie/cununie'
  },
  {
    id: 'studio',
    title: 'Studio',
    image: '/galerie/wedding-4.jpg',
    href: '/galerie/studio'
  }
];

export default function Galerie() {
  return (
    <main className="min-h-screen">
      <Script id="schema-gallery" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Galerie Foto",
        "description": "Explorează galeria de fotografii profesionale cu lucrări din sesiuni foto, nunți, botezuri și cununii.",
        "url": "https://adrianasinorchian.ro/galerie",
        "hasPart": categories.map(category => ({
          "@type": "CollectionPage",
          "name": `Galerie - ${category.title}`,
          "url": `https://adrianasinorchian.ro${category.href}`,
          "image": `https://adrianasinorchian.ro${category.image}`
        }))
      }) }} />
      
      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={category.href}
                className="relative aspect-[4/3] group overflow-hidden"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/50" />
                </div>
                
                {/* Title */}
                <div className="relative h-full flex items-center justify-center">
                  <h2 className="text-white text-4xl md:text-5xl font-serif tracking-wide">
                    {category.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
} 