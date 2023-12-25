import { FC } from "react";
import { Button, Divider, Header, Image, List } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";
import { ButtonWrapper } from "./ButtonWrapper";
import { HeroSegmentWrapper } from "./HeroSegmentWrapper";
import { IFramePlayer } from "./IFramePlayer";

import styles from "./HeroSegment.module.css";
import speakers from "./invited-speakers.json";
import seminars from "./seminars.json";

interface IProps {
  fullWidth?: boolean;
  index: number;
}

export const GenericHeroSegment: FC<IProps> = ({ fullWidth, index }) => {
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
    <>
      <div
        className={`${styles.details}${
          fullWidth ? ` ${styles.fullwidth}` : ""
        }`}
      >
        <div className={styles.title}>
          <Header
            as="h2"
            content={fullWidth ? `${edition} ${title}` : editionTitle}
            subheader={subtitle}
          />
          <List>
            <List.Item content={dateTime} />
            <List.Item content={venue} />
          </List>
        </div>
        <div className={styles.images}>
          {ss.map((s) => (
            <Image
              key={s.photoPath}
              avatar
              src={s.photoPath}
              alt={`[Photo: ${
                typeof s.name === "string" ? s.name : s.name[ja ? "ja" : "en"]
              }]`}
            />
          ))}
        </div>
      </div>
      {!fullWidth && <Divider hidden />}
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
      </HeroSegmentWrapper>
    </>
  );
};
