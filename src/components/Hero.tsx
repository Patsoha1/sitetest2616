
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section className="relative min-h-screen pt-28 overflow-hidden bg-space-bg">
      {!isMobile ? (
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="video-background"
        >
          <source src="https://arzfun.com/wp-content/uploads/2024/05/0518.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-particles opacity-60"></div>
      )}
      <div className="space-overlay"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: i % 3 === 0 ? '#9b87f5' : i % 3 === 1 ? '#FF84FF' : '#4169E1',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 mb-6 rounded-full glass-effect">
              <span className="text-arz-purple font-medium">FREE ADMIN</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 glow-text"
            >
              <span className="text-gradient">ARZFUN</span> - FREE ADMIN
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-white/80 mb-6 max-w-lg"
            >
              Забудь про скучные правила Аризоны. Езди, бегай, летай и даже читери с друзьями на нашем сервере!
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-white/70 mb-8 max-w-lg"
            >
              Да, да... Ты не ослышался, читери сколько хочешь, главное не мешай другим игрокам!
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="https://arzfun.com/link/download" 
                className="button-primary group"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download size={20} className="group-hover:animate-bounce-gentle" />
                  <span>Скачать</span>
                </span>
                <div className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://arzfun.com/link/support" 
                className="button-secondary group"
              >
                <span className="flex items-center justify-center gap-2">
                  <Sparkles size={20} className="text-arz-purple group-hover:animate-pulse-gentle" />
                  <span>Поддержка</span>
                </span>
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 text-white/60 text-sm"
            >
              ip: join.arzfun.com:7777
            </motion.div>
          </motion.div>
          
          {/* 3D Model or Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div className="relative">
              <img 
                src="https://arzfun.com/wp-content/uploads/2024/04/photo-banner-min.webp" 
                alt="ArzFun Character" 
                className="max-w-full w-auto h-auto max-h-[70vh] object-contain relative z-10"
              />
              <div className="absolute -inset-4 bg-gradient-radial from-arz-purple/30 to-transparent opacity-70 blur-xl animate-pulse-gentle -z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
