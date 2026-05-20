import { motion } from 'motion/react';
import { Code, Palette, Accessibility, Heart } from 'lucide-react';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';

export function About() {
  return (
    <Section id="sobre-mí" className="max-w-6xl mx-auto pt-32 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Sobre Mí
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
      </motion.div>

      <GlassCard>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-blue-100/80 leading-relaxed mb-6">
              Soy desarrolladora y creadora digital enfocada en construir experiencias modernas, accesibles y visualmente intuitivas.
            </p>
            <p className="text-lg text-blue-100/80 leading-relaxed mb-6">
              Mi trabajo combina desarrollo de aplicaciones, diseño UX/UI y accesibilidad digital, creando productos que conectan tecnología, inclusión y experiencia humana.
            </p>

            <p className="text-lg text-blue-100/80 leading-relaxed mb-6">
              Actualmente desarrollo proyectos enfocados en apps móviles, plataformas digitales y experiencias inclusivas, integrando también mi interés por Lengua de Señas Chilena (LSCh) y la educación digital.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'React Native', 'TypeScript', 'Figma', 'Tailwind CSS', 'Accesibilidad', 'LSCh'].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-sm text-blue-200/70">Desarrollo</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <Palette className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <p className="text-sm text-blue-200/70">Diseño UX/UI</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <Accessibility className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <p className="text-sm text-blue-200/70">Accesibilidad</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <p className="text-sm text-blue-200/70">Inclusión</p>
              </motion.div>
            </div>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
