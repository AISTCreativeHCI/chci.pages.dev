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
            第六回 AIST Creative HCI Seminarは、
            <a href="https://sigchi.jp/seminar/uist2023/">UIST2023勉強会</a>
            開催と同じ週の<strong>2023年12月13日（水）</strong>
            午後に開催します。形式は、東京大学関連施設（詳細は近日公開）にお越しいただくか、Zoom
            Webinarでのオンラインストリーミングをご覧いただくハイブリッドワークショップとなります。
          </p>
          <p>
            今回は、芸術家とタッグを組んで研究を進めたり、産業界と連携して研究成果を社会実装したりといった経験のある
            <a href="https://pixelmaid.github.io/personalweb">
              Jennifer Jacobs
            </a>
            氏と<a href="https://narumi.me">鳴海 紘也</a>
            氏の2名を会場にお招きします。それぞれ、プログラマブルなグラフィックツールや陶芸家の新たなワークフローを実現する3Dプリンタ開発などの創造性支援研究について、また、素材開発からインタラクション設計まで幅広いデジタルファブリケーション研究について、顕著な研究業績を挙げながら、インタラクション技術が必要とされる「現場
            (in the wild)」にも意識を向けてきた研究者です。
          </p>
          <p>
            HCI分野の前提知識がなくても楽しめる内容になりますので、人とコンピュータの関係を考え、よりよくしていくHCI分野の最前線を知り、考えを深める機会となる本セミナーに、ぜひお越しください。
          </p>
        </>
      ) : (
        <>
          <p>
            The sixth edition of the AIST Creative HCI Seminar will be held on{" "}
            <strong>December 13 (Wed), 2023</strong>. For this edition, we plan
            to invite two edge runners of the HCI research &quot;in the
            wild&quot; &mdash;{" "}
            <a href="https://pixelmaid.github.io/personalweb">
              Jennifer Jacobs
            </a>{" "}
            and <a href="https://narumi.me">Koya Narumi</a>, both working
            closely with practitioners and industry while actively publishing
            papers at top-tier academic venues.
          </p>
          <p>
            The format will be a one-day hybrid workshop &mdash; attendees can
            either visit a venue in Tokyo, Japan, or watch online streaming on
            Zoom Webinar.
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
        content={ja ? "第六回セミナーについて" : "About the sixth edition"}
      />
      {content}
    </Segment>
  );
};
