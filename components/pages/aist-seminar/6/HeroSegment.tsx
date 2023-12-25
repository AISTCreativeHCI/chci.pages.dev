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
      speakers={5}
    >
      <HeroSegmentWrapper>
        <IFramePlayer src="https://www.youtube.com/embed/R3H4Ehgt8dI" />
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
            href="https://docs.google.com/document/d/1hUxK_EvYnGG7OgKiPAqVuGd6C_90SQsfNW1qohWjldI/edit"
          />
        </ButtonWrapper>
      </HeroSegmentWrapper>
    </GenericHeroSegment>
  );
};
