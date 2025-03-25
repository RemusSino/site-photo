import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Accordion from '@/components/Accordion';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Servicii Foto | Adriana Sinorchian Fotografie',
  description: 'Servicii profesionale de fotografie pentru nunți, botezuri, cununii și sesiuni foto în studio. Află despre pachete și detalii pentru a surprinde cele mai importante momente din viața ta.',
  alternates: {
    canonical: '/servicii',
  },
  openGraph: {
    title: 'Servicii Foto | Adriana Sinorchian Fotografie',
    description: 'Servicii profesionale de fotografie pentru nunți, botezuri, cununii și sesiuni foto în studio.',
    url: 'https://adrianasinorchian.ro/servicii',
    images: [
      {
        url: '/servicii/wedding.jpg',
        width: 1200,
        height: 800,
        alt: 'Servicii de Fotografie - Adriana Sinorchian',
      },
    ],
  },
};

// Services data
const services = [
  {
    id: 1,
    title: 'Fotografie de Nuntă',
    description: "Surprind ziua dumneavoastră specială cu o abordare artistică și documentară. De la momentele de pregătire până la ultimul dans, voi fi acolo pentru a documenta fiecare moment prețios, emoție și detaliu care face nunta dumneavoastră unică. Include consultație pre-nuntă, acoperire pe tot parcursul zilei și o colecție selectată de imagini de înaltă rezoluție.",
    image: '/servicii/wedding.jpg',
    imagePosition: 'right'
  },
  {
    id: 2,
    title: 'Sedințe Foto',
    description: "Sărbătoriți povestea voastră de dragoste cu o ședință foto. Aceste sesiuni relaxate și naturale sunt perfecte pentru a vă obișnui cu camera înainte de ziua nunții. Vom alege o locație cu semnificație pentru voi și vom crea imagini frumoase și autentice care reflectă relația voastră.",
    image: '/servicii/engagement.jpg',
    imagePosition: 'left'
  },
  {
    id: 3,
    title: 'Sesiune Foto in Studio',
    description: 'O sesiune dedicată pentru a surprinde frumusețea miresei în detaliu. Această tradiție clasică vă oferă șansa de a face o probă completă a look-ului pentru ziua nunții și de a crea portrete uimitoare într-un mediu relaxat. Perfect pentru păstrarea acestor momente unice în viață.',
    image: '/servicii/bridal.jpg',
    imagePosition: 'right'
  },
  {
    id: 4,
    title: 'Fotografie de Botez',
    description: 'Povestea voastră de dragoste nu are limite, și nici eu. Disponibilă pentru nunți în destinații din întreaga lume, aduc stilul meu distinct și atenția pentru detalii oriunde v-ar duce inimile. Include opțiuni pentru aranjamente de călătorie și acoperire extinsă pentru a surprinde întreaga experiență a nunții.',
    image: '/servicii/destination.jpg',
    imagePosition: 'left'
  }
];

// FAQ data
const faqItems = [
  {
    title: "Cu cât timp înainte ar trebui să rezerv serviciile de fotografie pentru nuntă?",
    content: "Recomand rezervarea serviciilor de fotografie pentru nuntă imediat după ce ați stabilit data și locația, de obicei cu 9-12 luni înainte. Pentru sezonul de vârf al nunților (mai-octombrie), este recomandat să rezervați chiar mai devreme, deoarece datele se pot ocupa rapid."
  },
  {
    title: "Care este stilul tău de fotografie?",
    content: "Stilul meu îmbină fotografia spontană cu portrete regizate artistic. Mă concentrez pe captarea momentelor și emoțiilor autentice, creând în același timp imagini frumoase și atemporale care spun povestea unică a momentului."
  },
  {
    title: "Oferi ședințe foto de logodnă?",
    content: "Da! Ședințele foto de logodnă sunt o modalitate minunată de a vă obișnui cu aparatul foto înainte de ziua nunții. Aceste ședințe ne permit să lucrăm împreună și să experimentați stilul meu de fotografiere. Multe cupluri folosesc aceste fotografii pentru invitații și site-urile de nuntă."
  },
  {
    title: "Câte fotografii vom primi?",
    content: "Pentru o zi întreagă de nuntă (8 ore), puteți aștepta să primiți aproximativ 600-800 de imagini editate. Numărul exact depinde de evenimentele din ziua respectivă, numărul de invitați și alte variabile unice pentru nunta voastră."
  },
  {
    title: "Când vom primi fotografiile?",
    content: "Galeria completă editată a nunții va fi livrată în termen de 6-8 săptămâni după ziua nunții. Pentru ședințele de logodnă și alte ședințe foto de portret, timpul de livrare este de obicei 2-3 săptămâni."
  },
  {
    title: "Aduci echipament de rezervă?",
    content: "Absolut! Aduc multiple aparate foto profesionale, obiective, blițuri și carduri de memorie la fiecare nuntă. Amintirile voastre sunt de neînlocuit, așa că iau toate măsurile de precauție pentru a mă asigura că sunt captate în siguranță."
  }
];

