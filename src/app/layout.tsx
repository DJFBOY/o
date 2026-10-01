import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/constants";
import { organizationJsonLd } from "@/lib/seo";
import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";
import { AppwritePing } from "@/components/AppwritePing";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s — ${SITE.name}` },
  description: SITE.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper font-sans text-ink">
        <FirebaseAnalytics />
        <AppwritePing />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
