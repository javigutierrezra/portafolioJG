import { motion } from 'motion/react';
import { Lightbulb, Users, BookOpen, Heart } from 'lucide-react';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';

export function Lumi() {
  return (
    <Section id="lumilingua" className="max-w-6xl mx-auto pt-32 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <Lightbulb className="w-10 h-10 text-blue-400/80" />
          <h2 className="text-5xl md:text-6xl font-medium bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Lumilingua
          </h2>
        </div>
        <div className="w-16 h-px bg-gradient-to-r from-blue-400/50 to-purple-400/50 mx-auto mb-8" />
        <p className="text-lg text-blue-200/60 max-w-3xl mx-auto font-light">
          Plataforma educativa para el aprendizaje de Lengua de Señas Chilena
        </p>
      </motion.div>

      {/* Main Description */}
      <GlassCard delay={0.1}>
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 h-64 flex items-center justify-center mb-8"
          >
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
              className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl"
            />
            <Lightbulb className="relative w-32 h-32 text-blue-300" />
          </motion.div>

          <h3 className="text-3xl font-medium mb-10 text-center text-blue-100">
            Una nueva forma de aprender LSCh
          </h3>

          <p className="text-lg text-blue-100/70 leading-relaxed mb-8 font-light">
            Lumilingua es una plataforma educativa diseñada para hacer el aprendizaje de Lengua de Señas Chilena (LSCh) accesible, interactivo y envolvente para todos.
          </p>

          <p className="text-lg text-blue-100/70 leading-relaxed mb-8 font-light">
            Combinando tecnología moderna con metodologías inclusivas, Lumilingua crea una experiencia de aprendizaje que va más allá de la enseñanza tradicional, construyendo puentes reales entre comunidades sordas y oyentes.
          </p>

          <p className="text-lg text-blue-100/70 leading-relaxed font-light">
            El proyecto integra desarrollo de aplicaciones, diseño UX/UI centrado en accesibilidad, y un profundo compromiso con la inclusión digital y social.
          </p>
        </div>
      </GlassCard>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <GlassCard delay={0.2}>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-4 bg-blue-500/20 rounded-2xl">
                <BookOpen className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4 text-blue-100">Aprendizaje Interactivo</h4>
            <p className="text-blue-100/60 leading-relaxed font-light">
              Metodología dinámica con ejercicios prácticos, videos explicativos y contenido visual que facilita el aprendizaje progresivo.
            </p>
          </div>
        </GlassCard>

        <GlassCard delay={0.3}>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-4 bg-purple-500/20 rounded-2xl">
                <Users className="w-10 h-10 text-purple-400" />
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4 text-blue-100">Comunidad Inclusiva</h4>
            <p className="text-blue-100/60 leading-relaxed font-light">
              Construyendo puentes entre comunidades sordas y oyentes, promoviendo la inclusión social y el respeto cultural.
            </p>
          </div>
        </GlassCard>

        <GlassCard delay={0.4}>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-4 bg-pink-500/20 rounded-2xl">
                <Heart className="w-10 h-10 text-pink-400" />
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4 text-blue-100">Accesibilidad Universal</h4>
            <p className="text-blue-100/60 leading-relaxed font-light">
              Diseñado desde cero con estándares de accesibilidad, garantizando una experiencia inclusiva para todos los usuarios.
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Technologies & Approach */}
      <GlassCard delay={0.5} className="mt-12">
        <h3 className="text-2xl font-medium mb-10 text-blue-100">
          Tecnología & Enfoque
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-6 text-blue-300/90">Desarrollo</h4>
            <ul className="space-y-4 text-blue-100/60 font-light">
              <li className="flex items-start gap-3">
                <span className="text-blue-400/60 mt-1">—</span>
                <span>Aplicación móvil multiplataforma con React Native</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400/60 mt-1">—</span>
                <span>Plataforma web responsiva y optimizada</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400/60 mt-1">—</span>
                <span>Backend escalable y gestión de contenido educativo</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 text-purple-300/90">Diseño UX/UI</h4>
            <ul className="space-y-4 text-blue-100/60 font-light">
              <li className="flex items-start gap-3">
                <span className="text-purple-400/60 mt-1">—</span>
                <span>Interfaz intuitiva centrada en el usuario</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400/60 mt-1">—</span>
                <span>Sistema de diseño consistente y accesible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400/60 mt-1">—</span>
                <span>Prototipado iterativo basado en feedback real</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-3 justify-center">
            {['React Native', 'TypeScript', 'Figma', 'Node.js', 'Accesibilidad WCAG', 'UX Research', 'LSCh'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <div className="backdrop-blur-sm bg-gradient-to-r from-blue-500/[0.05] to-purple-500/[0.05] border border-blue-400/10 rounded-3xl p-12">
          <p className="text-xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto font-light italic">
            "Lumilingua no es solo una aplicación, es un compromiso con la inclusión, la accesibilidad y la construcción de una sociedad más conectada y empática."
          </p>
        </div>
      </motion.div>
    </Section>
  );
}

