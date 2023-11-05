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
        name: ja ? "原 航太郎" : "Kotaro Hara",
        affiliation:
          "Assistant Professor, School of Computing and Information Systems, Singapore Management University",
        photoPath: "/images/circle-user-solid.svg",
        link: "https://kotarohara.com",
      },
      {
        name: ja ? "荒川 陸" : "Riku Arakawa",
        affiliation:
          "Human-Computer Interaction Institute, Carnegie Mellon University",
        photoPath: "/images/4-riku-arakawa.jpg",
        link: "https://rikky0611.github.io",
      },
      {
        name: ja ? "中川 茉奈美" : "Manami Nakagawa",
        affiliation: "Dept. of Computer Science, University of Bristol",
        photoPath: "/images/4-manami-nakagawa.jpg",
      },
    ],
    []
  );
  return <GenericInvitedSpeakersSegment bare={bare} list speakers={speakers} />;
};
