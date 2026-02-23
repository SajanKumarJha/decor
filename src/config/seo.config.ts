import type { Metadata } from "next";

export const SEO_METADATA: Metadata = {
  title: {
    default: "Interior Designers in Delhi NCR | VivaDecor",
    template: "%s | VivaDecor",
  },

  description:
    "Professional interior design company serving Delhi, Noida, Gurugram and Faridabad. Home, office, modular kitchen & luxury interiors.",

  keywords: [
    "interior designers in Delhi",
    "interior designers in Noida",
    "interior designers in Gurugram",
    "interior designers in Faridabad",
    "home interior design",
    "office interior design",
    "modular kitchen",
  ],

  authors: [{ name: "VivaDecor" }],
  creator: "VivaDecor",
  publisher: "VivaDecor",

  metadataBase: new URL("https://vivadecor.com"),

  alternates: {
    canonical: "https://vivadecor.com",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vivadecor.com",
    siteName: "VivaDecor",
    title: "Interior Designers in Delhi NCR | VivaDecor",
    description:
      "Top-rated interior designers serving Delhi, Noida, Gurugram & Faridabad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designers in Delhi NCR",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Interior Designers in Delhi NCR | VivaDecor",
    description:
      "Professional interior designers for home & office in Delhi NCR.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",

  verification: {
    google: "PASTE_CODE_FROM_SEARCH_CONSOLE",
  },

  category: "Interior Design",
  other: {
    contact: "+91 98765 43210",
    email: "info@yourbrand.com",
  },
};
