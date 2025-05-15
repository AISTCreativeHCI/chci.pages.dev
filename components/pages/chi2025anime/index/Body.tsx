import { FC } from "react";
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Message,
  Segment,
  Table,
} from "semantic-ui-react";

import { Alertbox } from "../../Alertbox";
import { SIGBody } from "../../sig-template/SIGBody";

const lastUpdate = "May 16, 2025";

const timetable: {
  title: string;
  name: string;
  time: string;
  material?: string;
}[] = [
  {
    title: 'Introduction to "Anime SIG"',
    name: "Jun Kato",
    time: "11:10-11:20",
    material: "/chi2025anime/chi2025-animesig-intro-kato.pdf",
  },
  {
    title: 'Global condition of anime studies – what is "anime research"?',
    name: "Ryotaro Mihara",
    time: "11:20-11:30",
    material: "/chi2025anime/chi2025-animesig-mihara.pdf",
  },
  {
    title: "Overview of the Japanese anime production workflow",
    name: "Akinobu Maejima",
    time: "11:30-11:45",
    material: "/chi2025anime/chi2025-animesig-maejima.pdf",
  },
  {
    title:
      "Anime R&D case studies – how researchers developed tools for anime production",
    name: "Yuki Koyama",
    time: "11:45-11:50",
    material: "/chi2025anime/chi2025-animesig-koyama.pdf",
  },
  {
    title: "Emerging fields and translational research from anime to HAI",
    name: "Katie Seaborn",
    time: "11:50-11:55",
    material: "/chi2025anime/chi2025-animesig-seaborn.pdf",
  },
  {
    title: "Q&A and discussion with audiences",
    name: "All",
    time: "12:00-12:40",
  },
];

const events: {
  title: string;
  shorthand?: string;
  dates: string;
  url: string;
}[] = [
  {
    title:
      "R&D for Anime Production: State-of-the-Art and Future Prospects (ACM SIGGRAPH Asia 2021)",
    dates: "December 16, 2021",
    url: "https://research.archinc.jp/en/events/siggraph-asia-2021/",
  },
  {
    title: "AIST Creative HCI Seminar",
    dates: "March to December, 2023",
    url: "https://chci.pages.dev/aist-seminar",
  },
  {
    title:
      "Special Interest Group on Creativity and Cultures in Computing (ACM CHI 2023)",
    shorthand: "SIGCCC",
    dates: "April 24, 2023",
    url: "https://chci.pages.dev/chi2023",
  },
  {
    title:
      "R&D for Anime Production: Collaborative Cultural Craft of Art, Science, and Engineering (ACM SIGGRAPH Asia 2024)",
    dates: "December 6, 2024",
    url: "https://research.archinc.jp/en/events/siggraph-asia-2024/",
  },
  {
    title: "A Workshop on Creativity support for Hand-drawn Art Practices",
    shorthand: "CHAP2025 Paris",
    dates: "February 10-12, 2025",
    url: "https://chci.pages.dev/chap2025paris",
  },
];

