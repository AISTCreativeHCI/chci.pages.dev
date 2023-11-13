import { FC, useMemo } from "react";

import { ReferencesSegment as GenericReferencesSegment } from "../ReferencesSegment";
import { useSiteInfo } from "../../../lib/useSiteInfo";

interface IProps {
  bare?: boolean;
}

export const ReferencesSegment: FC<IProps> = ({ bare }) => {
  const { ja } = useSiteInfo();
  const publications = useMemo(() => {
    const pubs = [
      {
        pre: "Xavier Lambein. 2023.",
        title: "PAW: a programmable and visual audio workstation",
        post: "In Proceedings of the 9th Workshop on Live Programming Systems (LIVE 2023, October 2023).",
        url: "https://lambein.xyz/paw-live2023",
      },
      {
        pre: "Matsuura, Tomoya, and Kazuhiro Jo. 2021.",
        title:
          "Mimium: A Self-Extensible Programming Language for Sound and Music",
        post: "In Proceedings of the ACM SIGPLAN International Workshop on Functional Art, Music, Modeling, and Design (FARM 2021, August 2021).",
        url: "https://doi.org/10.1145/3471872.3472969",
      },
    ];
    if (ja) {
      pubs.push({
        pre: "[著] 松浦 知也 [編著] 永冨真梨/忠聡太/日高良祐. 2022.",
        title: "クリティカル・ワード　ポピュラー音楽",
        post: "フィルムアート社, 第3部-8  「プログラミング」の項.",
        url: "",
      });
    }
    return pubs;
  }, [ja]);
  return (
    <GenericReferencesSegment
      bare={bare}
      description={null}
      publications={publications}
    />
  );
};
