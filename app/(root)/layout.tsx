import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/shared/Header'
import Bottombar from '@/components/shared/Bottombar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VassalloConstruction',
  description: 'The Best Construction company for your unique needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#283132]`}>
        <header>
          <Header />
        </header>
        <main>
          <section>
            <div className="w-full">{children}</div>
          </section>
        </main>
        <footer>
          <Bottombar />
        </footer>
      </body>
    </html>
  );
}
