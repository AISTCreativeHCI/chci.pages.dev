import Head from "next/head";
import { FC, ReactNode } from "react";
import { Breadcrumb, Container, Divider } from "semantic-ui-react";

import { PageFooter } from "../../PageFooter";
import { PageHeader } from "../../PageHeader";
import { useSiteInfo } from "../../lib/useSiteInfo";
import { Alertbox } from "./Alertbox";
import { GenericHeroSegment } from "./GenericHeroSegment";
import { SIGCHISegment } from "./SIGCHISegment";

import seminars from "./seminars.json";

interface IProps {
  index: number;
  alert?: ReactNode;
  children?: ReactNode;
}

export const GenericBodyComponent: FC<IProps> = ({
  index,
  alert,
  children,
}) => {
  const { site: origSite, ja } = useSiteInfo();
  const si = seminars[index];
  const edition = ja ? `第${si.edition.ja}回` : `#${si.edition.en}`;
  const editionTitle = ja
    ? `${edition} AIST Creative HCI Seminar`
    : `AIST Creative HCI Seminar ${edition}`;
  const site = {
    ...origSite,
    title: `${editionTitle}: ${ja ? si.title.ja : si.title.en}`,
    description: ja
      ? `このサイトでは${editionTitle}の動画アーカイブと紹介を掲載しています。${si.description.ja}`
      : `This website provides the archived video and introduction of the ${editionTitle}. ${si.description.en}`,
    image:
      typeof si.thumbnail === "string"
        ? si.thumbnail
        : ja
        ? si.thumbnail.ja
        : si.thumbnail.en,
  };
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
      <PageHeader />
      <div className="hero">
        <Container>
          <GenericHeroSegment index={index} />
        </Container>
      </div>
      <Container>
        <Alertbox>
          <p>
            {ja
              ? "本ページはアーカイブ目的で提供されており、主に開催前時点での情報が掲載されています。"
              : "This page is provided for archival purposes and contains information as of a point in time prior to the event."}
          </p>
          {alert}
        </Alertbox>
        {children}
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
          <Breadcrumb.Section>{editionTitle}</Breadcrumb.Section>
        </Breadcrumb>
      </Container>
      <PageFooter />
    </>
  );
};
