import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';

export function Contact() {
  return (
    <Section id="contacto" className="max-w-4xl mx-auto pt-32 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          Contacto
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-blue-400/50 to-purple-400/50 mx-auto" />
      </motion.div>

      <GlassCard>
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed mb-8 font-light">
            Me interesa crear experiencias digitales modernas, accesibles y visuales.
          </p>
          <p className="text-lg text-blue-100/60 leading-relaxed font-light">
            Si quieres colaborar o crear algo juntos, conversemos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.a
            href="mailto:tu@email.com"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-4 p-8 backdrop-blur-sm bg-white/[0.02] border border-white/[0.08] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 group"
          >
            <Mail className="w-7 h-7 text-blue-400/80 group-hover:text-blue-300 transition-colors" />
            <span className="text-sm text-blue-200/60 font-light">Email</span>
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-4 p-8 backdrop-blur-sm bg-white/[0.02] border border-white/[0.08] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 group"
          >
            <Github className="w-7 h-7 text-purple-400/80 group-hover:text-purple-300 transition-colors" />
            <span className="text-sm text-blue-200/60 font-light">GitHub</span>
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-4 p-8 backdrop-blur-sm bg-white/[0.02] border border-white/[0.08] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 group"
          >
            <Linkedin className="w-7 h-7 text-pink-400/80 group-hover:text-pink-300 transition-colors" />
            <span className="text-sm text-blue-200/60 font-light">LinkedIn</span>
          </motion.a>
        </div>
      </GlassCard>
    </Section>
  );
}
