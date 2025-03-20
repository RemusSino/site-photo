import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Accordion from '@/components/Accordion';

// Services data
const services = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: "Capturing your special day with an artistic and documentary approach. From getting ready moments to the last dance, I'll be there to document every precious moment, emotion, and detail that makes your wedding unique. Includes pre-wedding consultation, full-day coverage, and a curated collection of high-resolution images.",
    image: '/servicii/wedding.jpg',
    imagePosition: 'right'
  },
  {
    id: 2,
    title: 'Engagement Sessions',
    description: "Celebrate your love story with a romantic engagement photoshoot. These relaxed, natural sessions are perfect for getting comfortable in front of the camera before your wedding day. We'll choose a meaningful location and create beautiful, authentic images that reflect your relationship.",
    image: '/servicii/engagement.jpg',
    imagePosition: 'left'
  },
  {
    id: 3,
    title: 'Bridal Portraits',
    description: 'A dedicated session to capture your bridal beauty in detail. This classic Southern tradition gives you a chance to do a complete trial run of your wedding day look and create stunning portraits in a relaxed environment. Perfect for preserving these once-in-a-lifetime moments.',
    image: '/servicii/bridal.jpg',
    imagePosition: 'right'
  },
  {
    id: 4,
    title: 'Destination Weddings',
    description: 'Your love story knows no bounds, and neither do I. Available for destination weddings worldwide, I bring my signature style and attention to detail wherever your hearts take you. Includes travel arrangements and extended coverage options to capture your entire wedding experience.',
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
    content: "Stilul meu îmbină fotografia documentară spontană cu portrete regizate artistic. Mă concentrez pe captarea momentelor și emoțiilor autentice, creând în același timp imagini frumoase și atemporale care spun povestea unică a iubirii voastre."
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
  'În ultimii zece ani, am avut privilegiul să fotografiez peste 200 de nunți, fiecare cu propria sa magie și personalitate distinctă. Stilul meu combină eleganța fotografiei fine-art cu naturalețea fotojurnalismului, creând astfel imagini care nu sunt doar fotografii, ci amintiri prețioase care vor dăinui generații.',
  'Lucrez discret și intuitiv, permițând momentelor să se desfășoare natural, în timp ce surprind esența și energia specială a zilei voastre.'
]
export default function Services() {
  return (
    <main className="min-h-screen">
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