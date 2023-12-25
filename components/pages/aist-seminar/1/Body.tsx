import { FC } from "react";

import { GenericBodyComponent } from "../GenericBodyComponent";
import { AboutSegment } from "./AboutSegment";
import { InvitedSpeakersSegment } from "./InvitedSpeakersSegment";
import { ReferencesSegment } from "./ReferencesSegment";
import { TimetableSegment } from "./TimetableSegment";
import { VenueSegment } from "./VenueSegment";

export const Body: FC = () => {
  return (
    <GenericBodyComponent index={0}>
      <AboutSegment />
      <InvitedSpeakersSegment />
      <TimetableSegment />
      <ReferencesSegment />
      <VenueSegment />
    </GenericBodyComponent>
  );
};
