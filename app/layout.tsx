import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ConvexAuthProvider from "@/components/providers/convex-auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "notion-clone",
  description: "notion-clone fast notes and work day ",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/notion.svg",
        href: "/notion.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/notion-dark.svg",
        href: "/notion-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="notion-clone-theme"
          >
            {children}
          </ThemeProvider>
        </ConvexAuthProvider>
      </body>
    </html>
  );
}
