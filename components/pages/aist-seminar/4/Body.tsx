import Head from "next/head";
import { FC } from "react";
import { Breadcrumb, Container, Divider } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { PageFooter } from "../../../PageFooter";
import { PageHeader } from "../../../PageHeader";
import { SIGCHISegment } from "../SIGCHISegment";
import { AboutSegment } from "./AboutSegment";
import { HeroSegment } from "./HeroSegment";
import { InvitedSpeakersSegment } from "./InvitedSpeakersSegment";
import { ReferencesSegment } from "./ReferencesSegment";
import { RegistrationBox } from "./RegistrationBox";
import { TimetableSegment } from "./TimetableSegment";

export const Body: FC = () => {
  const { site: origSite, ja } = useSiteInfo();
  const site = ja
    ? {
        ...origSite,
        title: "AIST Creative HCI Seminar #4",
        translatedTitle: "第四回 AIST Creative HCI Seminar",
        description:
          "このサイトでは第四回 AIST Creative HCI Seminarの動画アーカイブと紹介を掲載しています。第三回は「ACM CHI 2023振り返り」がテーマで、CHIの様々なプログラムで発表した若手研究者（鳴海さん、矢倉さん、元村さん）をお呼びして、招待講演とパネルセッションを行いました。",
        image: "/images/4-hero.jpg",
      }
    : {
        ...origSite,
        title: "AIST Creative HCI Seminar #4",
        translatedTitle: undefined,
        description:
          "This website provides the archived video and introduction of the AIST Creative HCI Seminar #4, held to collectively understand ACM CHI 2023, the premier and huge conference on Human-Computer Interaction. It invited three bright and young Japan-based researchers: Ami Motomura, Hiromu Yakura, and Koya Narumi.",
        image: "/images/4-hero.jpg",
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
          <HeroSegment />
        </Container>
      </div>
      <Container>
        <RegistrationBox />
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
