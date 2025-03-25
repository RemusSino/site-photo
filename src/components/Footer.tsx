import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start max-w-6xl">
        {/* Social Links */}
        <div className="flex flex-col gap-4 mb-8 md:mb-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
            Facebook
          </a>
        </div>

        {/* Contact Info & Copyright */}
        <div className="text-center mb-8 md:mb-0">
          <h3 className="font-serif text-xl mb-2 text-gray-600">ADRIANA SINORCHIAN</h3>
          <p className="text-gray-600 mb-2">Fotograf</p>
          <a href="mailto:" className="text-gray-600 hover:text-black mb-4 block">
            adrianasinorchian@example.com
          </a>
          <p className="text-sm text-gray-500 mt-4">
            @2025 Copyright - Adriana Sinorchian
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          <Link href="/galerie" className="text-gray-600 hover:text-black">
            Galerie
          </Link>
          <Link href="/despre-mine" className="text-gray-600 hover:text-black">
            Despre mine
          </Link>
          <Link href="/servicii" className="text-gray-600 hover:text-black">
            Servicii
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer; 