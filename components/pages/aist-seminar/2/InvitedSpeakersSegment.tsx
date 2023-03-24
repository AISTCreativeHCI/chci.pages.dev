import { FC, useMemo } from "react";
import { Icon } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { InvitedSpeakersSegment as GenericInvitedSpeakersSegment } from "../InvitedSpeakersSegment";

interface IProps {
  bare?: boolean;
}

export const InvitedSpeakersSegment: FC<IProps> = ({ bare }) => {
  const { ja } = useSiteInfo();
  const speakers = useMemo(
    () => [
      {
        name: "Amy Pavel",
        affiliation:
          "Assistant Professor, Department of Computer Science, The University of Texas at Austin",
        photoPath: "/images/2-amy-pavel.png",
        bio: (
          <>
            {ja && (
              <p>
                Amy
                Pavel氏は、機械学習の応用により動画の視聴・編集など様々なインタラクションを便利にする技術を開発し、構築したシステムを使ってユーザスタディし、将来のシステム設計への示唆を提示する「システム研究者（systems
                researcher）」です。
              </p>
            )}
            <p>
              Amy Pavel is an Assistant Professor in the Department of Computer
              Science at The University of Texas at Austin. As a systems
              researcher in Human-Computer Interaction, she embeds machine
              learning technologies into new human interactions that she then
              deploys to test and conduct in-depth user studies to inform future
              system designs. Her long-term research goal is to make
              communication more effective and accessible to all.
            </p>
            <p>
              <a href="https://amypavel.com/">
                <Icon name="globe" /> {ja ? "Webサイト" : "Website"}
              </a>
            </p>
          </>
        ),
      },
      {
        name: "Xingyu Bruce Liu",
        affiliation:
          "Department of Electrical & Computer Engineering, University of California, Los Angeles",
        photoPath: "/images/2-xingyu-bruce-liu.jpg",
        bio: (
          <>
            {ja && (
              <p>
                Xingyu "Bruce"
                Liu氏は、AI技術で動画コンテンツの内容理解を行い、視覚に頼らなくても理解できる度合いを自動計算したり、そうした度合いを高めるためのインタラクションを設計したりする応用研究を行ってきた新進気鋭の博士課程学生です。
              </p>
            )}
            <p>
              Xingyu "Bruce" Liu is a Ph.D. student at the UCLA HCI lab advised
              by Professor Xiang 'Anthony' Chen. His research explores
              Human-Computer Interaction in multimodal contexts. During the
              first three years of his Ph.D., Bruce has designed and developed
              human-AI systems in three application domains: making visual
              content accessible to non-visual users, and supporting and
              augmenting interpersonal communication.
            </p>
            <p>
              <a href="https://liubruce.me/">
                <Icon name="globe" /> {ja ? "Webサイト" : "Website"}
              </a>
            </p>
          </>
        ),
      },
    ],
    []
  );
  return <GenericInvitedSpeakersSegment bare speakers={speakers} />;
};
