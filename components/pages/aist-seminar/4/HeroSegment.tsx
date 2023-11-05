import { FC } from "react";
import { Button } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { ButtonWrapper } from "../ButtonWrapper";
import { HeroSegment as GenericHeroSegment } from "../HeroSegment";
import { HeroSegmentWrapper } from "../HeroSegmentWrapper";
import { IFramePlayer } from "../IFramePlayer";

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
      <HeroSegmentWrapper>
        <IFramePlayer src="https://www.youtube.com/embed/HhPiRMgv_jc" />
        <ButtonWrapper>
          <Button
            primary
            icon="file"
            size="large"
            content={
              <span>
                <span className="show-on-small-screens" aria-hidden="true">
                  {ja ? "ノート" : "Notes"}
                </span>
                <span className="hide-on-small-screens">
                  {ja ? "共有ノート" : "Shared notes"}
                </span>
              </span>
            }
            as="a"
            href="https://docs.google.com/document/d/1XuDKn68tWXmnduTqJB0TqpqdvhAVIWQ7NjytxjvVEyQ/edit"
          />
        </ButtonWrapper>
      </HeroSegmentWrapper>
    </GenericHeroSegment>
  );
};
