import { FC } from "react";
import { Header, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";

export const AboutSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment basic>
      <a id="about" className="anchor"></a>
      <Header
        as="h2"
        dividing
        content={ja ? "第三回セミナーについて" : "About the third edition"}
      />
      {ja ? (
        <>
          <p>
            本セミナーの第3回目は、
            <strong>2023年5月22日（月）午後3時</strong>
            から開催します。形式は、Zoom
            Webinarでのオンラインストリーミングをご覧いただくオンラインのワークショップとなります。今回は、
            <strong>
              4月23-29日にドイツのハンブルクで開催された国際会議 ACM CHI 2023
            </strong>
            の様々なプログラムで発表した若手研究者をお呼びして、Human-Computer
            Interaction分野のトップ国際会議 CHI の概要をつかみます。
          </p>
          <p>
            通常の投稿論文（Papers）やデモ・ポスター（Interactivity,
            Late-Breaking Work）はもちろん、ケーススタディ（Case
            Studies）や学生の研究コンペティション（Student Research Competition,
            Student Design Competition など）、ワークショップやコース（Special
            Interest Group, Workshop,
            Course）など、盛りだくさんの超巨大会議について、全体像を把握するまたとないチャンスです。（論文セッションの全貌をつかむ{" "}
            <a href="https://sigchi.jp/seminar/chi2023/">CHI勉強会 2023</a>{" "}
            も、ぜひどうぞ！）
          </p>
          <p>
            なお、<strong>今回に限り日本語での講演・議論</strong>
            （講演者のCHIでの発表内容を含む招待講演部分を除く）となります。お気軽にご参加ください。
          </p>
        </>
      ) : (
        <>
          <p>
            The seminar's third edition will be held on{" "}
            <strong>May 22 (Mon), 2023</strong>. For the third edition, we plan
            to invite Japan-based researchers who presented their work at
            various programs of CHI 2023 (Papers, Case Studies, Interactivity,
            Special Interest Group, ...) and ask them to share their
            experiences. The format will be a one-day online seminar on Zoom
            Webinar.
          </p>
        </>
      )}
    </Segment>
  );
};
