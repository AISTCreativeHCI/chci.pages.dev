import { FC, ReactNode } from "react";
import { Divider, Header, Image, List } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";

import styles from "./HeroSegment.module.css";
import speakers from "./invited-speakers.json";

interface IProps {
  fullWidth?: boolean;
  edition: number;
  editionJa: string;
  dateTime: string;
  venue: string;
  topic?: string;
  title?: string;
  speakers:
    | {
        name: string;
        photoPath: string;
      }[]
    | number;
  children?: ReactNode;
}

export const HeroSegment: FC<IProps> = ({
  fullWidth,
  edition,
  editionJa,
  dateTime,
  venue,
  topic,
  title,
  speakers: speakersOrIndex,
  children,
}) => {
  const { ja } = useSiteInfo();
  const ss =
    typeof speakersOrIndex === "number"
      ? speakers[speakersOrIndex]
      : speakersOrIndex;
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
            content={
              fullWidth
                ? `${ja ? `第${editionJa}回` : `#${edition}`} ${
                    title ||
                    (ss
                      ? ss
                          .map((s) =>
                            typeof s.name === "string"
                              ? s.name
                              : s.name[ja ? "ja" : "en"]
                          )
                          .join(", ")
                      : "?")
                  }`
                : `AIST Creative HCI Seminar #${edition}`
            }
            subheader={
              ss &&
              title &&
              ss
                .map((s) =>
                  typeof s.name === "string" ? s.name : s.name[ja ? "ja" : "en"]
                )
                .join(", ")
            }
          />
          <List>
            {topic && <List.Item content={topic} />}
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
      {!fullWidth && children && <Divider hidden />}
      {children}
    </>
  );
};
