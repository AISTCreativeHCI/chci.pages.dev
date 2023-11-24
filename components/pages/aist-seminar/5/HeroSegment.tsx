import { FC } from "react";

import { Grid, Image, Message } from "semantic-ui-react";
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
          : "Zoom Webinar (Japan-based panelists: Tokyo University of the Arts)"
      }
      title={
        ja
          ? "芸術表現のための創造性支援ツール"
          : "Creativity Support Tools for artistic work"
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
      <Message>
        {ja
          ? "動画のアーカイブ配信までもうしばらくお待ちください。"
          : "The video archive will be available soon."}
      </Message>
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
