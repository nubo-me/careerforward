import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { FirebaseAnalyticsProvider } from './components/FirebaseAnalyticsProvider';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "転職エージェント比較と成功ガイド｜CareerForward",
  description: "30代〜40代ホワイトカラー向け転職情報サイト。現役キャリアコンサルタントが監修し、実例ベースのノウハウで失敗しない転職をサポート。無料相談受付中。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <head>
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
  <meta name="google-site-verification" content="OZsbyrb_bv_IxzslODehf7AZLpWlQVfg8SV5EdiaP3U" />
  <meta name="google-adsense-account" content="ca-pub-4321998223277477" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
  <FirebaseAnalyticsProvider />
        {children}
      </body>
    </html>
  );
}