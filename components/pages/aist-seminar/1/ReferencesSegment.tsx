import { FC } from "react";
import { Header, List, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";

export const ReferencesSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment basic>
      <a id="references" className="anchor"></a>
      <Header as="h2" dividing content={ja ? "参考文献" : "References"} />
      {ja ? (
        <p>招待講演者の発表文献一覧からの抜粋です。</p>
      ) : (
        <p>Example publications from the invited speakers are listed below.</p>
      )}
      <List relaxed ordered>
        <List.Item>
          Jonas Frich, Lindsay MacDonald Vermeulen, Christian Remy, Michael Mose
          Biskjaer, and Peter Dalsgaard. 2019.{" "}
          <a href="https://doi.org/10.1145/3290605.3300619">
            Mapping the Landscape of Creativity Support Tools in HCI
          </a>
          . In Proceedings of the 2019 CHI Conference on Human Factors in
          Computing Systems (CHI '19). Association for Computing Machinery, New
          York, NY, USA, Paper 389, 1–18.
        </List.Item>
        <List.Item>
          Zhicong Lu, Chenxinran Shen, Jiannan Li, Hong Shen, and Daniel Wigdor.
          2021.{" "}
          <a href="https://doi.org/10.1145/3411764.3445660">
            More Kawaii than a Real-Person Live Streamer: Understanding How the
            Otaku Community Engages with and Perceives Virtual YouTubers
          </a>
          . In Proceedings of the 2021 CHI Conference on Human Factors in
          Computing Systems (CHI '21). Association for Computing Machinery, New
          York, NY, USA, Article 137, 1–14.
        </List.Item>
      </List>
    </Segment>
  );
};
