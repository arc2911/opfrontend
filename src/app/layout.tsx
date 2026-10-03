import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OpenProject AI Copilot — PM Dashboard',
  description:
    'AI-assisted project intelligence, delivery health monitoring, and exception resolution with strict PM write-back confirmation to OpenProject.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
