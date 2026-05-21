import { motion } from 'motion/react';
import {
  Sparkles,
  Smartphone,
  Palette,
  Globe,
  Lightbulb,
  Accessibility,
  LayoutDashboard
} from 'lucide-react';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';

export function Projects() {
  return (
    <Section id="proyectos" className="max-w-7xl mx-auto pt-32 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          Proyectos
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-blue-400/50 to-purple-400/50 mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Lumi Project */}
        <GlassCard delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 h-56 flex items-center justify-center border border-blue-400/10">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
            />
            <Lightbulb className="relative w-16 h-16 text-blue-300/80" />
          </div>
          <h3 className="text-2xl font-medium mb-4 text-blue-100">
            Lumilingua
          </h3>
          <p className="text-blue-100/60 mb-6 leading-relaxed font-light">
            Plataforma educativa para el aprendizaje de Lengua de Señas Chilena. Combina tecnología interactiva con metodologías inclusivas para crear experiencias de aprendizaje accesibles.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-xs text-blue-300/90 font-light">Educación Digital</span>
            <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90 font-light">LSCh</span>
            <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-400/20 rounded-full text-xs text-pink-300/90 font-light">Accesibilidad</span>
          </div>
        </GlassCard>

        {/* Opero */}
        <GlassCard delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 h-56 flex items-center justify-center border border-violet-400/10">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 blur-3xl"
            />
            <LayoutDashboard className="relative w-16 h-16 text-violet-300/80" />
          </div>
          <h3 className="text-2xl font-medium mb-4 text-blue-100">
            Opero
          </h3>
          <p className="text-blue-100/60 mb-6 leading-relaxed font-light">
            Plataforma SaaS para optimizar procesos internos, solicitudes y gestión operativa. Experiencia moderna e intuitiva que centraliza tareas y organización empresarial.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-400/20 rounded-full text-xs text-violet-300/90 font-light">SaaS</span>
            <span className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-xs text-indigo-300/90 font-light">Gestión Operativa</span>
            <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90 font-light">UX/UI</span>
          </div>
        </GlassCard>

        {/* Mobile Apps */}
        <GlassCard delay={0.3}>
          <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 h-56 flex items-center justify-center border border-purple-400/10">
            <Smartphone className="relative w-16 h-16 text-purple-300/80" />
          </div>
          <h3 className="text-2xl font-medium mb-4 text-blue-100">
            Apps Móviles
          </h3>
          <p className="text-blue-100/60 mb-6 leading-relaxed font-light">
            Desarrollo de aplicaciones nativas y multiplataforma con enfoque en rendimiento y diseño intuitivo. Experiencias optimizadas para iOS y Android.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-xs text-blue-300/90 font-light">React Native</span>
            <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90 font-light">iOS & Android</span>
            <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-400/20 rounded-full text-xs text-pink-300/90 font-light">UX</span>
          </div>
        </GlassCard>

        {/* Accesibilidad */}
        <GlassCard delay={0.4}>
          <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 h-56 flex items-center justify-center border border-green-400/10">
            <Accessibility className="relative w-16 h-16 text-green-300/80" />
          </div>
          <h3 className="text-2xl font-medium mb-4 text-blue-100">
            Accesibilidad Digital
          </h3>
          <p className="text-blue-100/60 mb-6 leading-relaxed font-light">
            Experiencias digitales inclusivas con estándares WCAG. Auditorías, implementación de mejores prácticas y consultoría para productos accesibles.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-green-500/10 border border-green-400/20 rounded-full text-xs text-green-300/90 font-light">WCAG</span>
            <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-xs text-blue-300/90 font-light">A11y</span>
            <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90 font-light">Inclusión</span>
          </div>
        </GlassCard>
      </div>

      {/* Diseño UX/UI */}
      <GlassCard delay={0.5}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 h-72 flex items-center justify-center border border-pink-400/10">
            <Palette className="relative w-20 h-20 text-pink-300/80" />
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-6 text-blue-100">
              Diseño de Producto
            </h3>
            <p className="text-blue-100/60 mb-8 leading-relaxed font-light">
              Interfaces centradas en el usuario desde investigación hasta prototipos de alta fidelidad. Sistemas de diseño escalables y experiencias visuales modernas.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-400/20 rounded-full text-xs text-pink-300/90 font-light">Figma</span>
              <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90 font-light">Prototipos</span>
              <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-400/20 rounded-full text-xs text-orange-300/90 font-light">Design Systems</span>
              <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-xs text-blue-300/90 font-light">UX Research</span>
            </div>
            <ul className="space-y-3 text-blue-100/60 font-light">
              <li className="flex items-start gap-3">
                <span className="text-blue-400/70 mt-1">—</span>
                <span>Investigación y arquitectura de información</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400/70 mt-1">—</span>
                <span>Diseño de interfaces y sistemas escalables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400/70 mt-1">—</span>
                <span>Validación con usuarios y testing</span>
              </li>
            </ul>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}