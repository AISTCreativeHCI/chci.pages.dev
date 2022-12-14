import Head from "next/head";
import Link from "next/link";
import { Container, Header, Segment } from "semantic-ui-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative HCI web pages</title>
        <meta name="description" content="Web pages for Creative HCI project" />
      </Head>
      <Container>
        <Segment basic>
          <Header content="Welcome!" />
          <p>
            See <Link href="/aist-seminar">AIST Creative HCI Seminar</Link> for now.
          </p>
        </Segment>
      </Container>
    </>
  );
}
