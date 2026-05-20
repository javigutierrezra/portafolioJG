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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Proyectos Destacados
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Lumi Project */}
        <GlassCard delay={0.1}>
          <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 h-48 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl"
            />
            <Lightbulb className="relative w-20 h-20 text-blue-300" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-400" />
            Lumi / Lumilingua
          </h3>
          <p className="text-blue-100/70 mb-4 leading-relaxed">
            Plataforma educativa innovadora para el aprendizaje de Lengua de Señas Chilena (LSCh), combinando tecnología interactiva con metodologías inclusivas para crear una experiencia de aprendizaje accesible y envolvente.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300">Educación</span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300">LSCh</span>
            <span className="px-3 py-1 bg-pink-500/20 border border-pink-400/30 rounded-full text-xs text-pink-300">Inclusión</span>
          </div>
        </GlassCard>

        {/* Mobile Apps */}
        <GlassCard delay={0.2}>
          <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 h-48 flex items-center justify-center">
            <Smartphone className="relative w-20 h-20 text-purple-300" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-purple-400" />
            Desarrollo de Apps Móviles
          </h3>
          <p className="text-blue-100/70 mb-4 leading-relaxed">
            Creación de aplicaciones móviles nativas y multiplataforma con enfoque en rendimiento, usabilidad y diseño intuitivo. Experiencias optimizadas para iOS y Android que conectan con los usuarios.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300">React Native</span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300">iOS</span>
            <span className="px-3 py-1 bg-pink-500/20 border border-pink-400/30 rounded-full text-xs text-pink-300">Android</span>
          </div>
        </GlassCard>

        {/* Accessibility */}
        <GlassCard delay={0.3}>
          <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 h-48 flex items-center justify-center">
            <Accessibility className="relative w-20 h-20 text-green-300" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Accessibility className="w-6 h-6 text-green-400" />
            Accesibilidad Digital
          </h3>
          <p className="text-blue-100/70 mb-4 leading-relaxed">
            Diseño y desarrollo de experiencias digitales inclusivas que cumplen con estándares WCAG. Auditorías de accesibilidad, implementación de mejores prácticas y consultoría para hacer la web accesible para todos.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs text-green-300">WCAG</span>
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300">A11y</span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300">Inclusión</span>
          </div>
        </GlassCard>

        {/* UX/UI Projects */}
        <GlassCard delay={0.4}>
          <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-pink-500/20 to-orange-500/20 h-48 flex items-center justify-center">
            <Palette className="relative w-20 h-20 text-pink-300" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Palette className="w-6 h-6 text-pink-400" />
            Proyectos UX/UI
          </h3>
          <p className="text-blue-100/70 mb-4 leading-relaxed">
            Diseño de interfaces centradas en el usuario, desde investigación y wireframes hasta prototipos de alta fidelidad. Creación de sistemas de diseño escalables y experiencias visuales memorables.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-pink-500/20 border border-pink-400/30 rounded-full text-xs text-pink-300">Figma</span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300">Prototipos</span>
            <span className="px-3 py-1 bg-orange-500/20 border border-orange-400/30 rounded-full text-xs text-orange-300">Design Systems</span>
          </div>
        </GlassCard>

        {/* Opero */}
        <GlassCard delay={0.5}>
          <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 h-48 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-indigo-500/30 blur-2xl"
            />
            <LayoutDashboard className="relative w-20 h-20 text-violet-300" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6 text-violet-400" />
            Opero
          </h3>
          <p className="text-blue-100/70 mb-4 leading-relaxed">
            Plataforma SaaS enfocada en optimizar procesos internos, solicitudes y gestión operativa mediante una experiencia moderna, intuitiva y visual. Diseñada para ayudar a empresas a centralizar tareas, seguimiento y organización en un solo lugar.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-violet-500/20 border border-violet-400/30 rounded-full text-xs text-violet-300">SaaS</span>
            <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-xs text-indigo-300">UX/UI</span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300">Gestión Operativa</span>
          </div>
        </GlassCard>
      </div>

      {/* Web Development */}
      <GlassCard delay={0.6}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 h-64 flex items-center justify-center">
            <Globe className="relative w-24 h-24 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <Globe className="w-6 h-6 text-cyan-400" />
              Desarrollo de Páginas Web
            </h3>
            <p className="text-blue-100/70 mb-4 leading-relaxed">
              Creación de sitios web modernos, responsivos y optimizados. Desde landing pages impactantes hasta aplicaciones web complejas, utilizando las últimas tecnologías y mejores prácticas de desarrollo frontend.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300">React</span>
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-300">Next.js</span>
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300">TypeScript</span>
              <span className="px-3 py-1 bg-pink-500/20 border border-pink-400/30 rounded-full text-xs text-pink-300">Tailwind CSS</span>
            </div>
            <ul className="space-y-2 text-blue-100/70">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✦</span>
                <span>Diseño responsivo y mobile-first</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✦</span>
                <span>Optimización de rendimiento y SEO</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✦</span>
                <span>Integración con APIs y servicios backend</span>
              </li>
            </ul>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
