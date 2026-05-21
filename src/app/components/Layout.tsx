import { motion } from 'motion/react';
import { Outlet, Link, useLocation } from 'react-router';
import { Sparkles, Heart } from 'lucide-react';
import { StarField } from './StarField';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Lumilingua', path: '/lumi' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-blue-950/80 text-white overflow-x-hidden">
      <StarField />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/30 border-b border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center">
          <div className="flex gap-10">
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    className={`${
                      isActive
                        ? 'text-blue-300'
                        : 'text-blue-100/50 hover:text-blue-200'
                    } transition-colors text-base font-light`}
                    whileHover={{ y: -1 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/[0.04] backdrop-blur-sm mt-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-sm text-blue-200/40 font-light">
              Diseñado con
            </span>
            <Heart className="w-4 h-4 text-pink-400/60" />
          </motion.div>
          <p className="text-xs text-blue-200/30 font-light">
            © 2026 Javiera Gutiérrez
          </p>
        </div>
      </footer>
    </div>
  );
}