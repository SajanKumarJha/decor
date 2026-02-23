import { SVGProps } from "react";

export type IconProps = {
  size: IconSize | string;
  name: IconType;
} & SVGProps<SVGSVGElement>;

export type IconSize =
  | "--ic-xxs"
  | "--ic-xs"
  | "--ic-sm"
  | "--ic-md"
  | "--ic-base"
  | "--ic-lg"
  | "--ic-xl"
  | "--ic-xxl";

export type IconType =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "at"
  | "chat-circle"
  | "chat-circle-dots"
  | "currency-inr"
  | "dots-three"
  | "envelope-open"
  | "facebook-logo"
  | "instagram-logo"
  | "magnifying-glass"
  | "monitor"
  | "moon"
  | "paper-plane-tilt"
  | "pause"
  | "phone-call"
  | "pinterest-logo"
  | "play"
  | "question-mark"
  | "quotes"
  | "smiley"
  | "sparkle"
  | "sun"
  | "users-three"
  | "whatsapp-logo"
  | "youtube-logo"
  | "youtube-shorts-logo";
