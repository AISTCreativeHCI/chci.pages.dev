import Head from "next/head";
import { FC } from "react";
import { Container, Header } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";
import { PageFooter } from "../../PageFooter";
import { PageHeader } from "../../PageHeader";
import { FirstEditionSegment } from "./FirstEditionSegment";
import { HeroSegment } from "./HeroSegment";

export const Body: FC = () => {
  const { site } = useSiteInfo();
  return (
    <>
      <Head>
        <title key="title">{site.title}</title>
        <meta name="description" content={site.description} key="description" />
      </Head>
      <PageHeader />
      <div className="hero">
        <Container>
          <Header as="h1" content={site.title} />
          <HeroSegment />
        </Container>
      </div>
      <Container>
        <FirstEditionSegment />
      </Container>
      <PageFooter />
    </>
  );
};
