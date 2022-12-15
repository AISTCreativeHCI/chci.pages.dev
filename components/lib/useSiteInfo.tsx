import { useContext } from "react";
import { SiteContext, SiteInfoIface } from "../contexts/SiteContext";

interface ComposedSiteInfo {
  language: "en" | "ja";
  site: SiteInfoIface;
  ja: boolean;
  altRoot: string;
}

export function useSiteInfo(): ComposedSiteInfo {
  const scx = useContext(SiteContext);
  const { language } = scx;
  const site = scx[language];
  const ja = language == "ja";
  const altRoot = scx[ja ? "en" : "ja"].root;
  return {
    language,
    ja,
    site,
    altRoot,
  };
}
