import React from 'react';

export default function SectionLabel({ children }) {
  return (
    <span className="inline-block text-secondary font-body font-semibold text-sm tracking-widest uppercase mb-3">
      {children}
    </span>
  );
}