const despreMine = [
  'Cu o pasiune pentru fotografie care a început în copilărie, am transformat această dragoste într-o carieră dedicată capturării celor mai prețioase momente din viața oamenilor. Specializată în fotografie de nuntă, aduc o abordare artistică și documentară în fiecare eveniment, concentrându-mă pe surprinderea emoțiilor autentice și a momentelor spontane care fac fiecare poveste unică.',
  'În ultimii ani, am avut privilegiul să fotografiez evenimente publice, cununii, botezuri, precum si alte momente speciale, fiecare cu propria sa magie și personalitate distinctă. Stilul meu combină eleganța fotografiei fine-art cu naturalețea fotojurnalismului, creând astfel imagini care nu sunt doar fotografii, ci amintiri prețioase care vor dăinui generații.',
  'Lucrez discret și intuitiv, permițând momentelor să se desfășoare natural, în timp ce surprind esența și energia specială a momentului.'
]
export default function Services() {
  return (
    <main className="min-h-screen">
      <Script id="schema-services" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": services.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "Person",
              "name": "Adriana Sinorchian"
            },
            "url": `https://adrianasinorchian.ro/servicii#${service.id}`,
            "image": `https://adrianasinorchian.ro${service.image}`
          }
        }))
      }) }} />
      
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.content
          }
        }))
      }) }} />
      
      <Header />
      
      <section className="pt-32 pb-20">
      <div className="py-20 px-4 odd:bg-gray-50 text-gray-600 ml-auto">
            <div className="font-serif max-w-3xl mx-auto space-y-6 leading-relaxed">
              {despreMine.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

        {services.map((service) => (
          <div 
            key={service.id}
            className="py-20 px-4 odd:bg-gray-50"
          >
            <div className="max-w-7xl mx-auto">
              <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                service.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Text Content */}
                <div className="space-y-8 flex-1">
                  <h2 className={`text-3xl md:text-4xl font-serif leading-tight p-2 inline-block rounded-md px-4 py-2 ${
                    service.imagePosition === 'left' 
                      ? 'ml-auto text-right bg-black text-yellow-600' 
                      : 'text-left bg-white text-black'
                  }`}>
                    {service.title}
                  </h2>
                  
                  <div className={`w-12 h-px bg-black ${
                    service.imagePosition === 'left' ? 'ml-auto' : ''
                  }`}></div>
                  
                  <div className={`text-gray-600 text-lg leading-relaxed ${
                    service.imagePosition === 'left' ? 'text-right' : 'text-left'
                  }`}>
                    <p>{service.description}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] w-full lg:w-1/2 lg:h-[600px] group overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gray-700 text-4xl font-serif text-center mb-12">Întrebări Frecvente</h2>
          <p className="text-gray-700 text-center mb-12">
            Aici sunt răspunsurile la câteva întrebări frecvente despre serviciile mele de fotografie.
            Dacă nu găsiți răspunsul la ce vă interesează, puteți să mă contactați direct.
          </p>
          <Accordion items={faqItems} className="text-gray-700 mb-12" />
        </div>
      </section>

      <Footer />
    </main>
  );
} 