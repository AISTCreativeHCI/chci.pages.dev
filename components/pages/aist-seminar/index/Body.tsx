import Head from "next/head";
import { FC } from "react";
import { Container, Image, Menu } from "semantic-ui-react";

import { PageFooter } from "../../../PageFooter";
import { PageHeader } from "../../../PageHeader";
import { useSiteInfo } from "../../../lib/useSiteInfo";
import { SIGCHISegment } from "../SIGCHISegment";
import { EditionSegments } from "./EditionSegments";
import { HeroSegment } from "./HeroSegment";
import { SpeakersList } from "./SpeakersList";

interface IProps {
  bySpeaker?: boolean;
}

export const Body: FC<IProps> = ({ bySpeaker }) => {
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
        <Menu fluid>
          {!ja && <Menu.Item disabled>View</Menu.Item>}
          <Menu.Item
            active={!bySpeaker}
            as={bySpeaker ? "a" : undefined}
            href={bySpeaker ? `/aist-seminar${ja ? "" : "/en"}` : undefined}
          >
            {ja ? "各回の紹介" : "By edition"}
          </Menu.Item>
          <Menu.Item
            active={bySpeaker}
            as={bySpeaker ? undefined : "a"}
            href={
              bySpeaker ? undefined : `/aist-seminar${ja ? "" : "/en"}/speakers`
            }
          >
            {ja ? "講演者の紹介" : "By speaker"}
          </Menu.Item>
        </Menu>
        {bySpeaker ? <SpeakersList /> : <EditionSegments />}
        <SIGCHISegment />
      </Container>
      <PageFooter />
    </>
  );
};
