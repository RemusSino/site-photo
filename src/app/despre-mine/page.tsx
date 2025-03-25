import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Despre Mine | Adriana Sinorchian Fotografie',
  description: 'Află povestea mea ca fotograf profesionist specializat în fotografii de nuntă, botez, cununie și sesiuni foto de studio.',
  alternates: {
    canonical: '/despre-mine',
  },
  openGraph: {
    title: 'Despre Mine | Adriana Sinorchian Fotografie',
    description: 'Află povestea mea ca fotograf profesionist specializat în fotografii de nuntă, botez, cununie și sesiuni foto de studio.',
    url: 'https://adrianasinorchian.ro/despre-mine',
    images: [
      {
        url: '/about-profile.jpg',
        width: 800,
        height: 1200,
        alt: 'Adriana Sinorchian - Fotograf',
      },
    ],
  },
};

export default function About() {
  return (
    <main className="min-h-screen">
      <Script id="schema-about" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Adriana Sinorchian",
        "url": "https://adrianasinorchian.ro/despre-mine",
        "image": "https://adrianasinorchian.ro/about-profile.jpg",
        "jobTitle": "Fotograf Profesionist",
        "description": "Cu peste 3 ani de experiență în fotografie, îndrăgostita de iubire si frumos, fotografierea momentelor importante din viața oamenilor este pasiunea mea.",
        "sameAs": [
          "https://instagram.com/adrianasinorchian",
          "https://facebook.com/adrianasinorchianfotografie",
          "https://www.fotografi-cameramani.ro/sinorchian-adriana_8439"
        ]
      }) }} />
      
      <Header />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Încă din copilărie, visam la ziua mea perfectă. Acum, am privilegiul să surprind ziua specială a fiecăruia.
              </h1>
              
              <div className="w-12 h-px bg-black"></div>
              
              <div className="text-gray-300 space-y-6 text-lg">
                <p>
                  Cu peste 3 ani de experiență în fotografie, îndrăgostita de iubire si frumos, fotografierea momentelor importante din viața oamenilor este pasiunea mea.
                </p>
                <p className='bg-white text-black px-4 py-2 rounded-md'>
                <a href='https://www.fotografi-cameramani.ro/sinorchian-adriana_8439' target="_blank" rel="noopener noreferrer"><Image src='/fotografi-cameramani-fundal-deschis-color.svg' alt='fotografi-cameramani' width={200} height={100} /></a>
                  Vizualizati si profilul meu pe <a href='https://www.fotografi-cameramani.ro/sinorchian-adriana_8439' target="_blank" rel="noopener noreferrer" className='hover:underline text-yellow-600'><strong>fotografi-cameramani.ro</strong></a>
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[800px]">
              <Image
                src="/about-profile.jpg"
                alt="Despre mine"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 