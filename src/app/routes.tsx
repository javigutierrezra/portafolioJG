import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Lumi } from './pages/Lumi';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'lumi', Component: Lumi },
      { path: 'proyectos', Component: Projects },
      { path: 'contacto', Component: Contact },
    ],
  },
]);