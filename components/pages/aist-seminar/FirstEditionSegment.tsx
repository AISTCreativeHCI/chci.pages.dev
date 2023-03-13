import { FC } from "react";
import { Button, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";
import { HeroSegment } from "./1/HeroSegment";

import styles from "./FirstEditionSegment.module.css";

export const FirstEditionSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment.Group>
      <Segment color="red" attached="top">
        <a id="first" className={styles.anchor}></a>
        <a id="first-registration" className={styles.anchor}></a>
        <a id="first-invited-speakers" className={styles.anchor}></a>
        <a id="first-timetable" className={styles.anchor}></a>
        <a id="first-references" className={styles.anchor}></a>
        <a id="first-venue" className={styles.anchor}></a>
        <HeroSegment fullWidth />
      </Segment>
      <Segment secondary attached="bottom" textAlign="right">
        <Button
          color="red"
          icon="arrow right"
          labelPosition="right"
          size="large"
          content={ja ? "第一回について詳しく" : "More details"}
          as="a"
          href={ja ? "/aist-seminar/1" : "/aist-seminar/en/1"}
        />
      </Segment>
    </Segment.Group>
  );
};
