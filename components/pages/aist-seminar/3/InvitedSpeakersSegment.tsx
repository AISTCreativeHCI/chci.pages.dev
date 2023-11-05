import { FC, useMemo } from "react";

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
        name: ja ? "鳴海 紘也" : "Koya Narumi",
        affiliation:
          "Project Assistant Professor, Graduate School of Engineering, The University of Tokyo",
        photoPath: "/images/3-koya-narumi.jpg",
        link: "https://narumi.me/profile",
      },
      {
        name: ja ? "矢倉 大夢" : "Hiromu Yakura",
        affiliation: "University of Tsukuba",
        photoPath: "/images/3-hiromu-yakura.jpg",
        link: ja
          ? "https://yumetaro.info/index.ja.xhtml"
          : "https://yumetaro.info",
      },
      {
        name: ja ? "元村 愛美" : "Motomura Ami",
        affiliation: "Ochanomizu University",
        photoPath: "/images/circle-user-solid.svg",
      },
    ],
    []
  );
  return <GenericInvitedSpeakersSegment bare={bare} list speakers={speakers} />;
};
