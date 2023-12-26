import { useContext, useMemo } from "react";

import {
  SiteContext,
  SiteContextIface,
} from "../../../components/contexts/SiteContext";
import {
  Body,
  ListingMode,
} from "../../../components/pages/aist-seminar/index/Body";

export default function Index() {
  const scx = useContext(SiteContext);
  const scx_ = useMemo<SiteContextIface>(() => {
    return {
      ...scx,
      language: "en",
    };
  }, [scx]);
  return (
    <SiteContext.Provider value={scx_}>
      <Body mode={ListingMode.BySpeaker} />
    </SiteContext.Provider>
  );
}
