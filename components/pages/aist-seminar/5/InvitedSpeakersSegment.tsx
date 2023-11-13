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
        name: "Xavier Lambein",
        affiliation: "Artist and programmer",
        photoPath: "/images/5-xavier-lambein.jpg",
        bio: ja
          ? "ブリュッセル出身のアーティスト兼プログラマーで、プログラミング言語とHuman-Computer Interactionに関心を持つ。現在の研究は、芸術作品の表現媒体としてのプログラミングと、その行為を豊かで組み合わせ容易なインタフェースによって実現する手法に焦点を当てている。"
          : "Xavier Lambein is an artist and programmer from Brussels, interested in programming languages and human-computer interaction. His current research focuses on programming as a medium for artistic work, and how it can be augmented with rich, composable interfaces.",
        link: "https://lambein.xyz",
      },
      {
        name: ja ? "松浦 知也" : "Tomoya Matsuura",
        affiliation: ja
          ? "サウンドメイカー / 東京藝術大学 芸術情報センター"
          : "SoundMaker / Art Media Center, Tokyo University of the Arts",
        photoPath: "/images/5-tomoya-matsuura.jpg",
        bio: ja
          ? "SoundMaker:音や音を作るための環境を作る人。音に関わるメディア・インフラストラクチャ技術を実践を交え批評的にデザインする活動を「音楽土木工学」と称して研究。ハウリングだけで音を出す自作電子楽器「Exidiophone」などを用いての演奏活動、音楽プログラミング言語「mimium」、プログラマブルな音楽制作ソフトウェア「otopoiesis」の設計と開発のほか、近年はDIY半導体の制作に取り組む。"
          : 'Tomoya Matsuura is SoundMaker: who makes sound and the environments for making sound. He argues the research field "Civil Engineering of Music" that re-design a technological infrastructure involved with sound through critical making. His activities vary from the performance using a self-made instrument, "Exidiophone" which only uses audio feedback as a source, to the development of sound programming language, "mimium" and a programmable digital audio design environment, "otopoiesis". Recently, he has also been trying to make a DIY semiconductor.',
        link: "https://matsuuratomoya.com",
      },
      {
        name: ja ? "橋本 麦" : "Baku Hashmoto",
        affiliation: ja
          ? "映像作家 / INS Studio, 産業技術総合研究所"
          : "Visual artist / INS Studio, AIST",
        photoPath: "/images/5-baku-hashimoto.png",
        bio: ja
          ? "映像作家、ビジュアル・アーティスト、ツール開発者。CGIからコマ撮りアニメーション、ハードウェア、インタラクティブ作品まで、多岐に渡って個人で制作を続ける。さまざまな表現手法の実験の積み重ねにより、多様な視覚表象のスタイルを模索している。この数年はデザインプログラミング環境 Glisp の開発にも没頭。"
          : "Baku Hashimoto is a Tokyo-based video director, visual artist, and tool developer. With a background in both digital arts and filmmaking, he explores a broad spectrum of creative mediums, ranging from CGI and stop-motion to web-based projects and generative art. Through continuous experimentation with various techniques and forms of expression, he delves into diverse styles of visual arts. In recent years, he has also been working in the development of the design programming environment, Glisp.",
        link: "https://baku89.com",
      },
    ],
    []
  );
  return <GenericInvitedSpeakersSegment bare={bare} list speakers={speakers} />;
};