export const Body: FC = () => (
  <SIGBody
    path="chi2025anime"
    shorthand="Anime SIG"
    hashtag="AnimeSIG"
    title="[ACM CHI 2025] Anime SIG"
    description="This page introduces the Anime SIG at CHI 2025"
    image="/chi2025anime/chi2025-animesig-title.png"
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
    preFooter={
      <Segment color="pink">
        <a id="events" className="anchor"></a>
        <Header as="h2" content="Relevant events" dividing />
        <List selection relaxed divided>
          {events.map(({ title, shorthand, dates, url }, index) => (
            <List.Item key={index} as="a" href={url}>
              <List.Content>
                <List.Header>{title}</List.Header>
                <List horizontal divided>
                  <List.Item>
                    <Icon name="calendar" />
                    <List.Content>{dates}</List.Content>
                  </List.Item>
                  {shorthand && (
                    <List.Item>
                      <Icon name="hashtag" />
                      <List.Content>{shorthand}</List.Content>
                    </List.Item>
                  )}
                </List>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>
    }
    color="pink"
    lastUpdate={lastUpdate}
    styling={{
      brandBackground: "#ff90be",
      brandBackgroundHover: "#ff90becc",
    }}
  >
    <Segment color="pink">
      <a id="report" className="anchor"></a>
      <Header as="h2" content="After report" dividing />
      <p>
        This SIG event at CHI 2025 concluded with an audience that filled the
        entire room. Thank you very much for attending! You can find a beautiful
        drawing, a link to the shared notes, some photos, and the slides from
        the organizers in this after report. Basic information is archived{" "}
        <a href="#about">below</a>.
      </p>
      <a id="notes" className="anchor"></a>
      <Header as="h3" content="Shared notes" />
      <p>
        This beautiful graphic recording was created during the SIG by{" "}
        <a href="https://shmuh.co/">Shm Garanganao Almeda</a> and is reposted
        here by their courtesy! You can also find a link to the shared Google
        Docs notes below.
      </p>
      <a href="/chi2025anime/graphic-recording-by-shm.jpg">
        <Image src="/chi2025anime/graphic-recording-by-shm.jpg" fluid alt="" />
      </a>
      <Alertbox
        styling={{
          backgroundColor: "#ff90be33",
          color: "#a79",
          borderColor: "#a796",
        }}
      >
        <Button
          icon="text file"
          color="pink"
          size="huge"
          content="Google Docs"
          as="a"
          href="https://bit.ly/chi2025anime"
        />
      </Alertbox>
      <a id="photos" className="anchor"></a>
      <Header as="h3" content="Photos" />
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <a href="/chi2025anime/DSC07649.jpg">
              <Image fluid src="/chi2025anime/DSC07649_small.jpg" />
            </a>
          </Grid.Column>
          <Grid.Column>
            <a href="/chi2025anime/DSC07726.jpg">
              <Image fluid src="/chi2025anime/DSC07726_small.jpg" />
            </a>
          </Grid.Column>
          <Grid.Column>
            <a href="/chi2025anime/DSC07894.jpg">
              <Image fluid src="/chi2025anime/DSC07894_small.jpg" />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <a id="timetable" className="anchor"></a>
      <Header as="h3" content="Timetable and presentation materials" />
      <List divided relaxed>
        {timetable.map(({ title, name, time, material }, index) => (
          <List.Item key={index}>
            {material && (
              <List.Content floated="right">
                <Button
                  circular
                  icon="download"
                  as="a"
                  href={material}
                  alt="Download"
                />
              </List.Content>
            )}
            <List.Content>
              <List.Header as="h4">{title}</List.Header>
              <List horizontal divided>
                <List.Item>
                  <Icon name="clock" />
                  <List.Content>{time}</List.Content>
                </List.Item>
                <List.Item>
                  <Icon name="user" />
                  <List.Content>{name}</List.Content>
                </List.Item>
              </List>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
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
      <Header content="Abstract" id="abstract" />
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
      <Header content="Keywords" id="keywords" />
      <p>
        Anime, creativity support, interaction design, social science,
        anthropology, psychology
      </p>
      <Header content="Interested?" id="registration" />
      <p>Registration is now closed.</p>
      <Alertbox
        // text={
        //   <List bulleted>
        //     <List.Item>
        //       Special Interest Group (SIG) is a public session held at CHI 2025,
        //       and this pre-meeting registration is meant to help the organizers
        //       better understand the participants' interests and build sub-groups
        //       within the SIG meeting.
        //     </List.Item>
        //     <List.Item>
        //       You are welcome even if you don't have time to complete this form!
        //     </List.Item>
        //     <List.Item>
        //       While this pre-meeting registration is optional, your CHI
        //       registration is mandatory.
        //     </List.Item>
        //   </List>
        // }
        styling={{
          backgroundColor: "#ff90be33",
          color: "#a79",
          borderColor: "#a796",
        }}
      >
        <Button
          disabled
          icon="edit"
          color="pink"
          size="huge"
          content="Registration (optional)"
          as="a"
          href="https://forms.gle/vuZjTTLbPiWLXvxQ8"
        />
      </Alertbox>
      <Header content="SIG proposal" id="proposal" />
      <p>
        More details on why and how we are organizing this SIG meeting can be
        found in{" "}
        <del>
          <a href="/chi2025anime/chi2025-animesig.pdf">
            <Icon name="download" />
            the author version of the special interest group proposal
          </a>
        </del>{" "}
        <a href="https://doi.org/10.1145/3706599.3716296">
          the ACM Digital Library (open access)
        </a>
        .
      </p>
    </Segment>
  </SIGBody>
);
