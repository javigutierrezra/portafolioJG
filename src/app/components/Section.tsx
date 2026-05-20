import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </section>
  );
}
