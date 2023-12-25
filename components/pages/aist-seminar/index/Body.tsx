import Head from "next/head";
import { FC } from "react";
import { Container, Image } from "semantic-ui-react";

import { PageFooter } from "../../../PageFooter";
import { PageHeader } from "../../../PageHeader";
import { useSiteInfo } from "../../../lib/useSiteInfo";
import { SIGCHISegment } from "../SIGCHISegment";
import { EditionSegment } from "./EditionSegment";
import { HeroSegment } from "./HeroSegment";

export const Body: FC = () => {
  const { site: origSite, ja } = useSiteInfo();
  const site = {
    ...origSite,
    image: "/images/6-hero.jpg",
  };
  const editionSegments = new Array(6)
    .fill(null)
    .map((_, i) => <EditionSegment key={i} index={5 - i} />);
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
        <link rel="icon" href={site.favicon} />
      </Head>
      <PageHeader withoutBrand />
      <div className="hero">
        <Container>
          <h1>
            <Image
              fluid
              src="/aist-creative-hci-seminar-logo-text-outlined.svg"
              alt={site.title}
            />
          </h1>
          <HeroSegment />
        </Container>
      </div>
      <Container>
        {editionSegments}
        <SIGCHISegment />
      </Container>
      <PageFooter />
    </>
  );
};
