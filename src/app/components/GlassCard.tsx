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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 shadow-xl hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 ${className}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/[0.02] to-purple-500/[0.02]" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
