import { motion } from 'motion/react';
import { Outlet, Link, useLocation } from 'react-router';
import { Sparkles, Heart } from 'lucide-react';
import { StarField } from './StarField';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre mí', path: '/sobre-mi' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white overflow-x-hidden">
      <StarField />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-950/50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Javiera Gutiérrez
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex gap-8">
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    className={`${
                      isActive
                        ? 'text-blue-400'
                        : 'text-blue-100/70 hover:text-blue-400'
                    } transition-colors`}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
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
      <footer className="relative py-12 px-6 border-t border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-200/60">
              Diseñado y desarrollado con
            </span>
            <Heart className="w-5 h-5 text-pink-400" />
          </motion.div>
          <p className="text-sm text-blue-200/40">
            © 2026 - Creando experiencias digitales inclusivas y accesibles
          </p>
        </div>
      </footer>
    </div>
  );
}
