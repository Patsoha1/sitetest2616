
import React from 'react';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className }: SocialLinksProps) => {
  const socialLinks = [
    { name: 'Телеграм', icon: 'telegram.svg', url: 'https://arzfun.com/link/telegram' },
    { name: 'ВКонтакте', icon: 'vk.svg', url: 'https://arzfun.com/link/vk' },
    { name: 'TikTok', icon: 'tiktok.svg', url: 'https://arzfun.com/link/tiktok' },
    { name: 'YouTube', icon: 'youtube.svg', url: 'https://arzfun.com/link/youtube' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <motion.div 
      className={`flex items-center gap-6 ${className || ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          className="group relative text-white/80 hover:text-white transition-colors duration-300"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 } 
          }}
        >
          <span className="sr-only">{link.name}</span>
          
          {/* Custom SVG icons */}
          {link.name === 'Телеграм' && (
            <svg 
              className="w-7 h-7 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.97 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.27-2.03-.49-.82-.27-1.47-.42-1.41-.88.03-.24.29-.48.77-.74 3.03-1.31 5.05-2.18 6.08-2.62 2.9-1.23 3.5-1.45 3.89-1.46.09 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
            </svg>
          )}
          
          {link.name === 'ВКонтакте' && (
            <svg 
              className="w-7 h-7 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          )}
          
          {link.name === 'TikTok' && (
            <svg 
              className="w-7 h-7 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          )}
          
          {link.name === 'YouTube' && (
            <svg 
              className="w-7 h-7 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          )}
          
          <div className="absolute -inset-2 rounded-full bg-arz-purple/0 group-hover:bg-arz-purple/10 -z-10 transition-colors duration-300"></div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
