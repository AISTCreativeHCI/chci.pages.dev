import { FC } from "react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { HeroSegment as GenericHeroSegment } from "../HeroSegment";

interface IProps {
  fullWidth?: boolean;
}

export const HeroSegment: FC<IProps> = ({ fullWidth }) => {
  const { ja } = useSiteInfo();
  return (
    <GenericHeroSegment
      fullWidth={fullWidth}
      edition={2}
      editionJa="二"
      dateTime={
        ja
          ? "日時: 2023年4月14日（金）10:00 ～ 12:00"
          : "Date: Apr. 14th, 2023 / Time: 10:00-12:00 (Japan Standard Time)"
      }
      venue={ja ? "会場: Zoom Webinar" : "Zoom Webinar (Online)"}
      speakers={[
        { name: "Amy Pavel", photoPath: "/images/2-amy-pavel.png" },
        {
          name: "Xingyu Bruce Liu",
          photoPath: "/images/2-xingyu-bruce-liu.jpg",
        },
      ]}
    />
  );
};
