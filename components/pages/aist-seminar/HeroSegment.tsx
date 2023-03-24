import { FC, ReactNode } from "react";
import { Divider, Header, Image, List } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";

import styles from "./HeroSegment.module.css";

interface IProps {
  fullWidth?: boolean;
  edition: number;
  editionJa: string;
  dateTime: string;
  venue: string;
  topic: string;
  speakers: {
    name: string;
    photoPath: string;
  }[];
  children?: ReactNode;
}

export const HeroSegment: FC<IProps> = ({
  fullWidth,
  edition,
  editionJa,
  dateTime,
  venue,
  topic,
  speakers,
  children,
}) => {
  const { ja } = useSiteInfo();
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
                ? `#${edition} ${speakers.map((s) => s.name).join(" & ")}`
                : `AIST Creative HCI Seminar #${edition}`
            }
            subheader={ja && `第${editionJa}回 AIST Creative HCI Seminar`}
          />
          <List>
            <List.Item content={dateTime} />
            <List.Item content={venue} />
            <List.Item content={topic} />
          </List>
        </div>
        <div className={styles.images}>
          {speakers.map((s) => (
            <Image
              key={s.photoPath}
              avatar
              src={s.photoPath}
              alt={`[Photo: ${s.name}]`}
            />
          ))}
        </div>
      </div>
      {!fullWidth && children && <Divider hidden />}
      {children}
    </>
  );
};
