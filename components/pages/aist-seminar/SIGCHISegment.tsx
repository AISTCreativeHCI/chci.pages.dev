import { FC } from "react";
import { Image, Segment, SegmentProps } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";

import styles from "./SIGCHISegment.module.css";

export const SIGCHISegment: FC<SegmentProps> = (props) => {
  const { ja } = useSiteInfo();
  return (
    <Segment textAlign="center" {...props}>
      {ja ? (
        <>
          <p>
            本セミナーシリーズは{" "}
            <a href="https://sigchi.jp/">Japan ACM SIGCHI Chapter</a>{" "}
            の共催イベントです。
          </p>
          <Image
            fluid
            src="/images/japan-sigchi-chapter.png"
            alt=""
            className={styles.logo}
          />
        </>
      ) : (
        <>
          <p>
            This seminar series is co-organized by{" "}
            <a href="https://sigchi.jp/">Japan ACM SIGCHI Chapter</a>.
          </p>
          <Image
            fluid
            src="/images/japan-sigchi-chapter.png"
            alt=""
            className={styles.logo}
          />
        </>
      )}
    </Segment>
  );
};
