import Head from "next/head";
import { FC } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  SemanticCOLORS,
} from "semantic-ui-react";

import styles from "./Body.module.css";

import { Alertbox } from "../aist-seminar/Alertbox";
import { ScheduleList } from "./ScheduleList";
import { VenueSegment } from "./VenueSegment";

import organizers from "./organizers.json";
import seminarContent from "./seminarContent.json";
import workshopContent from "./workshopContent.json";
import workshopAfternoonContent from "./workshopAfternoonContent.json";

const workshopTitle =
  "A Workshop on Creativity support for Hand-drawn Art Practices (CHAP2025 Paris)";
const workshopDescription =
  "A Workshop on Creativity Support for Hand-drawn Art Practices (CHAP2025 Paris) will be held in Paris in February 2025, organised by researchers from Japan and France who share an interest in creativity support for animation and comics. The workshop is dedicated to understanding and supporting creative practices in such hand-drawn arts.";
const workshopImage = "/chap2025paris/chap2025paris-title.png";
const workshopColor: SemanticCOLORS = "orange";

const lastUpdate = "January 30, 2025";

const seminarVenue = "Inria Paris or Online (Zoom)";
const seminarDate = "Monday, February 10, 2025";
const seminarRegistrationUrl =
  "https://sondages.inria.fr/index.php/449649?newtest=Y&lang=en";
const seminarOnlineRegistrationUrl =
  "https://us06web.zoom.us/meeting/register/4CbI9ldXRuqzDerKr2RpHg";

