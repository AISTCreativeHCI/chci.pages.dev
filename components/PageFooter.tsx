import Image from "next/image";
import { FC } from "react";
import { Segment } from "semantic-ui-react";
import { createShareButtons } from "./lib/createShareButtons";
import { useSiteInfo } from "./lib/useSiteInfo";

import styles from "./PageFooter.module.css";

export const PageFooter: FC = () => {
  const { ja, site } = useSiteInfo();
  return (
    <footer className={styles.footer}>
      <div className={styles.share}>
        <Segment basic textAlign="center">
          {createShareButtons(site.title)}
        </Segment>
      </div>
      <Segment basic textAlign="center">
        <a
          href={
            ja
              ? "https://www.aist.go.jp"
              : "https://www.aist.go.jp/index_en.html"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={ja ? "/vision_jp_400.png" : "/vision_en_400.png"}
            alt={ja ? "産総研 ロゴ" : "AIST Logo"}
            width={150}
            height={45.375}
          />
        </a>
      </Segment>
    </footer>
  );
};
