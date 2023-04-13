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
      <div className={styles.wrapper}>
        <Segment basic>
          <Header content="Welcome!" />
          <p>This is a home page for the following two projects.</p>
          <Divider />
          <Grid stackable columns={2}>
            <Grid.Column>
              <Link href="/chi2023">
                <Image
                  bordered
                  src="/chi2023/chi2023-kato-sigccc.jpg"
                  alt="ACM CHI 2023: Special Interest Group on Creativity and Cultures"
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
          </Grid>
        </Segment>
      </div>
    </main>
  );
}
