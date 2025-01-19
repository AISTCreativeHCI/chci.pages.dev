import Head from "next/head";
import { FC } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  SemanticCOLORS,
} from "semantic-ui-react";

import { VenueSegment } from "./VenueSegment";

import styles from "./Body.module.css";
import { Alertbox } from "../aist-seminar/Alertbox";

const workshopTitle =
  "A Workshop on Creativity support for Hand-drawn Art Practices (CHAP)";
const workshopDescription =
  "A Workshop on Creativity Support for Hand-drawn Art Practices (CHAP) will be held in Paris in February 2025, organised by researchers from Japan and France who share an interest in creativity support for animation and comics. The workshop is dedicated to understanding and supporting creative practices in such hand-drawn arts.";
// const workshopImage = "/hand-drawn-art/workshop.jpg";
const workshopColor: SemanticCOLORS = "orange";

const workshopRegistrationUrl =
  "https://sondages.inria.fr/index.php/449649?newtest=Y&lang=en";

const organizers = [
  {
    name: "Jun Kato",
    affiliation:
      "Senior Researcher, AIST and Visiting Scientist, Universite Paris-Saclay",
    url: "https://junkato.jp",
    image: "https://junkato.jp/images/junkato.jpg",
  },
  {
    name: "Takayuki Nakatsuka",
    affiliation: "Researcher, AIST",
    url: "https://sites.google.com/site/ntakayuki9359/",
    image: "/chap2025paris/takayuki-nakatsuka.png",
  },
  {
    name: "Capucine Ngheim",
    affiliation: "Doctorate Student, Université Paris-Saclay",
  },
  {
    name: "Theophanis Tsandilas",
    affiliation: "Research Scientist, Inria & Université Paris-Saclay",
    url: "https://www.lri.fr/~fanis/",
    image: "/chap2025paris/theophanis-tsandilas.jpg",
  },
  {
    name: "Samuel Huron",
    affiliation: "Associate Professor, Institute Polytechnique de Paris",
    url: "https://samuel-huron.github.io/",
    image: "/chap2025paris/samuel-huron.png",
  },
  {
    name: "Martin Tricaud",
    affiliation: "Lecturer, Gobelins Paris",
    image: "/chap2025paris/martin-tricaud.jpg",
  },
  {
    name: "Baptiste Caramiaux",
    affiliation: "Researcher, CNRS & Sorbonne Université",
    url: "https://baptistecaramiaux.com/",
    image: "/chap2025paris/baptiste-caramiaux.jpg",
  },
];

const scheduleContent = [
  { time: "1:00 PM", activity: "Doors Open", icon: "coffee" },
  {
    time: "1:30 PM",
    activity: "Welcome and Introduction",
    icon: "comment alternate",
  },
  {
    time: "1:45 PM",
    activity: "How manga is made and how it might differ from bande dessinée",
    presenter: "Akira Shinohara (comic artist)",
    icon: "chat",
  },
  {
    time: "2:00 PM",
    activity: "How anime is made with help of computers",
    presenter: "Marc Salvati (OLM Digital Inc.) and Jun Kato (AIST)",
    icon: "chat",
  },
  {
    time: "2:20 PM",
    activity:
      "Building digital tools to gain unique styles from analog practices",
    presenter: "Baku Hashimoto (visual artist)",
    icon: "chat",
  },
  {
    time: "2:35 PM",
    activity: "Lightning talks",
    presenter: "Various researchers and artists",
    icon: "chat",
  },
  { time: "3:15 PM", activity: "Coffee Break", icon: "coffee" },
  {
    time: "3:30 PM",
    activity: "Creating, translating, and delivering cultural content",
    presenter: "TBA",
    icon: "chat",
  },
  {
    time: "3:50 PM",
    activity: "CG research for creativity",
    presenter: "TBA",
    icon: "chat",
  },
  {
    time: "4:10 PM",
    activity:
      "Panel discussion: CG and HCI, research and practice, France and Japan, … collaboration opportunities",
    icon: "comments",
  },
  { time: "4:55 PM", activity: "Closing Remarks", icon: "comment alternate" },
];

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
      <Menu.Item as="a" href="#about" icon="paint brush" />
      <Menu.Item as="a" href="#schedule" icon="calendar" />
      <Menu.Item as="a" href="#venue" icon="map marker alternate" />
      <Menu.Item as="a" href="#organizers" icon="users" />
    </Menu>
    <div className={styles.body} id="top">
      <div className={styles.hero}>
        <Container>
          <Header
            as="h1"
            content={workshopTitle}
            subheader="Connecting France and Japan, animation and comics, and research and practice."
          />
        </Container>
      </div>
      <div className={styles.content}>
        <Container>
          <Segment color={workshopColor} basic>
            <a id="about" className="anchor"></a>
            <Header
              as="h2"
              icon={<Icon name="paint brush" color={workshopColor} />}
              content="About"
            />
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
          <Segment color={workshopColor} basic>
            <a id="registration" className="anchor"></a>
            <Header
              as="h2"
              content="Registration"
              icon={<Icon name="user plus" color={workshopColor} />}
            />
            <Alertbox
              text={
                <List bulleted>
                  <List.Item>
                    The event will be held in hybrid format, and registration is
                    required to attend the event.
                  </List.Item>
                  <List.Item>
                    An online registration link will be available soon.
                  </List.Item>
                  <List.Item>
                    Please note that the number of attendees for the onsite
                    event is limited and seats will be allocated on a
                    first-come, first-served basis.
                  </List.Item>
                </List>
              }
            >
              <Button
                icon="map marker alternate"
                color={workshopColor}
                size="massive"
                content="Onsite registration"
                as="a"
                href={workshopRegistrationUrl}
              />
            </Alertbox>
          </Segment>
          <Segment color={workshopColor} basic>
            <a id="schedule" className="anchor"></a>
            <Header
              as="h2"
              content="Tentative schedule"
              icon={<Icon name="calendar" color={workshopColor} />}
            />
            <List relaxed celled className={styles.scheduleList}>
              {scheduleContent.map(
                ({ time, activity, presenter, icon }, index) => (
                  <List.Item
                    key={index}
                    icon={icon}
                    header={time}
                    description={
                      <List
                        horizontal
                        divided
                        className={styles.scheduleListItem}
                      >
                        <List.Item content={activity} />
                        {presenter && <List.Item content={presenter} />}
                      </List>
                    }
                  />
                )
              )}
            </List>
          </Segment>
          <VenueSegment
            color={workshopColor}
            icon={<Icon name="map marker alternate" color={workshopColor} />}
            dividing={false}
          />
          <Segment color={workshopColor} basic>
            <a id="organizers" className="anchor"></a>
            <Header
              as="h2"
              content="Organizers"
              icon={<Icon name="users" color={workshopColor} />}
            />
            <List relaxed selection size="small">
              {organizers.map(({ name, affiliation, image, url }) => (
                <List.Item
                  key={name}
                  as={url ? "a" : undefined}
                  href={url || undefined}
                  image={
                    <Image
                      avatar
                      src={image || "/chap2025paris/circle-user-solid.svg"}
                      alt={`[${name}: photo]`}
                    />
                  }
                  header={name}
                  description={affiliation}
                />
              ))}
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
