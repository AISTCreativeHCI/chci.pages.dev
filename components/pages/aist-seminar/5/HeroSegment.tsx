import { FC } from "react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { HeroSegment as GenericHeroSegment } from "../HeroSegment";
import { AboutSegment } from "./AboutSegment";
import { InvitedSpeakersSegment } from "./InvitedSpeakersSegment";
import { ReferencesSegment } from "./ReferencesSegment";
import { RegistrationBox } from "./RegistrationBox";
import { TimetableSegment } from "./TimetableSegment";

interface IProps {
  fullWidth?: boolean;
}

export const HeroSegment: FC<IProps> = ({ fullWidth }) => {
  const { ja } = useSiteInfo();
  return (
    <GenericHeroSegment
      fullWidth={fullWidth}
      edition={5}
      editionJa="五"
      dateTime={
        ja
          ? "日時: 2023年11月23日（木）17:30 ～ 19:30"
          : "Date: November 23rd, 2023 / Time: 17:30-19:30 (Japan Standard Time)"
      }
      // venue={ja ? "会場: Zoom Webinar" : "Zoom Webinar (Online)"}
      venue={ja ? "会場: （近日公開）" : "Venue: TBA"}
      // title={(ja && "海外で研究するということ") || undefined}
      title={ja ? "（近日公開）" : "TBA"}
      speakers={[
        { name: "TBA", photoPath: "/images/circle-user-solid.svg" },
        { name: "TBA", photoPath: "/images/circle-user-solid.svg" },
        { name: "TBA", photoPath: "/images/circle-user-solid.svg" },
      ]}
    >
      <AboutSegment bare />
      <RegistrationBox disabled />
      {/* <InvitedSpeakersSegment bare />
      <TimetableSegment bare />
      <ReferencesSegment bare /> */}
    </GenericHeroSegment>
  );
};
