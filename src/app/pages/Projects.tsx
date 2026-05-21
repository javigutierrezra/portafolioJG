import { motion } from 'motion/react';
import {
  Accessibility,
  CircleDot,
  LayoutDashboard,
  Lightbulb,
  Truck,
} from 'lucide-react';

import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';

import lumiLogo from '../assets/lumi.jpg';
import emeihLogo from '../assets/emeihtransportes.jpg';
import equeliLogo from '../assets/equeli.jpg';

export function Projects() {
  return (
    <Section
      id="proyectos"
      className="max-w-7xl mx-auto pt-32 min-h-screen"
    >
      {/* TITLE */}
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

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LUMILINGUA */}
        <GlassCard delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 h-64 flex items-center justify-center border border-blue-400/10">

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

            <img
              src={lumiLogo}
              alt="Lumilingua"
              className="relative w-full h-full object-cover rounded-2x1"
            />
          </div>

          <h3 className="text-2xl font-medium mb-4 text-blue-100">
            Lumilingua 
          </h3>

          <p className="text-blue-100/60 mb-6 leading-relaxed font-light">
            Plataforma educativa para el aprendizaje de Lengua de Señas Chilena (LSCh), enfocada en accesibilidad, inclusión y experiencias de aprendizaje visuales e interactivas.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-xs text-blue-300/90">
              Educación Digital
            </span>

            <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90">
              LSCh
            </span>

            <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-400/20 rounded-full text-xs text-pink-300/90">
              Accesibilidad
            </span>
          </div>
        </GlassCard>

        {/* SOLOVERDE */}
        <GlassCard delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 h-64 flex items-center justify-center border border-violet-400/10">

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

            <LayoutDashboard className="relative w-16 h-16 text-violet-300/80"  
            />
          </div>

          <h3 className="text-2xl font-medium mb-4 text-blue-100">
            SOLOVERDE
          </h3>

          <p className="text-blue-100/60 mb-6 leading-relaxed font-light">
            Desarrollo de funcionalidades web internas para optimizar solicitudes, flujos operativos y procesos digitales dentro de una plataforma empresarial.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-400/20 rounded-full text-xs text-violet-300/90">
              Apps empresariales
            </span>

            <span className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-xs text-indigo-300/90">
              UX operacional
            </span>

            <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90">
              Automatización
            </span>
          </div>
        </GlassCard>

        {/* OPERO */}
        <GlassCard delay={0.3}>
          <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 h-64 flex items-center justify-center border border-violet-400/10">

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

            <LayoutDashboard className="relative w-16 h-16 text-violet-300/80"  
            />

          </div>

          <h3 className="text-2xl font-medium mb-4 text-blue-100">
            Opero
          </h3>

          <p className="text-blue-100/60 mb-6 leading-relaxed font-light">
            Plataforma SaaS enfocada en organización operativa, solicitudes y optimización de procesos internos mediante una experiencia moderna y centralizada.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-400/20 rounded-full text-xs text-violet-300/90">
              SaaS
            </span>

            <span className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-xs text-indigo-300/90">
              Gestión Operativa
            </span>

            <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90">
              UX/UI
            </span>
          </div>
        </GlassCard>

        {/* EMEIH */}
        <GlassCard delay={0.4}>
          <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-orange-500/10 to-pink-500/10 h-64 flex items-center justify-center border border-orange-400/10">

            <img
            src={emeihLogo} 
            alt="EMEIH Transportes"
            className="relative w-full h-full object-cover rounded-2x1"/>
          </div>

          <h3 className="text-2xl font-medium mb-4 text-blue-100">
            EMEIH TRANSPORTES 
          </h3>

          <p className="text-blue-100/60 mb-6 leading-relaxed font-light">
            Plataforma web tipo marketplace enfocada en conexión de materiales de construcción y servicios de transporte y logística.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-400/20 rounded-full text-xs text-orange-300/90">
              Desarrollo Web
            </span>

            <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-400/20 rounded-full text-xs text-pink-300/90">
              Marketplace
            </span>

            <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90">
              UX/UI
            </span>
          </div>
        </GlassCard>

        {/* EQUELI */}
        <GlassCard delay={0.5}>
          <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 h-64 flex items-center justify-center border border-purple-400/10">

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
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl"
            />      
            <img
              src={equeliLogo}
              alt="Equeli"
              className="relative w-full h-full object-cover rounded-2x1"/>
          </div>

          <h3 className="text-2xl font-medium mb-4 text-blue-100">
            Equeli 
          </h3>

          <p className="text-blue-100/60 mb-6 leading-relaxed font-light">
            Plataforma SaaS enfocada en digitalización y optimización de procesos dentro del ecosistema ecuestre mediante herramientas modernas y experiencias intuitivas.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90">
              SaaS
            </span>

            <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-xs text-blue-300/90">
              Product Design
            </span>

            <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-400/20 rounded-full text-xs text-pink-300/90">
              UX/UI
            </span>
          </div>
        </GlassCard>

        {/* ACCESIBILIDAD */}
        <GlassCard delay={0.6}>
          <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 h-64 flex items-center justify-center border border-green-400/10">

            <Accessibility className="relative w-16 h-16 text-green-300/80" />
          </div>

          <h3 className="text-2xl font-medium mb-4 text-blue-100">
            Accesibilidad Digital
          </h3>

          <p className="text-blue-100/60 mb-6 leading-relaxed font-light">
            Diseño de experiencias digitales inclusivas con enfoque en accesibilidad web, WCAG y productos centrados en usuarios reales.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-green-500/10 border border-green-400/20 rounded-full text-xs text-green-300/90">
              WCAG
            </span>

            <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-xs text-blue-300/90">
              A11y
            </span>

            <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-300/90">
              Inclusión
            </span>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}