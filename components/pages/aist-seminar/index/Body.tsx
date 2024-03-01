import Head from "next/head";
import { FC } from "react";
import { Container, Image, Menu } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { PageFooter } from "../../../PageFooter";
import { PageHeader } from "../../../PageHeader";
import { SIGCHISegment } from "../SIGCHISegment";
import { EditionSegments } from "./EditionSegments";
import { HeroSegment } from "./HeroSegment";
import { PanelTopicSegments } from "./PanelTopicSegments";
import { SpeakersSegments } from "./SpeakersSegments";
import { WorkshopSegment } from "./WorkshopSegment";

export enum ListingMode {
  ByEdition,
  BySpeaker,
  ByPanelTopic,
  Workshop,
}

interface IProps {
  title?: string;
  mode: ListingMode;
}

export const Body: FC<IProps> = ({ title: t, mode }) => {
  const { site, ja } = useSiteInfo();
  const title =
    t ||
    (mode === ListingMode.ByEdition
      ? site.title
      : mode === ListingMode.BySpeaker
      ? `${site.title}: ${ja ? "講演者の紹介" : "By speaker"}`
      : mode === ListingMode.ByPanelTopic
      ? `${site.title}: ${ja ? "パネルトピック" : "By panel topics"}`
      : `${site.title}: ${ja ? "ワークショップ" : "Workshop"}`);
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta name="description" content={site.description} key="description" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site.image} />
        <meta property="twitter:title" content={title} />
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
        <Menu fluid stackable>
          {!ja && <Menu.Item disabled>View</Menu.Item>}
          <Menu.Item
            active={mode === ListingMode.ByEdition}
            as={mode !== ListingMode.ByEdition ? "a" : undefined}
            href={
              mode !== ListingMode.ByEdition
                ? `/aist-seminar${ja ? "" : "/en"}`
                : undefined
            }
          >
            {ja ? "各回の紹介" : "By edition"}
          </Menu.Item>
          <Menu.Item
            active={mode === ListingMode.BySpeaker}
            as={mode !== ListingMode.BySpeaker ? "a" : undefined}
            href={
              mode !== ListingMode.BySpeaker
                ? `/aist-seminar${ja ? "" : "/en"}/speakers`
                : undefined
            }
          >
            {ja ? "講演者の紹介" : "By speaker"}
          </Menu.Item>
          <Menu.Item
            active={mode === ListingMode.ByPanelTopic}
            as={mode !== ListingMode.ByPanelTopic ? "a" : undefined}
            href={
              mode !== ListingMode.ByPanelTopic
                ? `/aist-seminar${ja ? "" : "/en"}/panel-topics`
                : undefined
            }
          >
            {ja ? "パネルトピック" : "By panel topics"}
          </Menu.Item>
          {ja && (
            <Menu.Item
              active={mode === ListingMode.Workshop}
              as={mode !== ListingMode.Workshop ? "a" : undefined}
              href={
                mode !== ListingMode.Workshop
                  ? "/aist-seminar/workshop"
                  : undefined
              }
            >
              {ja ? "ワークショップ" : "Workshop"}
            </Menu.Item>
          )}
        </Menu>
        {mode === ListingMode.ByEdition && <EditionSegments />}
        {mode === ListingMode.BySpeaker && <SpeakersSegments />}
        {mode === ListingMode.ByPanelTopic && <PanelTopicSegments />}
        {mode === ListingMode.Workshop && <WorkshopSegment />}
        {mode !== ListingMode.Workshop && <SIGCHISegment />}
      </Container>
      <PageFooter />
    </>
  );
};
