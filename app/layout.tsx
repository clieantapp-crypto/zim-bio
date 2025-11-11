import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bio Links App",
  description: "Bio Links app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar">
      <head>
        <meta
          name="keywords"
          content="باقات زين, شحن رصيد زين, عروض زين, عروض زين للانترنت, عروض زين الكويت, zain kw, رصيد زين, باقات زين للانترنت, عروض زين نت, تعبئة رصيد زين, باقات زين مسبقة الدفع, شريحة زين, شركة زين الكويت, zain net package, باقات الإنترنت زين, عروض زين مسبقة الدفع, شحن زين, نت زين, شركة زين, عروض نت زين, طلب شريحة زين, عروض زين الشهرية, باقات زين للانترنت اللامحدود, انترنت زين"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17690894312"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17690894312');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
