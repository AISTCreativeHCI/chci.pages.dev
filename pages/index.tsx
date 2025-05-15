import Head from "next/head";
import Link from "next/link";
import { Divider, Grid, Header, Image, Segment } from "semantic-ui-react";

import styles from "../components/pages/index.module.css";

export default function Index() {
  return (
    <main className={styles.main}>
      <Head>
        <title key="title">Creative HCI web pages</title>
        <meta
          name="description"
          content="Web pages for Creative HCI project"
          key="description"
        />
      </Head>
      <div>
        <Segment basic>
          <Header content="Welcome!" />
          <p>This is a home page for the following four projects.</p>
          <Divider />
          <Grid stackable columns={2}>
            <Grid.Column>
              <Link href="/chi2025anime">
                <Image
                  bordered
                  src="/chi2025anime/chi2025-animesig.png"
                  alt="ACM CHI 2025: Anime SIG – Researching Japanese Animation From Technical, Cultural, and Industrial Perspectives"
                  fluid
                />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link href="/chap2025paris">
                <Image
                  bordered
                  src="/chap2025paris/chap2025paris-title.png"
                  alt="A Workshop on Creativity support for Hand-drawn Art Practices (CHAP2025 Paris)"
                  fluid
                />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link href="/aist-seminar">
                <Image
                  bordered
                  src="/aist-creative-hci-seminar-hero.png"
                  alt="AIST Creative HCI Seminar"
                  fluid
                />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link href="/chi2023">
                <Image
                  bordered
                  src="/chi2023/chi2023-sigccc.jpg"
                  alt="ACM CHI 2023: Special Interest Group on Creativity and Cultures in Computing"
                  fluid
                />
              </Link>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    </main>
  );
}
