import { FC } from "react";
import { Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";

export const HeroSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment basic>
      {ja ? (
        <>
          <p>
            国立研究開発法人
            産業技術総合研究所（産総研）では、AI時代における人間の重要な役割である「創造性」を発揮させるための技術開発に取り組んでいます。
          </p>
          <p>
            本セミナーシリーズでは、国際的に活躍する Human-Computer Interaction
            分野の新星を招き、創造性支援研究に直接/間接に関わる多様なトピックを取り上げます。
            本セミナーは、日本を拠点とする著名なHCI研究者のアドバイザリーボードに支えられています。
          </p>
        </>
      ) : (
        <>
          <p>
            At AIST (National Institute of Advanced Industrial Science and
            Technology), we strive to develop technologies that help people
            unleash their creativity, which should be the prominent role of
            human beings in the age of AI.
          </p>
          <p>
            This seminar series will invite rising stars in the Human-Computer
            Interaction field and cover diverse topics which are
            directly/indirectly connected to creativity support research. The
            seminar series is supported by the advisory board of senior and
            prestigious HCI researchers based in Japan.
          </p>
        </>
      )}
    </Segment>
  );
};
