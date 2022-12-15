import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import { Container, Divider, Header, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";
import { PageHeader } from "../../PageHeader";

import styles from "./Body.module.css";

export const Body: FC = () => {
  const {
    ja,
    site,
  } = useSiteInfo();
  return (
    <>
      <Head>
        <title key="title">{site.title}</title>
        <meta name="description" content={site.description} key="description" />
      </Head>
      <PageHeader />
      <div className={styles.hero}>
        <Container>
          <Header as="h1" content={site.title} />
          <Segment basic>
            {ja ? (
              <>
                <p>
                  国立研究開発法人
                  産業技術総合研究所（産総研）では、AI時代における人間の重要な役割である「創造性」を発揮させるための技術開発に取り組んでいます。
                </p>
                <p>
                  本セミナーシリーズでは、国際的に活躍する Human-Computer
                  Interaction
                  分野の新星を招き、創造性支援研究に直接/間接に関わる多様なトピックを取り上げます。
                  本セミナーは、日本を拠点とする著名なHCI研究者のアドバイザリーボードに支えられています。
                </p>
              </>
            ) : (
              <>
                <p>
                  At AIST (National Institute of Advanced Industrial Science and
                  Technology), we strive to develop technologies that help
                  people unleash their creativity, which should be the prominent
                  role of human beings in the age of AI.
                </p>
                <p>
                  This seminar series will invite rising stars in the
                  Human-Computer Interaction field and cover diverse topics
                  which are directly/indirectly connected to creativity support
                  research. The seminar series is supported by the advisory
                  board of senior and prestigious HCI researchers based in
                  Japan.
                </p>
              </>
            )}
          </Segment>
        </Container>
      </div>
      <Container>
        <Segment color="red">
          <h2>{ja ? "初回: 2023年3月7日（火）" : "First Edition"}</h2>
          <div className={styles.details}>
            <p>
              {ja
                ? "（情報公開まで、もうしばらくお待ちください）"
                : "Details to be disclosed soon... stay tuned!"}
            </p>
          </div>
          {ja ? (
            <>
              <p>
                本セミナーの第1回目は、<strong>2023年3月7日（火）</strong>
                に開催します。記念すべき第1回目では、CHI、CSCW、DIS、C&amp;Cなど、HCIのトップ国際会議で活発に論文を発表している、創造性に関する学際研究のエッジランナー2名をお招きする予定です。
              </p>
              <p>
                形式は、東京の会場にお越しいただくか、YouTube
                Liveでのオンラインストリーミングをご覧いただく、1日のハイブリッドワークショップとなります。講演者は現地に招聘します。ぜひ活発な議論をお願いいたします。
              </p>
            </>
          ) : (
            <>
              <p>
                The seminar's first edition will be held on{" "}
                <strong>March 7 (Tue), 2023</strong>. For this very first
                edition, we plan to invite two edge runners of the
                interdisciplinary study on creativity who have actively
                published papers at top-tier HCI venues, including CHI, CSCW,
                DIS, and C&amp;C.
              </p>
              <p>
                The format will be a one-day hybrid workshop &mdash; attendees
                can either visit a venue in Tokyo, Japan, or watch online
                streaming on YouTube Live.
              </p>
            </>
          )}
        </Segment>
      </Container>
      <footer className={styles.footer}>
        <Divider />
        <Segment basic textAlign="center">
          <a
            href="https://www.aist.go.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/aist-logo.png"
              alt="AIST Logo"
              width={150}
              height={26}
            />
          </a>
        </Segment>
      </footer>
    </>
  );
};
