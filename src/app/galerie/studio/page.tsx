import CategoryCollage from '@/components/ColajCategorie';

// Create images array for this category
const images = Array(10).fill('/galerie/wedding-4.jpg').map((image, index) => ({
  src: image,
  aspectRatio: index % 4 === 0 ? 'aspect-[3/4]' : 
               index % 4 === 1 ? 'aspect-square' : 
               index % 4 === 2 ? 'aspect-[4/3]' : 
               'aspect-[16/9]'
}));

export default function StudioPage() {
  return (
    <CategoryCollage
      title="Galerie : Studio"
      images={images}
    />
  );
} 