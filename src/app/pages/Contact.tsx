import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';

export function Contact() {
  return (
    <Section id="contacto" className="max-w-4xl mx-auto pt-32 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Conectemos
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
      </motion.div>

      <GlassCard>
        <div className="text-center mb-8">
          <p className="text-lg text-blue-100/80 leading-relaxed mb-6">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar en algo increíble? Me encantaría escucharte y trabajar juntos para crear experiencias digitales extraordinarias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.a
            href="mailto:javieragutierrez.dev@gmail.com"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-3 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
          >
            <Mail className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="text-sm text-blue-200/70">Email</span>
          </motion.a>

          <motion.a
            href="https://github.com/javigutierrezra"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-3 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
          >
            <Github className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
            <span className="text-sm text-blue-200/70">GitHub</span>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/javiera-gutierrez-"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-3 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
          >
            <Linkedin className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors" />
            <span className="text-sm text-blue-200/70">LinkedIn</span>
          </motion.a>
        </div>
      </GlassCard>
    </Section>
  );
}
