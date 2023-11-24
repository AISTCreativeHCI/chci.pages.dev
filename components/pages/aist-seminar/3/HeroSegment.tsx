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
      edition={3}
      editionJa="三"
      dateTime={
        ja
          ? "日時: 2023年5月22日（月）15:00 ～ 17:00"
          : "Date: May 22nd, 2023 / Time: 15:00-17:00 (Japan Standard Time)"
      }
      venue={ja ? "会場: Zoom Webinar" : "Venue: Zoom Webinar (Online)"}
      title={
        ja
          ? "CHI 2023 が分かる！発表者による振り返り"
          : "How was your CHI 2023 experience?"
      }
      speakers={[
        { name: "Koya Narumi", photoPath: "/images/3-koya-narumi.jpg" },
        {
          name: "Hiromu Yakura",
          photoPath: "/images/3-hiromu-yakura.jpg",
        },
        {
          name: "Motomura Ami",
          photoPath: "/images/circle-user-solid.svg",
        },
      ]}
    >
      <HeroSegmentWrapper>
        <IFramePlayer src="https://www.youtube.com/embed/N5wicg8ge0o" />
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
            href="https://docs.google.com/document/d/1Y_E-aiA0X30H1aBbhNi0oUhSyS9MTQFzfvXcks5QC0o/edit"
          />
        </ButtonWrapper>
      </HeroSegmentWrapper>
    </GenericHeroSegment>
  );
};
