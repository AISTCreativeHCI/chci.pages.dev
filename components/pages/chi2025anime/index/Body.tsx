import { FC } from "react";
import {
  Button,
  Header,
  Icon,
  List,
  Message,
  Segment,
  Table,
} from "semantic-ui-react";

import { Alertbox } from "../../Alertbox";
import { SIGBody } from "../../sig-template/SIGBody";

const lastUpdate = "April 23, 2025";

export const Body: FC = () => (
  <SIGBody
    path="chi2025anime"
    shorthand="Anime SIG"
    hashtag="AnimeSIG"
    title="[ACM CHI 2025] Anime SIG"
    description="This page introduces the Anime SIG at CHI 2025"
    header={
      <>
        <Header
          as="h1"
          content="Anime SIG"
          subheader="Researching Japanese Animation From Technical, Cultural, and Industrial Perspectives"
        />
        <p style={{ marginTop: "-0.8em" }}>
          &mdash;「アニメ」を技術・文化・産業の観点で研究する
        </p>
      </>
    }
    organizers={[
      {
        url: "https://junkato.jp",
        photoPath: "/images/junkato.jpg",
        name: "Jun Kato",
        affiliation: "AIST & Arch Inc.",
      },
      {
        url: "https://koyama.xyz",
        photoPath: "/images/yukikoyama.jpg",
        name: "Yuki Koyama",
        affiliation: "The University of Tokyo & Graphinica, Inc.",
      },
      {
        name: "Akinobu Maejima",
        photoPath: "/images/akinobumaejima.jpg",
        affiliation: "OLM Digital, Inc.",
      },
      {
        url: "https://rmihara.net/",
        name: "Ryotaro Mihara",
        photoPath: "/images/ryotaromihara.jpg",
        affiliation: "Keio University & Arch Inc.",
      },
      {
        url: "https://katieseaborn.com",
        photoPath: "/images/katieseaborn.jpg",
        name: "Katie Seaborn",
        affiliation: "Institute of Science Tokyo",
      },
    ]}
    color="pink"
    lastUpdate={lastUpdate}
    styling={{
      brandBackground: "#ff90be",
      brandBackgroundHover: "#ff90becc",
    }}
  >
    <Segment color="pink">
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
                      <strong>Onsite venue:</strong> Room G217, Pacifico North
                      2F
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
                    <a href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=Anime+SIG%3A+Researching+Japanese+Animation+From+Technical%2C+Cultural%2C+and+Industrial+Perspectives&iso=20250428T1110&p1=667&ah=1&am=30">
                      Mon, Apr 28 | 11:10 - 12:40
                    </a>
                  }
                ></List.Item>
              </List>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell width={3}>CHI &apos;25 Program</Table.HeaderCell>
            <Table.Cell>
              <List>
                <List.Item
                  icon="book"
                  content={
                    <a href="https://programs.sigchi.org/chi/2025/program/content/189764">
                      Anime SIG: Researching Japanese Animation From Technical,
                      Cultural, and Industrial Perspectives - CHI &apos;25
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
        Japanese animation, or anime for short, has attracted global attention
        with its immense international growth. Despite its popularity, academic
        research has been limited to media studies, with grand questions like
        “what is anime,” i.e., observational and analytical perspectives, and
        more recently in computer science from the perspective of “how to
        generate the anime look,” focusing on representing visual
        characteristics with computer vision and machine learning methods. This
        Special Interest Group (SIG) aims to deepen this multifaceted cultural
        phenomenon from multidisciplinary perspectives, including “who” makes
        anime, “how” creativity support tools can aid the process, and “what”
        about non-visual aspects like anime voices.
      </p>
      <p>
        Organized by experts from industry and academia, this SIG invites
        participants to the emerging area of anime research and aims to open up
        a new alley for human-computer interaction (HCI) research through
        collective discussion on potential directions and community fostering of
        anime-interested researchers.
      </p>
      <Message
        icon="info circle"
        info
        content={
          <>
            <strong>[For Japanese speakers]</strong>{" "}
            <abbr title="Special Interest Group">SIG</abbr>{" "}
            は講演を聞くだけでなくインタラクティブに議論へ参加することが期待されるセッションですが、当セッションでは質疑やグループワークなどの際、日本語話者のオーガナイザが一人以上対応可能なように構成しますので、言語バリアを気にせず奮ってご参加ください。
          </>
        }
      />
      <Header content="Keywords" />
      <p>
        Anime, creativity support, interaction design, social science,
        anthropology, psychology
      </p>
      <Header content="Interested?" />
      <Alertbox
        text={
          <List bulleted>
            <List.Item>
              Special Interest Group (SIG) is a public session held at CHI 2025,
              and this pre-meeting registration is meant to help the organizers
              better understand the participants' interests and build sub-groups
              within the SIG meeting.
            </List.Item>
            <List.Item>
              You are welcome even if you don't have time to complete this form!
            </List.Item>
            <List.Item>
              While this pre-meeting registration is optional, your CHI
              registration is mandatory.
            </List.Item>
          </List>
        }
        styling={{
          backgroundColor: "#ff90be33",
          color: "#a79",
          borderColor: "#a796",
        }}
      >
        <Button
          icon="edit"
          color="pink"
          size="huge"
          content="Registration (optional)"
          as="a"
          href="https://forms.gle/vuZjTTLbPiWLXvxQ8"
        />
      </Alertbox>
      <Header content="More details" />
      <p>
        More details on why and how we are organizing this SIG meeting can be
        found in{" "}
        <a href="/chi2025anime/chi2025-siganime.pdf">
          <Icon name="download" />
          the author version of the special interest group proposal
        </a>
        .
      </p>
    </Segment>
  </SIGBody>
);
