import Header from "@/components/Header";
import ClientProvider from "@/components/ClientProvider";
import PromptInput from "@/components/PromptInput";
import '../styles/globals.css';

export const metadata = {
  title: 'AI art Gallery',
  description: 'Generated by WideLight powered by Dalles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>

          {/* Header */}
          <Header/>
          {/* Prompt Input */}
          <PromptInput></PromptInput>
          
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
