import Link from 'next/link';
import Image from 'next/image';

interface GalleryCategoryProps {
  id: string;
  title: string;
  image: string;
  href: string;
}

export default function GalleryCategory({ id, title, image, href }: GalleryCategoryProps) {
  return (
    <Link 
      key={id}
      href={href}
      className="relative aspect-[4/3] group overflow-hidden"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/50" />
      </div>
      
      {/* Title */}
      <div className="relative h-full flex items-center justify-center">
        <h2 className="text-white text-4xl md:text-5xl font-serif tracking-wide">
          {title}
        </h2>
      </div>
    </Link>
  );
} 