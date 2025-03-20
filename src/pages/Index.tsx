
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Sparkles } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = 'ARZFUN - FREE ADMIN';
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-space-bg text-white font-inter">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section id="features" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-particles opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block mb-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-arz-purple">
                <Sparkles size={16} className="mr-2" />
                <span>Преимущества</span>
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-orbitron font-bold glow-text mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
            >
              Почему выбирают <span className="text-gradient">ARZFUN</span>
            </motion.h2>
            
            <motion.p 
              className="text-white/70 max-w-2xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
            >
              Уникальный сервер, где каждый может насладиться полной свободой без ограничений
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Полная свобода",
                description: "Езди, бегай, летай и делай всё, что захочешь. Никаких ограничений!",
                icon: "🚀",
                delay: 0.1
              },
              {
                title: "Бесплатный админ",
                description: "Получи админские права абсолютно бесплатно и управляй игровым процессом.",
                icon: "👑",
                delay: 0.2
              },
              {
                title: "Дружелюбное сообщество",
                description: "Тысячи игроков каждый день наслаждаются игрой вместе на нашем сервере.",
                icon: "🤝",
                delay: 0.3
              },
              {
                title: "Без читеров",
                description: "Наша защита от нечестной игры обеспечивает комфортный игровой опыт.",
                icon: "🛡️",
                delay: 0.4
              },
              {
                title: "Регулярные обновления",
                description: "Мы постоянно добавляем новый контент и улучшаем существующий.",
                icon: "🔄",
                delay: 0.5
              },
              {
                title: "Быстрая техподдержка",
                description: "Наша команда поддержки всегда готова помочь с любыми вопросами.",
                icon: "⚡",
                delay: 0.6
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="glass-effect rounded-xl p-6 group hover:bg-white/10 transition-colors duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: feature.delay, ease: [0.25, 0.1, 0.25, 1.0] }
                  }
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-arz-purple/20 mb-4 text-xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-arz-purple/30 to-arz-pink/30 opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                  Готов присоединиться к <span className="text-gradient">ARZFUN</span>?
                </h2>
                <p className="text-white/70 mb-6 max-w-2xl">
                  Не упусти возможность стать частью самого свободного сервера Аризоны. Скачивай клиент прямо сейчас!
                </p>
                <div className="text-arz-pink font-mono text-sm md:text-base bg-black/30 p-3 rounded mb-6 md:mb-0 inline-block">
                  ip: join.arzfun.com:7777
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://arzfun.com/link/download" 
                  className="button-primary min-w-[170px] text-center"
                >
                  Скачать клиент
                </a>
                <a 
                  href="https://arzfun.com/link/support" 
                  className="button-secondary min-w-[170px] text-center"
                >
                  Поддержка
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
