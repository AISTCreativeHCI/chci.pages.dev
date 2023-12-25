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
        title: "AIST Creative HCI Seminar #3",
        translatedTitle: "第三回 AIST Creative HCI Seminar",
        description:
          "このサイトでは第三回 AIST Creative HCI Seminarの動画アーカイブと紹介を掲載しています。第三回は「ACM CHI 2023振り返り」がテーマで、CHIの様々なプログラムで発表した若手研究者（鳴海さん、矢倉さん、元村さん）をお呼びして、招待講演とパネルセッションを行いました。",
        image: "/images/3-hero.jpg",
      }
    : {
        ...origSite,
        title: "AIST Creative HCI Seminar #3",
        translatedTitle: undefined,
        description:
          "This website provides the archived video and introduction of the AIST Creative HCI Seminar #3, held to collectively understand ACM CHI 2023, the premier and huge conference on Human-Computer Interaction. It invited three bright and young Japan-based researchers: Ami Motomura, Hiromu Yakura, and Koya Narumi.",
        image: "/images/3-hero.jpg",
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
          <GenericHeroSegment index={2} />
        </Container>
      </div>
      <Container>
        <Alertbox>
          <p>
            {ja
              ? "本ページはアーカイブ目的で提供されており、主に開催前時点での情報が掲載されています。"
              : "This page is provided for archival purposes and contains information as of a point in time prior to the event."}
          </p>
          {ja && (
            <p>
              講演者の厚意により、講演資料がダウンロードできます。
              <a href="#timetable">プログラム</a>からどうぞ。
            </p>
          )}
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
