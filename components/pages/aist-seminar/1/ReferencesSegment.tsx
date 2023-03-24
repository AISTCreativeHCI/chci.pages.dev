import { FC } from "react";

import { ReferencesSegment as GenericReferencesSegment } from "../ReferencesSegment";

export const ReferencesSegment: FC = () => (
  <GenericReferencesSegment
    publications={[
      {
        pre: "Jonas Frich, Lindsay MacDonald Vermeulen, Christian Remy, Michael Mose Biskjaer, and Peter Dalsgaard. 2019.",
        title: "Mapping the Landscape of Creativity Support Tools in HCI",
        post: "In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (CHI '19). Association for Computing Machinery, New York, NY, USA, Paper 389, 1–18.",
        url: "https://doi.org/10.1145/3290605.3300619",
      },
      {
        pre: "Zhicong Lu, Chenxinran Shen, Jiannan Li, Hong Shen, and Daniel Wigdor. 2021.",
        title:
          "More Kawaii than a Real-Person Live Streamer: Understanding How the Otaku Community Engages with and Perceives Virtual YouTubers",
        post: "In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (CHI '21). Association for Computing Machinery, New York, NY, USA, Article 137, 1–14.",
        url: "https://doi.org/10.1145/3411764.3445660",
      },
    ]}
  />
);
