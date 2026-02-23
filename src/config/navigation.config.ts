export const NAV_MENU = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Lookbook", path: "/lookbook" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
] as const;

export type NavMenuItem = (typeof NAV_MENU)[number];
export type NavKey = NavMenuItem["label"];

export const SOCIAL_MENU = [
  {
    key: "facebook",
    label: "Facebook",
    icon: "facebook-logo",
    url: "https://facebook.com/yourbrand",
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: "instagram-logo",
    url: "https://instagram.com/yourbrand",
  },
  {
    key: "pinterest",
    label: "Pinterest",
    icon: "pinterest-logo",
    url: "https://pinterest.com/yourbrand",
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: "youtube-logo",
    url: "https://youtube.com/@yourbrand",
  },
  {
    key: "shorts",
    label: "YouTube Shorts",
    icon: "youtube-shorts-logo",
    url: "https://youtube.com/@yourbrand/shorts",
  },
] as const;

export type SocialItem = (typeof SOCIAL_MENU)[number];
export type SocialKey = SocialItem["key"];
