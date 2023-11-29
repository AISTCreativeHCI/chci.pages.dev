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
            午後1時から開催します。東京大学 目白台インターナショナル・ビレッジに
            <a href="https://pixelmaid.github.io/personalweb">
              Jennifer Jacobs
            </a>
            氏と<a href="https://narumi.me">鳴海 紘也</a>
            氏をお招きする現地開催のセミナーとなります。（ご都合がつかない方のため、オンライン配信も予定しています。）
          </p>
          <p>
            Jennifer
            Jacobs氏は、プログラマブルなグラフィックツールや陶芸家の新たなワークフローを実現する3Dプリンタ開発などの創造性支援研究に取り組んできました。
            また、鳴海
            紘也氏は、素材開発からインタラクション設計まで幅広いデジタルファブリケーション研究について顕著な研究業績を挙げてきました。お二人はデジタルファブリケーションに関する研究上の興味が近いだけでなく、芸術家や産業界などの「現場
            (in the wild)」を志向する研究アプローチも共通しています。
          </p>
          <p>
            今回のセミナーは、アカデミアの中だけで終わらない研究の実践について知り、考えを深める機会になるはずです。HCI分野の前提知識がなくても、研究者でなくても楽しめる内容になりますので、ぜひお気軽にお越しください。
          </p>
        </>
      ) : (
        <>
          <p>
            The sixth edition of the AIST Creative HCI Seminar will be held on{" "}
            <strong>December 13 (Wed), 2023</strong>. For this edition, we plan
            to invite{" "}
            <a href="https://pixelmaid.github.io/personalweb">
              Jennifer Jacobs
            </a>{" "}
            and <a href="https://narumi.me">Koya Narumi</a> at the University of
            Tokyo's facility. (For those who cannot make it, we will also be
            streaming online.)
          </p>
          <p>
            Jennifer has worked on developing programmable tools for visual
            artists and collaborating with ceramic artists on computational
            ceramic technologies. Koya has worked on a wide range of digital
            fabrication research, from materials development to interaction
            design. In addition to their shared interest in digital fabrication,
            they share a research approach of conducting research in close
            collaboration with practitioners and industry.
          </p>
          <p>
            This particular edition of the seminar will provide an opportunity
            to learn and deepen thoughts about research practices that do not
            end up in academia &mdash; HCI research "in the wild." It would be
            an interesting and inspiring edition that does not even require
            prior knowledge of the HCI field.
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
