import { FC, useMemo } from "react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { InvitedSpeakersSegment as GenericInvitedSpeakersSegment } from "../InvitedSpeakersSegment";

interface IProps {
  bare?: boolean;
}

export const InvitedSpeakersSegment: FC<IProps> = ({ bare }) => {
  const { ja } = useSiteInfo();
  return (
    <GenericInvitedSpeakersSegment
      bare={bare}
      speakers={5}
      bios={
        ja
          ? [
              <p>
                Jennifer Jacobs 氏は Expressive Computation Lab の{" "}
                <abbr title="Principal Investigator">PI</abbr>{" "}
                です。同ラボでは、コンピュータを活用した制作やデジタルファブリケーションの新手法を、古典的な素材や手作業、試行錯誤を繰り返す設計手法と組み合わせられるような、新たなツールや抽象表現、そしてシステムを開発しています。コンピュータを用いたデザイン、芸術、工芸、製造工程を、表現力豊かなものとする方法を研究しています。
              </p>,
              <p>
                鳴海
                紘也氏は、計算による設計とデジタルファブリケーションを組み合わせることによって
                <a href="https://youtu.be/2rY-XNBnTW4">
                  自動的に折れる複雑な折紙シート
                </a>
                [ACM TOCHI][ACM TOG] や
                <a href="https://youtu.be/HgFTZsKX2k4">
                  風船のように膨らむ乗り物
                </a>{" "}
                [ACM UIST]
                を実現してきました。研究としての成果だけでなく、その後の産業応用や展示を見据えたアプローチを学ぶ機会となるはずです。
              </p>,
            ]
          : [
              <p>
                Jennifer Jacobs is Assistant Professor at the University of
                California Santa Barbara in Media Arts and Technology and
                Computer Science (by courtesy). At UCSB, she directs the
                Expressive Computation Lab, which investigates ways to support
                expressive computer-aided design, art, craft, and manufacturing
                by developing new computational tools, abstractions, and systems
                that integrate emerging forms of computational creation and
                digital fabrication with traditional materials, manual control,
                and non-linear design practices.
              </p>,
              <p>
                Koya Narumi is a project assistant professor at The Graduate
                School of Engineering, The University of Tokyo. He combines
                computational design and digital fabrication to achieve unique
                products such as{" "}
                <a href="https://youtu.be/2rY-XNBnTW4">
                  self-foldable complex origami sheets
                </a>{" "}
                [ACM TOCHI][ACM TOG] and{" "}
                <a href="https://youtu.be/HgFTZsKX2k4">
                  inflatable mobility devices
                </a>{" "}
                [ACM UIST]. He also actively applies his research results to
                industry, design, and art.
              </p>,
            ]
      }
    />
  );
};
