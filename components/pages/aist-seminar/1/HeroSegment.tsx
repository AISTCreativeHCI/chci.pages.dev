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
      edition={1}
      editionJa="一"
      dateTime={
        ja
          ? "日時: 2023年3月7日（火）13:00 ～ 16:30 / 開場 12:30"
          : "Date: Mar. 7th, 2023 / Time: 13:00-16:30 (Japan Standard Time)"
      }
      venue={
        ja
          ? "会場: 東京大学本郷キャンパス 福武ラーニングシアター / YouTube Live"
          : "Venue: Fukutake Learning Theater, The University of Tokyo / YouTube Live (Hybrid)"
      }
      title={ja ? "Creativity Support（創造性支援）" : "Creativity Support"}
      speakers={0}
    >
      <HeroSegmentWrapper>
        <IFramePlayer src="https://www.youtube.com/embed/HYGUCwoOHCk" />
        <ButtonWrapper>
          <Button.Group>
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
              href="https://docs.google.com/document/d/1GAOBgEtpCBINNIjNGwp56U5k-3atFPVTpeJ27wrEudY/edit"
            />
            <Button
              icon="edit"
              size="large"
              content={
                <span>
                  <span className="show-on-small-screens" aria-hidden="true">
                    {ja ? "アンケート" : "Questionnaire"}
                  </span>
                  <span className="hide-on-small-screens">
                    {ja ? "視聴者向けアンケート" : "Post-seminar Questionnaire"}
                  </span>
                </span>
              }
              as="a"
              href="https://forms.office.com/r/iMbrDZrttL"
            />
          </Button.Group>
        </ButtonWrapper>
      </HeroSegmentWrapper>
    </GenericHeroSegment>
  );
};
