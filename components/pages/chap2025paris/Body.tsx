import { FC } from "react";
import {
  Button,
  Container,
  Header,
  Image,
  List,
  Menu,
  Segment,
  SemanticCOLORS,
} from "semantic-ui-react";
import Head from "next/head";

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
      <Menu.Item as="a" href="#speakers">
        Speakers
      </Menu.Item>
      <Menu.Item as="a" href="#schedule">
        Schedule
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
            <p>
              This workshop is dedicated to understanding and supporting
              creative practices in such hand-drawn arts.
            </p>
          </Segment>
          <Segment color={workshopColor}>
            <a id="speakers" className="anchor"></a>
            <Header as="h2" content="Speakers" dividing />
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
                description="HCI researcher"
              />
            </List>
          </Segment>
          <Segment color={workshopColor}>
            <a id="schedule" className="anchor"></a>
            <Header as="h2" content="Schedule" dividing />
            <List>
              <List.Item
                icon="clock"
                content="10:00 AM - Welcome and Introduction"
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
