import Head from "next/head";
import { FC, ReactNode } from "react";
import {
  Container,
  Header,
  Image,
  List,
  Menu,
  Segment,
  SemanticCOLORS,
} from "semantic-ui-react";

import { createShareButtons } from "../../lib/createShareButtons";

import styles from "./SIGBody.module.css";

interface SIGBodyProps {
  path?: string;
  shorthand: string;
  hashtag?: string;
  title: string;
  description: string;
  image?: string;
  header?: ReactNode;
  organizers: Organizer[];
  color?: SemanticCOLORS;
  lastUpdate?: string;
  children?: ReactNode;
  styling?: {
    brandBackground: string;
    brandBackgroundHover: string;
  };
}

interface Organizer {
  url?: string;
  photoPath?: string;
  name: string;
  affiliation: string;
}

export const SIGBody: FC<SIGBodyProps> = ({
  path,
  shorthand,
  hashtag,
  title,
  description,
  image,
  header,
  organizers,
  color = "green",
  lastUpdate,
  children,
  styling = {
    brandBackground: "#009776",
    brandBackgroundHover: "#009776cc",
  },
}) => (
  <>
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta property="twitter:image" content={image} />}
      <meta charSet="utf-8" />
      {path && <link rel="stylesheet" href={`/${path}.css`} />}
    </Head>
    <Menu fixed="top">
      <Menu.Item
        className={styles.brand}
        as="a"
        href="#top"
        style={{
          "--brand-background": styling.brandBackground,
          "--brand-background-hover": styling.brandBackgroundHover,
        }}
      >
        {shorthand}
      </Menu.Item>
      <Menu.Item as="a" href="#about">
        About
      </Menu.Item>
      <Menu.Item as="a" href="#organizers">
        Organizers
      </Menu.Item>
    </Menu>
    <div className={styles.body} id="top">
      <div className={styles.hero}>
        <Container>
          {header}
          <div className={styles.images}>
            {organizers.map((o) => (
              <Image
                key={o.name}
                avatar
                src={o.photoPath || "/images/circle-user-solid.svg"}
                alt={`[Photo: ${o.name}]`}
              />
            ))}
          </div>
          <div className={styles.share}>
            {createShareButtons(title, color, hashtag)}
          </div>
        </Container>
      </div>
      <div className={styles.content}>
        <Container>
          {children}
          <Segment color={color}>
            <a id="organizers" className="anchor"></a>
            <Header as="h2" content="Organizers" dividing />
            <List relaxed selection>
              {organizers.map((o) => (
                <List.Item
                  key={o.name}
                  as={o.url ? "a" : undefined}
                  href={o.url}
                  image={
                    <Image
                      avatar
                      src={o.photoPath || "/images/circle-user-solid.svg"}
                      alt={`[${o.name} photo]`}
                    />
                  }
                  header={o.name}
                  description={o.affiliation}
                />
              ))}
            </List>
          </Segment>
        </Container>
      </div>
    </div>
    <footer className={styles.footer}>
      <Segment basic inverted textAlign="center">
        <Container>
          <List horizontal divided>
            <List.Item>{title} announcement website</List.Item>
            <List.Item>&copy; {shorthand} organizers</List.Item>
            {lastUpdate && <List.Item>Last update: {lastUpdate}</List.Item>}
          </List>
        </Container>
      </Segment>
    </footer>
  </>
);
