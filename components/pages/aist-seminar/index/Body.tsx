import Head from "next/head";
import { FC } from "react";
import { Button, Container, Image, List } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { PageFooter } from "../../../PageFooter";
import { PageHeader } from "../../../PageHeader";
import { HeroSegment as SecondEditionHeroSegment } from "../2/HeroSegment";
import { FirstEditionSegment } from "./FirstEditionSegment";
import { HeroSegment } from "./HeroSegment";
import { SIGCHISegment } from "../SIGCHISegment";
import { EditionSegment } from "./EditionSegment";
import { Alertbox } from "../Alertbox";

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
          <SecondEditionHeroSegment fullWidth />
          <Alertbox
            text={
              ja ? (
                <p>
                  参加登録時に収集する個人情報は
                  <a href="https://www.aist.go.jp/aist_j/privacy_policy/">
                    産総研プライバシーポリシー
                  </a>
                  に準じて取り扱います。
                </p>
              ) : (
                <p>
                  Personal information collected in this form will be utilized
                  while following the{" "}
                  <a href="https://www.aist.go.jp/aist_e/privacy_policy/index_en.html">
                    AIST privacy policy
                  </a>
                  .
                </p>
              )
            }
          >
            <Button
              icon="edit"
              color="red"
              size="massive"
              content={ja ? "参加登録" : "Registration"}
              as="a"
              disabled
            />
          </Alertbox>
        </EditionSegment>
        <FirstEditionSegment />
        <SIGCHISegment />
      </Container>
      <PageFooter />
    </>
  );
};
