import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Since I was a little girl, I dreamt of my perfect day. And now, I get to capture everyone's special day.
              </h1>
              
              <div className="w-12 h-px bg-black"></div>
              
              <div className="text-gray-600 space-y-6 text-lg">
                <p>
                  Born and raised in Charleston, South Carolina. With over 6 years of professional photography experience, I fell in love with love and photographing weddings has been my favorite event to capture.
                </p>
                <p>
                  Featured in numerous wedding magazines and online publications.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[800px]">
              <Image
                src="/about-profile.jpg"
                alt="Portrait of the photographer"
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