export const Body: FC = () => (
  <>
    <Head>
      <title key="title">{workshopTitle}</title>
      <meta name="description" content={workshopDescription} />
      <meta property="og:title" content={workshopTitle} />
      <meta property="og:description" content={workshopDescription} />
      <meta property="og:image" content={workshopImage} />
      <meta property="twitter:title" content={workshopTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={workshopImage} />
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
        <Container className={styles.heroContent}>
          <Header
            as="h1"
            content={workshopTitle}
            subheader="Connecting France and Japan, animation and comics, and research and practice."
          />
          <List horizontal className={styles.heroList}>
            <List.Item>Public seminar:</List.Item>
            <List.Item icon="map marker alternate" content={seminarVenue} />
            <List.Item icon="clock" content="1:30 PM - 5:00 PM" />
            <List.Item icon="calendar" content={seminarDate} />
          </List>
        </Container>
        <div className={styles.heroBackground} />
        <div className={styles.heroImage} />
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
            <Divider />
            <p>
              This event is part of{" "}
              <a href="https://pepr-iccare.fr/">the PEPR ICCARE project</a> and
              Japan-based researchers and practitioners are invited by{" "}
              <a href="https://www.aist.go.jp/index_en.html">AIST</a>. Please
              refer to <a href="#supporters">the list of supporters</a> for more
              details.
            </p>
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
                    The public seminar will be held in hybrid format, and
                    registration is required to attend it.
                  </List.Item>
                  <List.Item>
                    Please note that the number of onsite attendees is limited
                    and seats will be allocated on a first-come, first-served
                    basis.
                  </List.Item>
                </List>
              }
            >
              <div className={styles.showOnTablet}>
                <Button.Group size="huge">
                  <Button
                    icon="map marker alternate"
                    color={workshopColor}
                    content="Onsite registration"
                    as="a"
                    href={seminarRegistrationUrl}
                  />
                  <Button.Or />
                  <Button
                    icon="video camera"
                    color="blue"
                    content="Online registration"
                    as="a"
                    href={seminarOnlineRegistrationUrl}
                  />
                </Button.Group>
              </div>
              <div className={styles.hideOnTablet}>
                <List horizontal>
                  <List.Item>
                    <Button
                      icon="map marker alternate"
                      color={workshopColor}
                      content="Onsite registration"
                      as="a"
                      href={seminarRegistrationUrl}
                    />
                  </List.Item>
                  <List.Item>
                    <Button
                      icon="video camera"
                      color="blue"
                      content="Online registration"
                      as="a"
                      href={seminarOnlineRegistrationUrl}
                    />
                  </List.Item>
                </List>
              </div>
            </Alertbox>
          </Segment>
          <Segment color={workshopColor} basic>
            <a id="schedule" className="anchor"></a>
            <Header
              as="h2"
              content="Schedule"
              icon={<Icon name="calendar" color={workshopColor} />}
            />
            <p>
              The workshop spans three days, beginning with a public seminar on
              the first day (Monday), followed by two invitation-only workshops
              focusing on animation (Tuesday) and comics (Wednesday),
              respectively.
            </p>
            <Header
              as="h3"
              dividing
              content={`Public Seminar: ${seminarDate}`}
              color={workshopColor}
            />
            <ScheduleList content={seminarContent} />
            <Header
              as="h3"
              dividing
              content="Workshops: Tuesday and Wednesday, February 11-12, 2025"
              color={workshopColor}
            />
            <p>
              The public seminar is followed by two invitation-only workshops
              focusing on animation (Tuesday) and comics (Wednesday),
              respectively. If you are interested in participating in the
              workshops, please feel free to contact{" "}
              <a href="mailto:jun.kato@aist.go.jp">the organizer</a>.
            </p>
            <Grid stackable>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <ScheduleList content={workshopContent} />
                </Grid.Column>
                <Grid.Column>
                  <ScheduleList content={workshopAfternoonContent} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
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
          <Divider />
          <Segment color={workshopColor} className={styles.supporters}>
            <a id="supporters" className="anchor"></a>
            <Header as="h3" content="Supporters" />
            <div className={styles.supportersContent}>
              <Grid stackable>
                <Grid.Row columns={3}>
                  <Grid.Column width={4}>
                    <List horizontal className={styles.logos}>
                      <List.Item>
                        <Image
                          src="/chap2025paris/logos/iccare.png"
                          className={styles.iccare}
                        />
                      </List.Item>
                    </List>
                    <List horizontal className={styles.logos}>
                      <List.Item>
                        <Image src="/chap2025paris/logos/france2030.svg" />
                      </List.Item>
                      <List.Item>
                        <Image src="/chap2025paris/logos/cnrs.svg" />
                      </List.Item>
                      <List.Item>
                        <Image src="/chap2025paris/logos/anr.png" />
                      </List.Item>
                    </List>
                    <p>
                      This event is held as part of{" "}
                      <a href="https://pepr-iccare.fr/">
                        the PEPR ICCARE project
                      </a>
                      .
                    </p>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <List horizontal className={styles.logos}>
                      <List.Item>
                        <Image
                          src="/chap2025paris/logos/aist.gif"
                          className={styles.aist}
                        />
                      </List.Item>
                    </List>
                    <p>
                      Japan-based researchers and practitioners are invited by{" "}
                      <a href="https://www.aist.go.jp/index_en.html">AIST</a>.
                    </p>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p>
                      The public seminar is also supported by{" "}
                      <a href="https://sigchi.org/people/chapters/">
                        ACM SIGCHI Local Chapters
                      </a>{" "}
                      including{" "}
                      <a href="https://paris.sigchi.acm.org/home/">Paris</a> and{" "}
                      <a href="https://sigchi.jp/">Japan</a> ACM SIGCHI
                      Chapters, as well as{" "}
                      <a href="https://www.mcjp.fr/">
                        Maison de la culture du Japon à Paris (パリ日本文化会館)
                      </a>
                      .
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <div className={styles.supportersBottomRightLogos}>
              <List
                horizontal
                relaxed
                divided
                verticalAlign="bottom"
                className={styles.logos}
              >
                <List.Item>
                  <Image
                    src="/chap2025paris/logos/acm-chapter.jpg"
                    className={styles.acm}
                  />
                </List.Item>
                <List.Item>
                  <Image
                    src="/chap2025paris/logos/mcjp.svg"
                    className={styles.mcjp}
                  />
                </List.Item>
              </List>
            </div>
          </Segment>
        </Container>
      </div>
    </div>
    <footer className={styles.footer}>
      <Container>
        <Segment basic color={workshopColor} inverted textAlign="center">
          <List horizontal divided>
            <List.Item>CHAP2025 Paris announcement website</List.Item>
            <List.Item>© Workshop Organizers</List.Item>
            <List.Item>Last update: {lastUpdate}</List.Item>
          </List>
        </Segment>
      </Container>
    </footer>
  </>
);
