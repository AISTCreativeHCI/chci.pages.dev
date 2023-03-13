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
        content={ja ? "第一回セミナーについて" : "About the first edition"}
      />
      {ja ? (
        <>
          <p>
            第一回 AIST Creative HCI Seminarは、
            <a href="https://www.interaction-ipsj.org/2023/">
              インタラクション 2023
            </a>
            開催前日の<strong>2023年3月7日（火）</strong>
            午後1時から開催します。形式は、東京大学本郷キャンパス
            構内の会場（福武ラーニングシアター）にお越しいただくか、YouTube
            Liveでのオンラインストリーミングをご覧いただくハイブリッドワークショップとなります。
          </p>
          <p>
            記念すべき第一回では、 Human-Computer Interaction (HCI)
            分野のトップ国際会議で活発に論文を発表している、創造性に関する学際研究のエッジランナーとしてJonas
            Frich氏とZhicong
            Lu氏の2名を会場にお招きします。それぞれ、HCI分野における創造性支援研究の歴史と今後の展望について、また、VTuberや「どうぶつの森」など文化に深く根差したコンピュータの利活用法について顕著な業績がある研究者です。
            HCI分野の前提知識がなくても楽しめる内容になりますので、人とコンピュータの関係を考え、よりよくしていくHCI分野の最前線を知り、考えを深める機会となる本セミナーに、ぜひお越しください。
          </p>
        </>
      ) : (
        <>
          <p>
            The first edition of the AIST Creative HCI Seminar will be held on{" "}
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
