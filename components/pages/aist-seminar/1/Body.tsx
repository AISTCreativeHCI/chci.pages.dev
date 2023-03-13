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
import { TimetableSegment } from "./TimetableSegment";
import { VenueSegment } from "./VenueSegment";

export const Body: FC = () => {
  const { site: origSite, ja } = useSiteInfo();
  const site = ja
    ? {
        ...origSite,
        title: "AIST Creative HCI Seminar #1",
        translatedTitle: "第一回 AIST Creative HCI Seminar",
        description:
          "このサイトでは第一回 AIST Creative HCI Seminarの動画アーカイブと紹介を掲載しています。第一回は「創造性支援（Creativity Support）」がテーマで、コンピュータによる創造性支援研究の歴史と展望、VTuberなど動画配信者の文化研究、それぞれに関し世界トップクラスの若手研究者（Jonas Frich、Zhicong Lu）を海外から招聘して、招待講演とパネルセッションを行いました。",
        image: "/images/1-hero-ja.png",
      }
    : {
        ...origSite,
        title: "AIST Creative HCI Seminar #1",
        translatedTitle: undefined,
        description:
          'This website provides the archived video and introduction of the AIST Creative HCI Seminar #1, held under the theme of "Creativity Support." It invited world-class young researchers from abroad: Jonas Frich on the history and prospects of creativity support research in HCI and Zhicong Lu on socio-cultural studies of live-streamers such as VTubers.',
        image: "/images/1-hero-en.png",
      };
  return (
    <>
      <Head>
        <title key="title">{site.title}</title>
        <meta name="description" content={site.description} key="description" />
        <meta
          property="og:title"
          content={site.translatedTitle || site.title}
        />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site.image} />
        <meta property="twitter:title" content={site.title} />
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
        <div className="alertbox">
          <p>
            {ja
              ? "本ページはアーカイブ目的で提供されており、主に開催前時点での情報が掲載されています。"
              : "This page is provided for archival purposes and contains information as of a point in time prior to the event."}
          </p>
        </div>
        <AboutSegment />
        <InvitedSpeakersSegment />
        <TimetableSegment />
        <ReferencesSegment />
        <VenueSegment />
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
