import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NOVA - AI Mentor',
  description: 'Futuristic Mentor AI - Clarity over noise',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}