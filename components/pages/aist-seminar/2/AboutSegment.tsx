import { FC } from "react";
import { Header, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";

export const AboutSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment basic>
      <a id="about" className="anchor"></a>
      <Header
        as="h2"
        dividing
        content={ja ? "第二回セミナーについて" : "About the second edition"}
      />
      {ja ? (
        <>
          <p>
            本セミナーの第二回目は、
            <strong>2023年4月14日（金）午前10時</strong>
            から開催します。形式は、Zoom
            Webinarでのオンラインストリーミングをご覧いただくオンラインのワークショップとなります。今回は、
            <strong>
              AI技術の応用によって初めて可能になるインタラクション
            </strong>
            を研究し、HCI分野のトップ国際会議で活発に論文を発表してきた若手研究者2名をお呼びします。
          </p>
          <p>
            なお、お二人は
            <a href="https://doi.org/10.1145/3526113.3545703">
              昨年のUIST 2022でBest Paper Awardを受賞した論文
            </a>
            の共著者であり、アメリカ西海岸と中南部の大学に所属する助教と博士課程学生です。講演に続いてパネルセッションを予定しており、聴衆から質問を受け付けますので、アメリカでの大学院生活や、大学の垣根を越えた協力関係の築き方などを聞くチャンスです。ぜひ活発な質疑をお願いいたします。
          </p>
        </>
      ) : (
        <>
          <p>
            The seminar's second edition will be held on{" "}
            <strong>April 14 (Fri), 2023</strong>. For the second edition, we
            plan to invite two rising stars on research of applying AI
            technologies for novel interaction techniques who have actively
            published papers at top-tier HCI venues. The format will be a
            one-day online seminar on Zoom Webinar.
          </p>
        </>
      )}
    </Segment>
  );
};
