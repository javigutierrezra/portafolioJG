import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Section } from '../components/Section';
import { Link } from 'react-router';

export function Home() {
  return (
    <Section id="inicio" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Sparkles className="relative w-20 h-20 md:w-24 md:h-24 text-blue-400 mx-auto" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Desarrolladora Creativa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-blue-100/80 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          Diseño experiencias digitales accesibles, inclusivas y visualmente modernas
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-blue-200/60 mb-12 max-w-2xl mx-auto"
        >
          Especializada en UX/UI, desarrollo de apps móviles, accesibilidad digital y Lengua de Señas Chilena
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link to="/proyectos">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(96, 165, 250, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium shadow-lg shadow-blue-500/30"
            >
              Ver Proyectos
            </motion.div>
          </Link>
          <Link to="/contacto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              Contáctame
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
