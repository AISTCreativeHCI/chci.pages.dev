import { FC } from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";

import styles from "./InvitedSpeakersSegment.module.css";

export const InvitedSpeakersSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment basic>
      <a id="invited-speakers" className="anchor"></a>
      <Header
        as="h2"
        dividing
        content={ja ? "招待講演者" : "Invited speakers"}
      />
      <Grid columns={2} stackable className={styles.speakers}>
        <Grid.Column>
          <Header
            as="h4"
            image={
              <Image
                src="/images/1-jonas-frich.jpg"
                alt="[Photo: Jonas Frich]"
              />
            }
            content="Jonas Frich"
            subheader="Digital Design &
                Information Studies, Aarhus University"
          />
          {ja && (
            <p>
              Jonas Frich氏は、Human-Computer Interaction (HCI)
              分野における20年にわたる創造性支援研究（143論文）を分析した{" "}
              <a href="https://doi.org/10.1145/3290605.3300619">
                "Mapping the Landscape of Creativity Support Tools in HCI"
              </a>{" "}
              [CHI 2019]
              などの論文があり心理学分野の背景を持つHCI研究者です。Jonas氏の講演は、創造性支援研究のこれまでを知り、これからを考える、またとない機会になるはずです。
            </p>
          )}
          <p>
            Jonas Frich is an Assistant Professor at Digital Design &amp;
            Information Studies, Aarhus University, Denmark. He is an expert on
            the intersecting fields of creativity research and Human-Computer
            Interaction and is driven by the ambition to improve more people to
            be more creative using technology.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Header
            as="h4"
            image={
              <Image src="/images/1-zhicong-lu.jpg" alt="[Photo: Zhicong Lu]" />
            }
            content="Zhicong Lu"
            subheader="Department of
                Computer Science, City University of Hong Kong"
          />
          {ja && (
            <p>
              Zhicong Lu氏はVTuberとファンの関係を調べた{" "}
              <a href="https://doi.org/10.1145/3411764.3445660">
                "More Kawaii than a Real-Person Live Streamer"
              </a>{" "}
              [CHI 2021] や{" "}
              <a href="https://doi.org/10.1145/3474711">
                「どうぶつの森」の社会動態を調べた論文
              </a>{" "}
              などの著者で、コンピュータが可能にした創造的活動を社会科学的視点で分析してきたHCI研究者です。Zhicong氏の講演は、文化に深く根差したコンピュータの利活用法を知り、その調査手法を学ぶ稀有な機会になるはずです。
            </p>
          )}
          <p>
            Zhicong Lu is an Assistant Professor at the Department of Computer
            Science, City University of Hong Kong. His research has been
            exploring the potential of leveraging livestreaming for supporting
            knowledge sharing, creativity, and intangible cultural heritage
            preservation. He is especially interested in understanding social
            interactions that are critical to user engagement with livestreaming
            communities.
          </p>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};
