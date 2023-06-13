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
      edition={4}
      editionJa="四"
      dateTime={
        ja
          ? "日時: 2023年6月23日（金）10:30 ～ 12:30"
          : "Date: June 23rd, 2023 / Time: 10:30-12:30 (Japan Standard Time)"
      }
      venue={ja ? "会場: Zoom Webinar" : "Zoom Webinar (Online)"}
      title={(ja && "海外で研究するということ") || undefined}
      speakers={[
        { name: "Kotaro Hara", photoPath: "/images/circle-user-solid.svg" },
        {
          name: "Riku Arakawa",
          photoPath: "/images/4-riku-arakawa.jpg",
        },
        {
          name: "Manami Nakagawa",
          photoPath: "/images/4-manami-nakagawa.jpg",
        },
      ]}
    >
      <AboutSegment bare />
      <RegistrationBox />
      <InvitedSpeakersSegment bare />
      <TimetableSegment bare />
      <ReferencesSegment bare />
    </GenericHeroSegment>
  );
};
