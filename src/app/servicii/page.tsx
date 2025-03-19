import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

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

export default function Services() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20">
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
                  <h2 className={`text-3xl md:text-4xl font-serif leading-tight p-2 inline-block ${
                    service.imagePosition === 'left' 
                      ? 'ml-auto text-right bg-white text-black' 
                      : 'text-left bg-black text-white'
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

      <Footer />
    </main>
  );
} 