import { createContext } from "react";

export interface SiteInfoIface {
  root: string;
  title: string;
  description: string;
  image: string;
  favicon: string;
}

export interface SiteContextIface {
  language: "ja" | "en";
  ja: SiteInfoIface;
  en: SiteInfoIface;
}

export const SiteContext = createContext<SiteContextIface>({
  language: "ja",
  ja: {
    root: "/aist-seminar",
    title: "AIST Creative HCI Seminar",
    description: "AIST Creative HCI Seminar の紹介ページです。",
    image: "/aist-creative-hci-seminar-hero.png",
    favicon: "/aist-creative-hci-seminar-logo.png",
  },
  en: {
    root: "/aist-seminar/en",
    title: "AIST Creative HCI Seminar",
    description: "This page introduces AIST Creative HCI Seminar.",
    image: "/aist-creative-hci-seminar-hero.png",
    favicon: "/aist-creative-hci-seminar-logo.png",
  },
});
