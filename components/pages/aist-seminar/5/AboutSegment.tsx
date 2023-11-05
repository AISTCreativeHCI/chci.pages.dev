import { FC, useMemo } from "react";
import { Header, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";

interface IProps {
  bare?: boolean;
}

export const AboutSegment: FC<IProps> = ({ bare }) => {
  const { ja } = useSiteInfo();
  const content = useMemo(
    () =>
      ja ? (
        <>
          <p>
            本セミナーの第5回目は、
            <strong>2023年11月23日（木）午後5時半</strong>
            から開催します。
            {/* 形式は、Zoom
            Webinarでのオンラインストリーミングをご覧いただくオンラインのワークショップとなります。今回は、海外へ留学し、海外で研究者として活躍している若手の方々をお呼びして、ご自身の取り組みについて講演いただくとともに、
            <strong>海外で研究するということ</strong>
            についてパネルディスカッションをしていただきます。 */}
          </p>
          <p>講演者を含む詳細は近日中に公開予定です。</p>
          {/* <p>
            なお、本セミナーは翌日の
            <a href="https://sigchi.jp/seminar/chi2023/">CHI勉強会 2023</a>
            と連携して開催するイベントです。
            <strong>パネルディスカッションは日本語</strong>
            となります。お気軽にご参加ください。
          </p> */}
        </>
      ) : (
        <>
          <p>
            The seminar's fifth edition will be held on{" "}
            <strong>November 23 (Thu), 2023</strong>. More details will be
            disclosed soon.
            {/* For the fourth edition, we
            plan to invite Japanese researchers studying and researching abroad
            and ask them to share their experiences. The format will be a
            one-day online seminar on Zoom Webinar. */}
          </p>
        </>
      ),
    [ja]
  );
  return bare ? (
    content
  ) : (
    <Segment basic>
      <a id="about" className="anchor"></a>
      <Header
        as="h2"
        dividing
        content={ja ? "第五回セミナーについて" : "About the fifth edition"}
      />
      {content}
    </Segment>
  );
};
