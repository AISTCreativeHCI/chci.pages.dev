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
      venue={ja ? "会場: Zoom Webinar" : "Zoom Webinar (Online)"}
      // venue={ja ? "会場: （近日公開）" : "Venue: TBA"}
      title={
        ja
          ? "芸術表現のための創造性支援ツール"
          : "Creativity support tools for artistic work"
      }
      speakers={[
        {
          name: "Xavier Lambein",
          photoPath: "/images/5-xavier-lambein.jpg",
        },
        {
          name: ja ? "松浦 知也" : "Tomoya Matsuura",
          photoPath: "/images/5-tomoya-matsuura.jpg",
        },
        {
          name: ja ? "橋本 麦" : "Baku Hashmoto",
          photoPath: "/images/5-baku-hashimoto.png",
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
