
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-particles opacity-30"></div>
      <div className="space-overlay"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: i % 3 === 0 ? '#9b87f5' : i % 3 === 1 ? '#FF84FF' : '#4169E1',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="text-center relative z-10 max-w-md mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-9xl font-orbitron font-bold text-gradient mb-4">404</h1>
        <div className="w-16 h-1 bg-button-gradient mx-auto mb-6"></div>
        <p className="text-2xl text-white mb-8">Страница не найдена</p>
        <p className="text-white/70 mb-8">
          Похоже, вы пытаетесь найти страницу, которая не существует или была перемещена.
        </p>
        <Link 
          to="/" 
          className="button-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          <span>Вернуться на главную</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
