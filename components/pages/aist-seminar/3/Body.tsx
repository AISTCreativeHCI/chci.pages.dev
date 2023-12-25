import { FC } from "react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { GenericBodyComponent } from "../GenericBodyComponent";
import { AboutSegment } from "./AboutSegment";
import { InvitedSpeakersSegment } from "./InvitedSpeakersSegment";
import { ReferencesSegment } from "./ReferencesSegment";
import { TimetableSegment } from "./TimetableSegment";

export const Body: FC = () => {
  const { ja } = useSiteInfo();

  return (
    <GenericBodyComponent
      index={2}
      alert={
        ja && (
          <p>
            講演者の厚意により、講演資料がダウンロードできます。
            <a href="#timetable">プログラム</a>からどうぞ。
          </p>
        )
      }
    >
      <AboutSegment />
      <InvitedSpeakersSegment />
      <TimetableSegment />
      <ReferencesSegment />
    </GenericBodyComponent>
  );
};
