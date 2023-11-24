import Head from "next/head";
import { FC } from "react";
import { Container, Segment } from "semantic-ui-react";

import { PageFooter } from "../../../PageFooter";
import { PageHeader } from "../../../PageHeader";
import { useSiteInfo } from "../../../lib/useSiteInfo";

import { Team } from "./Team";
import advisors from "./advisory-board.json";
import team from "./team.json";

export const Body: FC = () => {
  const { language, ja, site } = useSiteInfo();
  return (
    <>
      <Head>
        <title key="title">{site.title}</title>
        <meta name="description" content={site.description} key="description" />
      </Head>
      <PageHeader />
      <div className="hero">
        <Container>
          <Segment basic>
            {ja ? (
              <>
                <p>
                  本セミナーシリーズは、運営チームおよびアドバイザリーボードのご協力のもと、産総研が主催しています。
                </p>
              </>
            ) : (
              <>
                <p>
                  This seminar series is brought to you by AIST with the support
                  of the following team and advisory board.
                </p>
              </>
            )}
          </Segment>
        </Container>
      </div>
      <Container>
        <Segment>
          <h2>{ja ? "チーム" : "Team"}</h2>
          <Team team={team} language={language} />
        </Segment>
        <Segment>
          <h2>{ja ? "アドバイザリーボード" : "Advisory Board"}</h2>
          <Team team={advisors} language={language} />
        </Segment>
        <Segment color="red">
          <h2>{ja ? "連絡先" : "Contact"}</h2>
          {ja ? (
            <p>
              お問い合わせは、{" "}
              <a href="mailto:M-aistcreativehci-ml@aist.go.jp">
                M-aistcreativehci-ml@aist.go.jp
              </a>{" "}
              までお願いします。
            </p>
          ) : (
            <p>
              All inquiry should be sent to{" "}
              <a href="mailto:M-aistcreativehci-ml@aist.go.jp">
                M-aistcreativehci-ml@aist.go.jp
              </a>
              .
            </p>
          )}
        </Segment>
      </Container>
      <PageFooter />
    </>
  );
};
