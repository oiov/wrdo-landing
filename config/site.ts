import { SiteConfig } from "@/types/siteConfig";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";

const OPEN_SOURCE_URL = "https://github.com/oiov";

const baseSiteConfig = {
  name: "SORAPI",
  description: "Products of sorapi",
  url: "https://sorapi.dev",
  ogImage: "https://sorapi.dev/og.png",
  metadataBase: "/",
  keywords: ["sorapi", "awesome LLM applications"],
  authors: [
    {
      name: "oiov",
      url: "https://oiov.dev",
      twitter: "https://twitter.com/yesmoree",
    },
  ],
  creator: "@oiov",
  openSourceURL: "https://github.com/oiov",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    // { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    {
      name: "twitter",
      href: "https://twitter.com/yesmoree",
      icon: BsTwitterX,
    },
  ],
  footerLinks: [
    { name: "email", href: "mailto:hi@oiov.dev", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/yesmoree",
      icon: BsTwitterX,
    },
    // { name: "github", href: "https://github.com/oiov/", icon: BsGithub },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/yesmore",
      icon: SiBuymeacoffee,
    },
  ],
  footerProducts: [],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
