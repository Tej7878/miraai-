/* eslint-disable no-unused-vars */
import React from 'react';

/**
 * CyberLaserBorder
 * Clean static border with subtle ambient glassmorphism glow (rotating laser removed).
 */
export default function CyberLaserBorder({
  children,
  className = '',
  borderRadius = '24px',
  ...props
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] ${className}`}
      style={{ borderRadius }}
    >
      {children}
    </div>
  );
}
