
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/30 backdrop-blur-md py-3" : "py-6",
        isOpen && isMobile ? "bg-black/80 backdrop-blur-md" : ""
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <div className="text-white font-orbitron text-xl md:text-2xl font-bold">
              <span className="text-gradient">ARZ</span>
              <span className="text-white">FUN</span>
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-button-gradient opacity-70"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="navbar-item">Особенности</a>
          <a href="#rules" className="navbar-item">Правила</a>
          <a href="#news" className="navbar-item">Новости</a>
          <a href="#top" className="navbar-item">Топ 100</a>
          <a href="#forum" className="navbar-item">Форум</a>
          <a href="#donate" className="navbar-item">Донат</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#support" 
            className="button-secondary flex items-center gap-2"
          >
            <Sparkles size={18} className="text-arz-purple" />
            <span>Поддержка</span>
          </a>
          <a 
            href="#download" 
            className="button-primary flex items-center gap-2"
          >
            <Download size={18} />
            <span>Скачать</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && isMobile && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a href="#features" className="text-white py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>Особенности</a>
            <a href="#rules" className="text-white py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>Правила</a>
            <a href="#news" className="text-white py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>Новости</a>
            <a href="#top" className="text-white py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>Топ 100</a>
            <a href="#forum" className="text-white py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>Форум</a>
            <a href="#donate" className="text-white py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>Донат</a>
            
            <div className="flex flex-col gap-3 mt-4">
              <a 
                href="#support" 
                className="button-secondary w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                <Sparkles size={18} className="mr-2 text-arz-purple" />
                <span>Поддержка</span>
              </a>
              <a 
                href="#download" 
                className="button-primary w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                <Download size={18} className="mr-2" />
                <span>Скачать</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
