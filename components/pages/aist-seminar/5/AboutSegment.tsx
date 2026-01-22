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
            本セミナーの第五回目は、
            <strong>2023年11月23日（木）午後5時半</strong>
            から開催します。 形式は、Zoom
            Webinarでのオンラインストリーミングをご覧いただくオンラインのワークショップとなります。今回は「芸術表現のための創造性支援ツール」がテーマで、芸術表現、とくに音楽や映像を制作するためのプログラマブルなツールの研究開発に取り組まれてきた三名をお呼びして、招待講演とパネルセッションをしていただきます。
          </p>
          <p>
            なお、本セミナーは11月25日（土）{" "}
            <a href="http://sigae.vrsj.org/?p=476">
              VRSJ A+E研究委員会
              Meetup-3「アートやエンタメをテーマとした研究や作品の評価方法の共有」
            </a>
            と連携して開催するイベントです。どちらも奮ってご参加ください。
          </p>
        </>
      ) : (
        <>
          <p>
            The seminar's fifth edition will be held on{" "}
            <strong>November 23 (Thu), 2023</strong>. For the fifth edition, we
            plan to invite three researchers (Xavier Lambein, Tomoya Matsuura,
            and Baku Hashimoto) who have worked on{" "}
            <strong>
              programmable creativity support tools for artistic work
            </strong>
            . The format will be a one-day online seminar on Zoom Webinar,
            consisted of invited talks followed by a panel discussion on the
            future of creativity support tools.
          </p>
        </>
      ),
    [ja],
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
