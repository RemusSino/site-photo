import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  {
    src: '/wedding-1.jpg',
    alt: 'Wedding photograph 1'
  },
  {
    src: '/wedding-2.jpg',
    alt: 'Wedding photograph 2'
  },
  {
    src: '/wedding-3.jpg',
    alt: 'Wedding photograph 3'
  }
];

const despreMine = [
 'Cu o pasiune pentru fotografie care a început în copilărie, am transformat această dragoste într-o carieră dedicată capturării celor mai prețioase momente din viața oamenilor. Specializată în fotografie de nuntă, aduc o abordare artistică și documentară în fiecare eveniment, concentrându-mă pe surprinderea emoțiilor autentice și a momentelor spontane care fac fiecare poveste unică.',
 'În ultimii zece ani, am avut privilegiul să fotografiez peste 200 de nunți, fiecare cu propria sa magie și personalitate distinctă. Stilul meu combină eleganța fotografiei fine-art cu naturalețea fotojurnalismului, creând astfel imagini care nu sunt doar fotografii, ci amintiri prețioase care vor dăinui generații.',
 'Lucrez discret și intuitiv, permițând momentelor să se desfășoare natural, în timp ce surprind esența și energia specială a zilei voastre.'
]

export default function Home() {
  return (
    <main className="relative">
      <Header />
      
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

      <Footer />
    </main>
  );
}
