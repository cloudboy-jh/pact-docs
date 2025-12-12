import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Pact',
    default: 'Pact - Your Portable Dev Identity',
  },
  description: 'Shell, editor, AI prefs, themes — one kit, any machine. Edit in the browser, sync from terminal.',
  keywords: ['dotfiles', 'developer tools', 'configuration', 'shell', 'editor', 'themes', 'AI', 'CLI'],
  authors: [{ name: 'Pact' }],
  openGraph: {
    title: 'Pact - Your Portable Dev Identity',
    description: 'Shell, editor, AI prefs, themes — one kit, any machine.',
    type: 'website',
    images: ['/pact-readme-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pact - Your Portable Dev Identity',
    description: 'Shell, editor, AI prefs, themes — one kit, any machine.',
  },
  icons: {
    icon: '/pact-logo.png',
    apple: '/pact-logo.png',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jetbrainsMono.variable}`} 
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen antialiased">
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            enableSystem: true,
            attribute: 'class',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
