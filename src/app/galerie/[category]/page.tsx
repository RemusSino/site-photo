'use client';

import { notFound } from 'next/navigation';
import CategoryCollage from '@/components/CategoryCollage';
import { use } from 'react';

// Define the categories and their configurations
const categoryConfigs = {
  'sesiuni': {
    title: 'Galerie : Sesiuni Foto',
    images: Array(10).fill('/galerie/wedding-1.jpg').map((image, index) => ({
      src: image,
      aspectRatio: index % 4 === 0 ? 'aspect-[3/4]' : 
                   index % 4 === 1 ? 'aspect-square' : 
                   index % 4 === 2 ? 'aspect-[4/3]' : 
                   'aspect-[16/9]'
    }))
  },
  'botez': {
    title: 'Galerie : Botez',
    images: Array(10).fill('/galerie/wedding-2.jpg').map((image, index) => ({
      src: image,
      aspectRatio: index % 4 === 0 ? 'aspect-[3/4]' : 
                   index % 4 === 1 ? 'aspect-square' : 
                   index % 4 === 2 ? 'aspect-[4/3]' : 
                   'aspect-[16/9]'
    }))
  },
  'cununie': {
    title: 'Galerie : Cununie',
    images: Array(10).fill('/galerie/wedding-3.jpg').map((image, index) => ({
      src: image,
      aspectRatio: index % 4 === 0 ? 'aspect-[3/4]' : 
                   index % 4 === 1 ? 'aspect-square' : 
                   index % 4 === 2 ? 'aspect-[4/3]' : 
                   'aspect-[16/9]'
    }))
  },
  'studio': {
    title: 'Galerie : Studio',
    images: Array(10).fill('/galerie/wedding-4.jpg').map((image, index) => ({
      src: image,
      aspectRatio: index % 4 === 0 ? 'aspect-[3/4]' : 
                   index % 4 === 1 ? 'aspect-square' : 
                   index % 4 === 2 ? 'aspect-[4/3]' : 
                   'aspect-[16/9]'
    }))
  }
};

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { category } = use(params);
  const config = categoryConfigs[category as keyof typeof categoryConfigs];

  if (!config) {
    notFound();
  }

  return (
    <CategoryCollage
      title={config.title}
      images={config.images}
    />
  );
} 