import React from 'react';
import type { Metadata, Viewport } from 'next';
import SmoothScroll from '@/components/wallnut/SmoothScroll';
import '../styles/index.css';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: 'Premium Interior, Exterior & Civil Execution | SAI AAKANKSHYA ASSOCIATES',
  description: "SAI AAKANKSHYA ASSOCIATES is a Bhubaneswar-based execution and infrastructure solutions company delivering premium interior, exterior, ceiling, cladding, and civil construction projects across India.",
  icons: {
    icon: [
      { url: 'https://cdn.prod.website-files.com/66c70111b2a812bad4379fb4/677d3933f78bfe4485bc6bfa_Favicon.jpg', type: 'image/jpeg' }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}