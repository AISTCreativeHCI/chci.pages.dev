import { FC } from "react";

import { GenericBodyComponent } from "../GenericBodyComponent";
import { AboutSegment } from "./AboutSegment";
import { InvitedSpeakersSegment } from "./InvitedSpeakersSegment";
import { ReferencesSegment } from "./ReferencesSegment";
import { TimetableSegment } from "./TimetableSegment";

export const Body: FC = () => {
  return (
    <GenericBodyComponent index={3}>
      <AboutSegment />
      <InvitedSpeakersSegment />
      <TimetableSegment />
      <ReferencesSegment />
    </GenericBodyComponent>
  );
};
