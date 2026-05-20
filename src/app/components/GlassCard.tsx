import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
