import { createContext } from "react";

interface SiteInfoIface {
  root: string;
  title: string;
  description: string;
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
    description: "AIST Creative HCI Seminar の紹介ページです。"
  },
  en: {
    root: "/aist-seminar/en",
    title: "AIST Creative HCI Seminar",
    description: "This page introduces AIST Creative HCI Seminar."
  }
});
