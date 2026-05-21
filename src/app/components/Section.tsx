import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 px-6 md:px-16 lg:px-32 ${className}`}>
      {children}
    </section>
  );
}