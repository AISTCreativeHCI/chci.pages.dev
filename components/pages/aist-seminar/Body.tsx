import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC, useContext } from "react";
import { Container, Divider, Header, Menu, Segment } from "semantic-ui-react";

import { SiteContext } from "../../contexts/SiteContext";

export const Body: FC = () => {
  const site = useContext(SiteContext);
  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <Menu fixed="top" id="fixed-menu">
        <Link href={site.root} legacyBehavior passHref>
          <Menu.Item as="a" icon="splotch" content={site.title} />
        </Link>
        {/* <Menu.Menu position="right">
          <Link href={`${site.root}/team`} legacyBehavior passHref>
            <Menu.Item
              as="a"
              icon="users"
              content={site.language === "ja" ? "運営" : "Organizers"}
            />
          </Link>
        </Menu.Menu> */}
      </Menu>
      <Container>
        <Header as="h1" content={site.title} />
        <Segment basic>
          <p>
            At AIST (National Institute of Advanced Industrial Science and
            Technology), we strive to develop technologies that help people
            unleash their creativity, which should be the prominent role of
            human beings in the age of AI.
          </p>
          <p>
            This seminar series will invite rising stars in the Human-Computer
            Interaction field and cover diverse topics which are
            directly/indirectly connected to creativity support research. The
            seminar series is supported by the advisory board of senior and
            prestigious HCI researchers based in Japan.
          </p>
        </Segment>
        <Segment>
          <h2>Schedule</h2>
          <p>
            The first edition of the seminar is going to be held on{" "}
            <strong>March 7 (Tue), 2023</strong>.
          </p>
        </Segment>
      </Container>
      <footer>
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
