import { FC } from "react";
import { Button, Header, Icon, List, Segment, Table } from "semantic-ui-react";

import { Alertbox } from "../../Alertbox";
import { SIGBody } from "../../sig-template/SIGBody";

export const Body: FC = () => (
  <SIGBody
    path="chi2025anime"
    shorthand="Anime SIG"
    title="[ACM CHI 2025] Anime SIG"
    description="This page introduces the Anime SIG at CHI 2025"
    header={
      <Header
        as="h1"
        content="Anime SIG"
        subheader="Researching Japanese Animation From Technical, Cultural, and Industrial Perspectives"
      />
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
        affiliation: "AIST & Graphinica, Inc.",
      },
      {
        name: "Akinobu Maejima",
        affiliation: "OLM Digital, Inc.",
      },
      {
        url: "https://rmihara.net/",
        name: "Ryotaro Mihara",
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
    lastUpdate="February 23, 2025"
    styling={{
      brandBackground: "#ff90be",
      brandBackgroundHover: "#ff90becc",
    }}
  >
    <Segment color="pink">
      <a id="about" className="anchor"></a>
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
      <Header content="Keywords" />
      <p>
        Anime, creativity support, interaction design, social science,
        anthropology, psychology
      </p>
      <Header content="Interested?" />
      <p>The registration form opens soon.</p>
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
          disabled
          icon="edit"
          color="pink"
          size="huge"
          content="Registration (optional)"
          as="a"
          href="#"
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
