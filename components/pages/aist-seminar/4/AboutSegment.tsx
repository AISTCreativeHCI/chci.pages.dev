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
        content={ja ? "第四回セミナーについて" : "About the fourth edition"}
      />
      {ja ? (
        <>
          <p>
            本セミナーの第4回目は、
            <strong>2023年6月23日（金）午前10時半</strong>
            から開催します。形式は、Zoom
            Webinarでのオンラインストリーミングをご覧いただくオンラインのワークショップとなります。今回は、海外へ留学し、海外で研究者として活躍している若手の方々をお呼びして、ご自身の取り組みについて講演いただくとともに、
            <strong>海外で研究するということ</strong>
            についてパネルディスカッションをしていただきます。
          </p>
          <p>
            なお、本セミナーは翌日の
            <a href="https://sigchi.jp/seminar/chi2023/">CHI勉強会 2023</a>
            と連携して開催するイベントです。
            <strong>パネルディスカッションは日本語</strong>
            となります。お気軽にご参加ください。
          </p>
        </>
      ) : (
        <>
          <p>
            The seminar's fourth edition will be held on{" "}
            <strong>June 23 (Fri), 2023</strong>. For the fourth edition, we
            plan to invite Japanese researchers studying and researching abroad
            and ask them to share their experiences. The format will be a
            one-day online seminar on Zoom Webinar.
          </p>
        </>
      )}
    </Segment>
  );
};
