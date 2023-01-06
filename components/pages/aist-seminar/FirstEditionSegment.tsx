import { FC } from "react";
import { Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";

import styles from "./FirstEditionSegment.module.css";

export const FirstEditionSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment color="red">
      <h2>{ja ? "初回: 2023年3月7日（火）" : "First Edition"}</h2>
      <div className={styles.details}>
        <p>
          {ja
            ? "（情報公開まで、もうしばらくお待ちください）"
            : "Details to be disclosed soon... stay tuned!"}
        </p>
      </div>
      {ja ? (
        <>
          <p>
            本セミナーの第1回目は、<strong>2023年3月7日（火）</strong>
            に開催します。記念すべき第1回目では、CHI、CSCW、DIS、C&amp;Cなど、HCIのトップ国際会議で活発に論文を発表している、創造性に関する学際研究のエッジランナー2名をお招きする予定です。
          </p>
          <p>
            形式は、東京の会場にお越しいただくか、YouTube
            Liveでのオンラインストリーミングをご覧いただく、1日のハイブリッドワークショップとなります。講演者は海外から現地に招聘予定です。ぜひ活発な議論をお願いいたします。
          </p>
        </>
      ) : (
        <>
          <p>
            The seminar's first edition will be held on{" "}
            <strong>March 7 (Tue), 2023</strong>. For this very first edition,
            we plan to invite two edge runners of the interdisciplinary study on
            creativity who have actively published papers at top-tier HCI
            venues, including CHI, CSCW, DIS, and C&amp;C.
          </p>
          <p>
            The format will be a one-day hybrid workshop &mdash; attendees can
            either visit a venue in Tokyo, Japan, or watch online streaming on
            YouTube Live.
          </p>
        </>
      )}
    </Segment>
  );
};
