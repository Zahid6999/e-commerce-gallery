import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { interTight, lato } from '@/utils/font';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} ${lato.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
