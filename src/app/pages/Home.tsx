import { motion } from 'motion/react';
import { Section } from '../components/Section';
import { Link } from 'react-router';

export function Home() {
  return (
    <Section id="inicio" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-normal text-blue-100/70 tracking-wide">
            Javiera Gutiérrez
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium mb-16 bg-gradient-to-r from-blue-300 via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight"
        >
          Diseño experiencias digitales inclusivas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-blue-100/70 mb-16 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Apps, plataformas y productos digitales accesibles, modernos y visualmente intuitivos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap gap-5 justify-center"
        >
          <Link to="/proyectos">
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(96, 165, 250, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-500/90 to-purple-500/90 rounded-full font-light shadow-lg shadow-blue-500/20 text-white"
            >
              Ver Proyectos
            </motion.div>
          </Link>
          <Link to="/contacto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-10 py-4 backdrop-blur-sm bg-white/[0.05] border border-white/[0.15] rounded-full font-light hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
            >
              Contacto
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
