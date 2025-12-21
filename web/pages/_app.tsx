import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${inter.variable} ${jetbrains.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    )
}
