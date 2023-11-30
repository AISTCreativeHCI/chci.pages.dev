import { FC } from "react";
import { Button, Divider, Grid, Image } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { HeroSegment as GenericHeroSegment } from "../HeroSegment";
import { HeroSegmentWrapper } from "../HeroSegmentWrapper";
import { IFramePlayer } from "../IFramePlayer";
import { ButtonWrapper } from "../ButtonWrapper";

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
      venue={
        ja
          ? "会場: Zoom Webinar（収録会場: 東京藝術大学）"
          : "Venue: Zoom Webinar (Japan-based panelists: Tokyo University of the Arts)"
      }
      title={
        ja
          ? "芸術表現のための創造性支援ツール"
          : "Creativity Support Tools for artistic work"
      }
      speakers={4}
    >
      <HeroSegmentWrapper>
        <IFramePlayer src="https://www.youtube.com/embed/btYXHR22mv8" />
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
            href="https://docs.google.com/document/d/1AGf1oMvDumAxJfmSMAjx-4gXNrhsNNe6-ZUONalM5pU/edit"
          />
        </ButtonWrapper>
      </HeroSegmentWrapper>
      <Divider />
      <Grid stackable columns={4}>
        <Grid.Column>
          <Image src="/images/5/20231123-DSC06376.jpg" fluid bordered />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/5/20231123-DSC06437.jpg" fluid bordered />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/5/20231123-DSC06306.jpg" fluid bordered />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/5/20231123-DSC06392.jpg" fluid bordered />
        </Grid.Column>
      </Grid>
    </GenericHeroSegment>
  );
};
