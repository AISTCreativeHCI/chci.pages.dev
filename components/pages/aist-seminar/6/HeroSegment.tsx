import { FC } from "react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { HeroSegment as GenericHeroSegment } from "../HeroSegment";
import { AboutSegment } from "./AboutSegment";
import { RegistrationBox } from "./RegistrationBox";

interface IProps {
  fullWidth?: boolean;
}

export const HeroSegment: FC<IProps> = ({ fullWidth }) => {
  const { ja } = useSiteInfo();
  return (
    <GenericHeroSegment
      fullWidth={fullWidth}
      edition={6}
      editionJa="六"
      dateTime={
        ja
          ? "日時: 2023年12月13日（水）午後"
          : "Date: Dec. 13th, 2023 / Time: TBA (afternoon in Japan Standard Time)"
      }
      venue={
        ja
          ? "会場: 東京大学関連施設（予定） / Zoom Webinar"
          : "Venue: The University of Tokyo (details TBA) / Zoom Webinar (Hybrid)"
      }
      title={
        ja ? '"In the wild" なHCI研究（仮）' : 'HCI Research "in the wild"'
      }
      speakers={[
        {
          name: "Jennifer Jacobs",
          photoPath: "/images/jenniferjacobs.jpg",
        },
        { name: "Koya Narumi", photoPath: "/images/3-koya-narumi.jpg" },
      ]}
    >
      <AboutSegment bare />
      <RegistrationBox />
      {/* <InvitedSpeakersSegment bare />
      <TimetableSegment bare />
      <ReferencesSegment bare /> */}
    </GenericHeroSegment>
  );
};
