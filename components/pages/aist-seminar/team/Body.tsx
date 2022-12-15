import Head from "next/head";
import { FC } from "react";
import { Container, Header, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { PageHeader } from "../../../PageHeader";
import { PageFooter } from "../../../PageFooter";

export const Body: FC = () => {
  const { ja, site } = useSiteInfo();
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
                  本セミナーは、運営チームおよびアドバイザリーボードのご協力のもと、産総研が主催しています。
                </p>
              </>
            ) : (
              <>
                <p>
                  This seminar is brought to you by AIST with support from the
                  following team and advisory board.
                </p>
              </>
            )}
          </Segment>
        </Container>
      </div>
      <Container>
        <Segment>
          <h2>{ja ? "チーム" : "Team"}</h2>
          <p>TBA</p>
        </Segment>
        <Segment>
          <h2>{ja ? "アドバイザリーボード" : "Advisory Board"}</h2>
          <p>TBA</p>
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
