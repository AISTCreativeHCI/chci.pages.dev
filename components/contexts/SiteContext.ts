import { createContext } from "react";

export const SiteContext = createContext({
  root: "/aist-seminar",
  language: "ja",
  title: "AIST Creative HCI Seminar",
  description: "AIST Creative HCI Seminar の紹介ページです。"
});
