import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

// Gallery categories data
const categories = [
  {
    id: 'wedding-1',
    title: 'Soria & Antoine',
    image: '/galerie/wedding-1.jpg',
    href: '/galerie/soria-antoine'
  },
  {
    id: 'wedding-2',
    title: 'Madison & Leniox',
    image: '/galerie/wedding-2.jpg',
    href: '/galerie/madison-leniox'
  },
  {
    id: 'wedding-3',
    title: 'Emma & James',
    image: '/galerie/wedding-3.jpg',
    href: '/galerie/emma-james'
  },
  {
    id: 'wedding-4',
    title: 'Sophie & Michael',
    image: '/galerie/wedding-4.jpg',
    href: '/galerie/sophie-michael'
  }
];

export default function Gallery() {
  return (
    <main className="min-h-screen">
      <Header />
      
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

      <Footer />
    </main>
  );
} 