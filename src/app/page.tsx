import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Adriana Sinorchian | Fotografie Profesională',
  description: 'Servicii profesionale de fotografie pentru nunți, botezuri, cununii și sesiuni foto de studio. Surprinde momentele importante din viața ta cu fotografii autentice și de calitate.',
};

const images = [
  {
    src: '/wedding-1.jpg',
    alt: 'Fotografie de nuntă 1'
  },
  {
    src: '/wedding-2.jpg',
    alt: 'Fotografie de nuntă 2'
  },
  {
    src: '/wedding-3.jpg',
    alt: 'Fotografie de nuntă 3'
  }
];

const despreMine = [
 'Cu o pasiune pentru fotografie care a început în copilărie, am transformat această dragoste într-o carieră dedicată capturării celor mai prețioase momente din viața oamenilor. Specializată în fotografie de nuntă, aduc o abordare artistică și documentară în fiecare eveniment, concentrându-mă pe surprinderea emoțiilor autentice și a momentelor spontane care fac fiecare poveste unică.',
 'În ultimii ani, am avut privilegiul să fotografiez evenimente deosebite, fiecare cu propria sa magie și personalitate distinctă. Stilul meu combină eleganța fotografiei fine-art cu naturalețea, creând astfel imagini care nu sunt doar fotografii, ci amintiri prețioase care vor dăinui generații.',
 'Lucrez discret și intuitiv, permițând momentelor să se desfășoare natural, în timp ce surprind esența și energia specială a zilei voastre.'
]

export default function Home() {
  return (
    <main className="relative">
      <Script id="schema-photographer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Adriana Sinorchian Fotografie",
        "image": "https://adrianasinorchian.ro/hero-image.jpg",
        "url": "https://adrianasinorchian.ro",
        "@id": "https://adrianasinorchian.ro/#organization",
        "description": "Servicii profesionale de fotografie pentru nunți, botezuri, cununii și sesiuni foto în studio.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Suceava, Romania"
        },
        "telephone": "+40XXXXXXXXX", // Replace with actual phone number
        "email": "contact@adrianasinorchian.ro", // Replace with actual email
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://instagram.com/adrianasinorchian",
          "https://facebook.com/adrianasinorchianfotografie",
          "https://www.fotografi-cameramani.ro/sinorchian-adriana_8439"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicii Fotografie",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fotografie de Nuntă"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fotografie de Botez"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fotografie de Cununie"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sesiuni Foto în Studio"
              }
            }
          ]
        }
      }) }} />

      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-black/50"
          style={{
            backgroundImage: 'url("/hero-image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            Servicii profesionale de fotografie
          </h1>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
            Surprinde momentele importante din viața ta
          </h2>
          <Link 
            href="/galerie"
            className="bg-[#D4B69B] text-black px-8 py-3 hover:bg-[#C4A68B] transition-colors duration-300"
          >
            Galerie
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Photographer Info */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl mb-4" id="section-despre-mine">Despre mine</h2>
            <div className="font-serif max-w-3xl mx-auto space-y-6 text-white leading-relaxed">
              {despreMine.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {images.map((image, index) => (
              <div key={index} className="aspect-[3/4] relative group overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
