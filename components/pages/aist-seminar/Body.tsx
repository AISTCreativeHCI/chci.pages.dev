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
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site.image} />
        <meta property="twitter:title" content={site.title} />
        <meta property="twitter:description" content={site.description} />
        <meta property="twitter:image" content={site.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="utf-8" />
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
