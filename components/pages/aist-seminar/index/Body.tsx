import Head from "next/head";
import { FC } from "react";
import { Button, Container, Image } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { PageFooter } from "../../../PageFooter";
import { PageHeader } from "../../../PageHeader";
import { HeroSegment as GenericHeroSegment } from "../HeroSegment";
import { HeroSegment as SecondEditionHeroSegment } from "../2/HeroSegment";
import { InvitedSpeakersSegment } from "../3/InvitedSpeakersSegment";
import { TimetableSegment } from "../3/TimetableSegment";
import { Alertbox } from "../Alertbox";
import { SIGCHISegment } from "../SIGCHISegment";
import { EditionSegment } from "./EditionSegment";
import { FirstEditionSegment } from "./FirstEditionSegment";
import { HeroSegment } from "./HeroSegment";
import { ReferencesSegment } from "../3/ReferencesSegment";

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
          <GenericHeroSegment
            fullWidth
            edition={3}
            editionJa="三"
            dateTime={
              ja
                ? "日時: 2023年5月22日（月）15:00 ～ 17:00"
                : "Date: May 22nd, 2023 / Time: 15:00-17:00 (Japan Standard Time)"
            }
            venue={ja ? "会場: Zoom Webinar" : "Zoom Webinar (Online)"}
            title={
              ja
                ? "CHI 2023 が分かる！発表者による振り返り"
                : "How was your CHI 2023 experience?"
            }
            speakers={[
              { name: "Koya Narumi", photoPath: "/images/3-koya-narumi.jpg" },
              {
                name: "Hiromu Yakura",
                photoPath: "/images/3-hiromu-yakura.jpg",
              },
              {
                name: "Motomura Ami",
                photoPath: "/images/circle-user-solid.svg",
              },
            ]}
          />

          {ja ? (
            <>
              <p>
                本セミナーの第3回目は、
                <strong>2023年5月22日（月）午後3時</strong>
                から開催します。形式は、Zoom
                Webinarでのオンラインストリーミングをご覧いただくオンラインのワークショップとなります。今回は、
                <strong>
                  4月23-29日にドイツのハンブルクで開催された国際会議 ACM CHI
                  2023
                </strong>
                の様々なプログラムで発表した若手研究者をお呼びして、Human-Computer
                Interaction分野のトップ国際会議 CHI の概要をつかみます。
              </p>
              <p>
                通常の投稿論文（Papers）やデモ・ポスター（Interactivity,
                Late-Breaking Work）はもちろん、ケーススタディ（Case
                Studies）や学生の研究コンペティション（Student Research
                Competition, Student Design Competition
                など）、ワークショップやコース（Special Interest Group,
                Workshop,
                Course）など、盛りだくさんの超巨大会議について、全体像を把握するまたとないチャンスです。（論文セッションの全貌をつかむ{" "}
                <a href="https://sigchi.jp/seminar/chi2023/">CHI勉強会 2023</a>{" "}
                も、ぜひどうぞ！）
              </p>
              <p>
                なお、<strong>今回に限り日本語での講演・議論</strong>
                （講演者のCHIでの発表内容を含む招待講演部分を除く）となります。お気軽にご参加ください。
              </p>
            </>
          ) : (
            <>
              <p>
                The seminar's third edition will be held on{" "}
                <strong>May 22 (Mon), 2023</strong>. For the third edition, we
                plan to invite Japan-based researchers who presented their work
                at various programs of CHI 2023 (Papers, Case Studies,
                Interactivity, Special Interest Group, ...) and ask them to
                share their experiences. The format will be a one-day online
                seminar on Zoom Webinar.
              </p>
            </>
          )}
          <Alertbox
            text={
              ja ? (
                <p>
                  参加登録時に収集する個人情報は
                  <a href="https://www.aist.go.jp/aist_j/privacy_policy/">
                    産総研プライバシーポリシー
                  </a>
                  に準じて取り扱います。登録後、ZoomからWebinar参加URLを含む確認メールが届きます。
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
              disabled
              icon="edit"
              color="red"
              size="massive"
              content={ja ? "参加登録" : "Registration"}
              as="a"
              href="https://us06web.zoom.us/webinar/register/WN_cE43h1SpQsSNMEor5DeCkw"
            />
          </Alertbox>
          <InvitedSpeakersSegment bare />
          <TimetableSegment bare />
          <ReferencesSegment bare />
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
