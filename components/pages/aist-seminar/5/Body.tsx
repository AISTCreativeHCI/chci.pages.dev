import Head from "next/head";
import { FC } from "react";
import { Breadcrumb, Container, Divider } from "semantic-ui-react";

import { PageFooter } from "../../../PageFooter";
import { PageHeader } from "../../../PageHeader";
import { useSiteInfo } from "../../../lib/useSiteInfo";
import { Alertbox } from "../Alertbox";
import { GenericHeroSegment } from "../GenericHeroSegment";
import { SIGCHISegment } from "../SIGCHISegment";
import { AboutSegment } from "./AboutSegment";
import { InvitedSpeakersSegment } from "./InvitedSpeakersSegment";
import { ReferencesSegment } from "./ReferencesSegment";
import { TimetableSegment } from "./TimetableSegment";

export const Body: FC = () => {
  const { site: origSite, ja } = useSiteInfo();
  const site = ja
    ? {
        ...origSite,
        title: "AIST Creative HCI Seminar #5",
        translatedTitle: "第五回 AIST Creative HCI Seminar",
        description:
          "このサイトでは第五回 AIST Creative HCI Seminarの紹介を掲載しています。第五回は「芸術表現のための創造性支援ツール」がテーマで、芸術表現、とくに音楽や映像を制作するためのツールの研究開発に取り組まれてきた三名をお呼びして、招待講演とパネルセッションを行いました。",
        image: "/images/5-hero.jpg",
      }
    : {
        ...origSite,
        title: "AIST Creative HCI Seminar #5",
        translatedTitle: undefined,
        description:
          "This website provides the archived video and introduction of the AIST Creative HCI Seminar #5, held to discuss creativity support tools for artistic work. It invited three researchers: Xavier Lambein, Tomoya Matsuura, and Baku Hashimoto.",
        image: "/images/5-hero.jpg",
      };
  return (
    <>
      <Head>
        <title key="title">{site.translatedTitle || site.title}</title>
        <meta name="description" content={site.description} key="description" />
        <meta
          property="og:title"
          content={site.translatedTitle || site.title}
        />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site.image} />
        <meta
          property="twitter:title"
          content={site.translatedTitle || site.title}
        />
        <meta property="twitter:description" content={site.description} />
        <meta property="twitter:image" content={site.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="utf-8" />
        <link rel="icon" href={site.favicon} />
      </Head>
      <PageHeader />
      <div className="hero">
        <Container>
          <GenericHeroSegment index={4} />
        </Container>
      </div>
      <Container>
        <Alertbox>
          <p>
            {ja
              ? "本ページはアーカイブ目的で提供されており、主に開催前時点での情報が掲載されています。"
              : "This page is provided for archival purposes and contains information as of a point in time prior to the event."}
          </p>
        </Alertbox>
        <AboutSegment />
        <InvitedSpeakersSegment />
        <TimetableSegment />
        <ReferencesSegment />
        <Divider />
        <SIGCHISegment basic />
        <Divider />
        <Breadcrumb>
          <Breadcrumb.Section
            link
            href={ja ? "/aist-seminar" : "/aist-seminar/en"}
          >
            AIST Creative HCI Seminar
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section>
            {site.translatedTitle || site.title}
          </Breadcrumb.Section>
        </Breadcrumb>
      </Container>
      <PageFooter />
    </>
  );
};
