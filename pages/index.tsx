import Head from "next/head";
import Link from "next/link";
import { Header, Segment } from "semantic-ui-react";

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
          <p>
            See <Link href="/aist-seminar">AIST Creative HCI Seminar</Link> for
            now.
          </p>
        </Segment>
      </div>
    </main>
  );
}
