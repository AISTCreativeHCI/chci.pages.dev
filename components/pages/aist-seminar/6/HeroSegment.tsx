import { FC } from "react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { HeroSegment as GenericHeroSegment } from "../HeroSegment";
import { AboutSegment } from "./AboutSegment";
import { RegistrationBox } from "./RegistrationBox";
import { VenueSegment } from "./VenueSegment";

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
          ? "日時: 2023年12月13日（水）13:00 ～ 16:30 / 開場 12:30"
          : "Date: Dec. 13th, 2023 / Time: 13:00-16:30 (Japan Standard Time)"
      }
      venue={
        ja
          ? "会場: 東京大学 目白台インターナショナル・ビレッジ / Zoom Webinar"
          : "Venue: Mejirodai International Village, The University of Tokyo / Zoom Webinar (Hybrid)"
      }
      title={ja ? '"In the wild" なHCI研究' : 'HCI Research "in the wild"'}
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
      <VenueSegment />
    </GenericHeroSegment>
  );
};
