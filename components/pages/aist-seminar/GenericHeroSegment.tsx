import { FC, ReactNode } from "react";
import { Button, Divider, Grid, Image } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";
import { ButtonWrapper } from "./ButtonWrapper";
import { HeroSegment } from "./HeroSegment";
import { HeroSegmentWrapper } from "./HeroSegmentWrapper";
import { IFramePlayer } from "./IFramePlayer";

import speakers from "./invited-speakers.json";
import seminars from "./seminars.json";

interface IProps {
  fullWidth?: boolean;
  index: number;
  children?: ReactNode;
}

export const GenericHeroSegment: FC<IProps> = ({
  fullWidth,
  index,
  children,
}) => {
  const { ja } = useSiteInfo();
  const si = seminars[index];
  const ss = speakers[index];
  const edition = ja ? `第${si.edition.ja}回` : `#${si.edition.en}`;
  const editionTitle = ja
    ? `${edition} AIST Creative HCI Seminar`
    : `AIST Creative HCI Seminar ${edition}`;
  const title = ja ? si.title.ja : si.title.en;
  const subtitle = ss
    .map((s) =>
      typeof s.name === "string" ? s.name : s.name[ja ? "ja" : "en"]
    )
    .join(", ");
  const dateTime = ja
    ? `日時: ${si.dateTime.ja}`
    : `Date and time: ${si.dateTime.en}`;
  const venue = ja ? `会場: ${si.venue.ja}` : `Venue: ${si.venue.en}`;
  return (
    <HeroSegment
      fullWidth={fullWidth}
      header={fullWidth ? `${edition} ${title}` : editionTitle}
      subheader={fullWidth ? subtitle : `${title}: ${subtitle}`}
      dateTime={dateTime}
      venue={venue}
      speakers={ss}
    >
      {fullWidth && (
        <>
          <p>{ja ? si.description.ja : si.description.en}</p>
          <Divider />
        </>
      )}
      <HeroSegmentWrapper>
        <IFramePlayer
          src={`https://www.youtube.com/embed/${si.youTubeVideoId}`}
        />
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
            href={`https://docs.google.com/document/d/${si.sharedNoteId}/edit`}
          />
        </ButtonWrapper>
        {children}
      </HeroSegmentWrapper>
      {si.photos && (
        <>
          <Divider />
          <Grid stackable columns={4}>
            {si.photos.map((photo) => (
              <Grid.Column>
                <Image key={photo} src={photo} fluid bordered />
              </Grid.Column>
            ))}
          </Grid>
        </>
      )}
    </HeroSegment>
  );
};
