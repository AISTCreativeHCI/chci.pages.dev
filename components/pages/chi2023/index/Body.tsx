import { FC } from "react";
import { Button, Header, Icon, List, Segment, Table } from "semantic-ui-react";

import { Alertbox } from "../../Alertbox";
import { SIGBody } from "../../sig-template/SIGBody";

export const Body: FC = () => (
  <SIGBody
    path="chi2023"
    shorthand="SIGCCC"
    title="ACM CHI 2023: Special Interest Group on Creativity and Cultures in Computing"
    description="This page introduces the Special Interest Group on Creativity and Cultures in Computing (SIGCCC) at CHI 2023"
    image="/chi2023/chi2023-sigccc.jpg"
    header={
      <Header
        as="h1"
        content="Special Interest Group on Creativity and Cultures in Computing"
        subheader="Call for participation in SIG meeting at CHI 2023"
      />
    }
    organizers={[
      {
        url: "https://junkato.jp",
        photoPath: "/images/junkato.jpg",
        name: "Jun Kato",
        affiliation: "AIST, Japan",
      },
      {
        url: "https://pure.au.dk/portal/en/persons/jonas-frich-pedersen(1f394a37-c0c2-40b9-b2b5-45e5021746c1).html",
        photoPath: "/images/1-jonas-frich.jpg",
        name: "Jonas Frich",
        affiliation: "Aarhus University, Denmark",
      },
      {
        url: "https://www.cs.cityu.edu.hk/~zhiconlu/",
        photoPath: "/images/1-zhicong-lu.jpg",
        name: "Zhicong Lu",
        affiliation: "City University of Hong Kong, China",
      },
      {
        url: "https://pixelmaid.github.io/personalweb/",
        photoPath: "/images/jenniferjacobs.jpg",
        name: "Jennifer Jacobs",
        affiliation: "University of California, Santa Barbara, United States",
      },
      {
        url: "http://www.kidresearch.jp/kumiyonakakoji/index-en.html",
        photoPath: "/images/kumiyonakakoji.jpg",
        name: "Kumiyo Nakakoji",
        affiliation: "Future University Hakodate, Japan",
      },
      {
        url: "https://celinelatulipe.net/",
        photoPath: "/images/celinelatulipe.jpg",
        name: "Celine Latulipe",
        affiliation: "University of Manitoba, Canada",
      },
    ]}
    color="green"
    lastUpdate="February 23, 2025"
    styling={{
      brandBackground: "#009776",
      brandBackgroundHover: "#009776cc",
    }}
  >
    <Segment color="green">
      <a id="about" className="anchor"></a>
      <Header as="h2" content="About" dividing />
      <Table stackable basic="very">
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell width={3}>Where?</Table.HeaderCell>
            <Table.Cell>
              <List>
                <List.Item
                  icon="map pin"
                  content={
                    <>
                      <strong>Onsite venue:</strong> Room Y09, Congress Center
                      Hamburg (CCH)
                    </>
                  }
                ></List.Item>
                <List.Item
                  icon="chat"
                  content={
                    <>
                      <strong>Online venue:</strong> Zoom
                    </>
                  }
                />
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell width={3}>When?</Table.HeaderCell>
            <Table.Cell>
              <List>
                <List.Item
                  icon="clock"
                  content={
                    <a href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=ACM+CHI+2023%3A+Special+Interest+Group+on+Creativity+and+Cultures+in+Computing+%28SIGCCC%29&iso=20230424T1635&p1=307&ah=1&am=25">
                      Mon, Apr 24 | 16:35 - 18:00
                    </a>
                  }
                ></List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell width={3}>CHI &apos;23 Program</Table.HeaderCell>
            <Table.Cell>
              <List>
                <List.Item
                  icon="book"
                  content={
                    <a href="https://programs.sigchi.org/chi/2023/program/content/99306">
                      Special Interest Group on Creativity and Cultures in
                      Computing - CHI &apos;23
                    </a>
                  }
                ></List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Header content="Abstract" />
      <p>
        Research on creativity support tools (CSTs) has a long history in
        Human-Computer Interaction (HCI); however, researchers often focus on
        developing novel CSTs and verifying them in a controlled lab setting,
        rather than on capturing the creative process in the wild. In reality,
        creative activity is exploratory, laborious, and involves multiple CSTs;
        which together form a creativity support environment or ecology.
        Creative activity is also social, cultural, and collaborative with
        people distributing, modifying, and reacting to the creations of others.
        This process can inspire subsequent iterations. To understand and
        support open-ended, culturally embedded, collaborative creativity, HCI
        researchers are seeking new methods to study the sociocultural aspects
        of creativity support.
      </p>
      <p>
        This Special Interest Group on Creativity and Cultures in Computing
        (SIGCCC) invites diverse researchers to provide a forum for CST
        discussions from a wide sociocultural lens. The participants will
        identify and discuss the state-of-the-art and conceptualize future
        directions for creativity support research.
      </p>
      <Header content="Keywords" />
      <p>Creativity support, social science, psychology, interaction design</p>
      <Header content="Plan" />
      <p>
        At the meeting, we plan to provide an introduction, then split attendees
        into smaller groups of 3 to 5 people based on their interests. After
        time for discussions within the groups, we will ask each group to share
        their insights with all attendees. Finally, we will conclude by
        reflecting on the insights gained in this workshop in light of our
        expertise and conclude with future remarks. During the introduction, we
        will conduct a short collaborative warmup to create an open and playful
        atmosphere, which will also serve as an ice-breaking activity. The list
        of potential discussion topics for smaller, focused groups are:
      </p>
      <List bulleted>
        <List.Item>
          From Big-C to mini-c: everyday creativity for well-being
        </List.Item>
        <List.Item>
          End-user development, malleable software, and socio-technical
          programming environments
        </List.Item>
        <List.Item>Fan community as part of creative process</List.Item>
        <List.Item>
          Culture biases and WEIRDness of creativity support research
        </List.Item>
        <List.Item>Online worlds and social creativity</List.Item>
        <List.Item>Human-AI co-creativity and agency</List.Item>
      </List>
      <p>
        Please feel free to propose discussion topics via the registration form
        below.
      </p>
      <Header content="Interested?" />
      <Alertbox
        text={
          <List bulleted>
            <List.Item>
              Special Interest Group (SIG) is a public session held at CHI 2023,
              and this pre-meeting registration is meant to help the organizers
              better understand the participants' interests and build sub-groups
              within the SIG meeting.
            </List.Item>
            <List.Item>
              You are welcome even if you don't have time to complete this form!
              Just drop by Room Y09.
            </List.Item>
            <List.Item>
              While this pre-meeting registration is optional, your{" "}
              <a href="https://cvent.me/YbG5VD">CHI registration</a> is
              mandatory.
            </List.Item>
          </List>
        }
        styling={{
          backgroundColor: "#dfd",
          color: "#5b9286",
          borderColor: "#5b928633",
        }}
      >
        <Button
          disabled
          icon="edit"
          color="green"
          size="huge"
          content="Registration (optional)"
          as="a"
          href="https://forms.gle/ioxbkGWXqgBYanSe7"
        />
      </Alertbox>
      <Header content="More details" />
      <p>
        More details on why and how we are organizing this SIG meeting can be
        found in{" "}
        <del>
          <a href="/chi2023/chi2023-sigccc.pdf">
            <Icon name="download" />
            the author version of the special interest group proposal
          </a>
        </del>{" "}
        <a href="https://doi.org/10.1145/3544549.3583175">
          the ACM Digital Library (open access)
        </a>
        .
      </p>
    </Segment>
  </SIGBody>
);
