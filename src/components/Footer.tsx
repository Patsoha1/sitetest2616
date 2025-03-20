
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="relative bg-space-bg pt-16 pb-8 overflow-hidden">
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
        <div className="absolute inset-0 bg-particles opacity-30"></div>
      )}
      <div className="space-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="text-white font-orbitron text-2xl font-bold">
                <span className="text-gradient">ARZ</span>
                <span className="text-white">FUN</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6">
              Сервер с полной свободой действий и бесплатным админом.
            </p>
            <SocialLinks />
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium text-lg mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li><a href="https://arzfun.com/link/features" className="text-white/70 hover:text-white transition-colors duration-300">Особенности</a></li>
              <li><a href="https://arzfun.com/link/rules" className="text-white/70 hover:text-white transition-colors duration-300">Правила</a></li>
              <li><a href="https://arzfun.com/link/news" className="text-white/70 hover:text-white transition-colors duration-300">Новости</a></li>
              <li><a href="https://arzfun.com/link/top" className="text-white/70 hover:text-white transition-colors duration-300">Топ 100</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium text-lg mb-6">Сообщество</h3>
            <ul className="space-y-3">
              <li><a href="https://arzfun.com/link/forum" className="text-white/70 hover:text-white transition-colors duration-300">Форум</a></li>
              <li><a href="https://arzfun.com/link/donate" className="text-white/70 hover:text-white transition-colors duration-300">Донат</a></li>
              <li><a href="https://arzfun.com/link/support" className="text-white/70 hover:text-white transition-colors duration-300">Поддержка</a></li>
              <li><a href="https://arzfun.com/link/contact" className="text-white/70 hover:text-white transition-colors duration-300">Контакты</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium text-lg mb-6">Присоединяйся</h3>
            <div className="glass-effect p-6 rounded-xl">
              <p className="text-white/90 mb-4">Подключайся к серверу прямо сейчас!</p>
              <div className="text-arz-pink font-mono text-sm bg-black/30 p-3 rounded mb-4">
                ip: join.arzfun.com:7777
              </div>
              <a 
                href="https://arzfun.com/link/download" 
                className="button-primary w-full flex justify-center"
              >
                Скачать
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} ARZFUN. Все права защищены.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://arzfun.com/link/terms" className="text-white/50 text-sm hover:text-white transition-colors duration-300">Условия</a>
            <a href="https://arzfun.com/link/privacy" className="text-white/50 text-sm hover:text-white transition-colors duration-300">Конфиденциальность</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
