import Head from "next/head";
import { FC } from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  SemanticCOLORS,
} from "semantic-ui-react";

import { createShareButtons } from "../../lib/createShareButtons";

import styles from "./Body.module.css";

const workshopTitle =
  "A Workshop on Creativity support for Hand-drawn Art Practices (CHAP)";
const workshopDescription =
  "A Workshop on Creativity Support for Hand-drawn Art Practices (CHAP) will be held in Paris in February 2025, organised by researchers from Japan and France who share an interest in creativity support for animation and comics. The workshop is dedicated to understanding and supporting creative practices in such hand-drawn arts.";
// const workshopImage = "/hand-drawn-art/workshop.jpg";
const workshopColor: SemanticCOLORS = "orange";

export const Body: FC = () => (
  <>
    <Head>
      <title key="title">{workshopTitle}</title>
      <meta name="description" content={workshopDescription} />
      <meta property="og:title" content={workshopTitle} />
      <meta property="og:description" content={workshopDescription} />
      {/* <meta property="og:image" content={workshopImage} /> */}
      <meta property="twitter:title" content={workshopTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:image" content={workshopImage} /> */}
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/chap.css" />
    </Head>
    <Menu fixed="top">
      <Menu.Item
        className={styles.brand}
        as="a"
        href="#top"
        title="A Workshop on Creativity support for Hand-drawn Art Practices"
      >
        CHAP
      </Menu.Item>
      <Menu.Item as="a" href="#about">
        About
      </Menu.Item>
      <Menu.Item as="a" href="#schedule">
        Schedule
      </Menu.Item>
      <Menu.Item as="a" href="#organizers">
        Organizers
      </Menu.Item>
    </Menu>
    <div className={styles.body} id="top">
      <div className={styles.hero}>
        <Container>
          <Header
            as="h1"
            content={workshopTitle}
            subheader="Connecting France and Japan, animation and comics, and research and practice."
          />
          <div className={styles.share}>
            {createShareButtons(workshopTitle, workshopColor)}
          </div>
        </Container>
      </div>
      <div className={styles.content}>
        <Container>
          <Segment color={workshopColor}>
            <a id="about" className="anchor"></a>
            <Header as="h2" content="About" dividing />
            <Grid stackable>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <p>
                    This event brings together researchers and artists from
                    Japan and France, two countries where the culturally rich
                    yet distinct practices of anime, animation, manga, and bande
                    dessinée are deeply rooted and actively pursued. Through
                    presentations, lightning talks, and panel discussions, the
                    workshop aims to deepen mutual understanding of hand-drawn
                    artistic practices and explore the potential of building
                    creativity support tools from a Human-Computer Interaction
                    perspective.
                  </p>
                  <p>
                    This event seeks to deepen understanding of the production
                    workflows of hand-drawn visual arts such as anime and manga,
                    which have evolved to meet the demands of commercial art. It
                    also broadens its scope to address activities such as
                    translation, which are essential for distributing content
                    across cultural boundaries. By gathering experts in industry
                    and academia on these diverse topics, the event aims to
                    serve as a starting point for comprehensive research into
                    artistic practices&mdash;an area that has traditionally been
                    challenging to explore within the narrower confines of
                    computer science.
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <p>
                    本イベントは、アニメとアニメーション、漫画とバンド＝デシネという、共通点の多い、しかし異なる文化活動が共に盛んな日本とフランスの研究者・アーティストによって開催されます。招待講演、ライトニングトーク、パネルセッションを通して、手描きの芸術実践について相互理解を深め、情報技術による創造性支援の可能性、とくにHuman-Computer
                    Interaction研究の観点で創造性支援ツールが果たせる可能性を探求します。
                  </p>
                  <p>
                    本イベントでは、アニメや漫画などの表現形態が商業芸術としての要請に応えるかたちで育んできた制作ワークフローについての理解を深めるとともに、文化圏を超えてコンテンツを流通させるための、翻訳をはじめとする活動にまで射程を広げて扱います。これにより、これまで狭義のコンピュータ科学では難しかった芸術活動の総体的な研究のきっかけとすることを目指します。
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <p>
                    Cet événement vise à rassembler chercheur·euse·s et artistes
                    du Japon et de France, deux pays où les pratiques de
                    l'animation/anime et bande dessinée/manga sont riches,
                    actives et profondément ancrées dans la culture populaire et
                    artistique. A travers des présentations et table rondes, ce
                    workshop a pour but d'approfondir la compréhension mutuelle
                    entre ces pratiques artistiques centrées sur le dessin à la
                    main, et d'explorer la possibilité de construire des outils
                    supportant ces activités créatives d'un point de vue
                    Interaction Humain-Machine.
                  </p>
                  <p>
                    Cet événement cherche à étendre la connaissance du processus
                    de production des arts visuels dessinés à la main tels que
                    l'anime et le manga, dont l'évolution répond aux contraintes
                    commerciales de leur diffusion. Le sujet du workshop pourra
                    aussi être étendu à des activités connexes telles que la
                    traduction, qui est essentielle pour la distribution de
                    contenu au-delà des frontières linguistique et culturelle.
                    En réunissant des experts issus de milieux industriels et
                    académiques de diverses disciplines, cet événement devrait
                    servir de point de départ pour une recherche exhaustive,
                    centrée sur ces pratiques artistiques &mdash; domaine
                    traditionnellement ardu à explorer dans le cadre de
                    l'informatique.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment color={workshopColor}>
            <a id="schedule" className="anchor"></a>
            <Header as="h2" content="Schedule" dividing />
            <List>
              <List.Item icon="clock" content="1:00 PM - Doors Open" />
              <List.Item
                icon="clock"
                content="1:30 PM - Welcome and Introduction"
              />
            </List>
          </Segment>
          <Segment color={workshopColor}>
            <a id="organizers" className="anchor"></a>
            <Header as="h2" content="Organizers" dividing />
            <List relaxed selection>
              <List.Item
                as="a"
                href="https://junkato.jp"
                image={
                  <Image
                    avatar
                    src="https://junkato.jp/images/junkato.jpg"
                    alt="[Jun Kato: photo]"
                  />
                }
                header="Jun Kato"
                description="Senior Researcher, AIST and Visiting Scientist, Universite Paris-Saclay"
              />
            </List>
          </Segment>
        </Container>
      </div>
    </div>
    <footer className={styles.footer}>
      <Segment basic color={workshopColor} inverted textAlign="center">
        <Container>
          <List horizontal divided>
            <List.Item>CHAP Workshop announcement website</List.Item>
            <List.Item>© Workshop Organizers</List.Item>
            <List.Item>Last update: January 1, 2025</List.Item>
          </List>
        </Container>
      </Segment>
    </footer>
  </>
);
