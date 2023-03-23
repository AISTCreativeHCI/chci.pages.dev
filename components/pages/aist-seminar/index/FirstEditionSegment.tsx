import { FC } from "react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { HeroSegment } from "../1/HeroSegment";
import { EditionSegment } from "./EditionSegment";

import styles from "./FirstEditionSegment.module.css";

export const FirstEditionSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <EditionSegment
      text={ja ? "第一回について詳しく" : "More details"}
      link={ja ? "/aist-seminar/1" : "/aist-seminar/en/1"}
    >
      <a id="first" className={styles.anchor}></a>
      <a id="first-registration" className={styles.anchor}></a>
      <a id="first-invited-speakers" className={styles.anchor}></a>
      <a id="first-timetable" className={styles.anchor}></a>
      <a id="first-references" className={styles.anchor}></a>
      <a id="first-venue" className={styles.anchor}></a>
      <HeroSegment fullWidth />
    </EditionSegment>
  );
};
