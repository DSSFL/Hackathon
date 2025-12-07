import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'XPulse - Real-time Narrative Intelligence',
  description: 'The vital signs of what\'s happening on X',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-x-black text-x-white antialiased">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-[68px] xl:ml-[275px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
