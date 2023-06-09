import Head from "next/head";
import { FC } from "react";
import { Container, Image } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { PageFooter } from "../../../PageFooter";
import { PageHeader } from "../../../PageHeader";
import { HeroSegment as SecondEditionHeroSegment } from "../2/HeroSegment";
import { HeroSegment as ThirdEditionHeroSegment } from "../3/HeroSegment";
import { HeroSegment as FourthEditionHeroSegment } from "../4/HeroSegment";
import { SIGCHISegment } from "../SIGCHISegment";
import { EditionSegment } from "./EditionSegment";
import { FirstEditionSegment } from "./FirstEditionSegment";
import { HeroSegment } from "./HeroSegment";

export const Body: FC = () => {
  const { site, ja } = useSiteInfo();
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
        <EditionSegment>
          <FourthEditionHeroSegment fullWidth />
        </EditionSegment>
        <EditionSegment
          text={ja ? "第三回について詳しく" : "More details"}
          link={ja ? "/aist-seminar/3" : "/aist-seminar/en/3"}
        >
          <ThirdEditionHeroSegment fullWidth />
        </EditionSegment>
        <EditionSegment
          text={ja ? "第二回について詳しく" : "More details"}
          link={ja ? "/aist-seminar/2" : "/aist-seminar/en/2"}
        >
          <SecondEditionHeroSegment fullWidth />
        </EditionSegment>
        <FirstEditionSegment />
        <SIGCHISegment />
      </Container>
      <PageFooter />
    </>
  );
};
