import type { ReactNode } from "react";

export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
  isExternal: boolean;
  openInNewTab?: boolean;
  disabled?: boolean;
} 