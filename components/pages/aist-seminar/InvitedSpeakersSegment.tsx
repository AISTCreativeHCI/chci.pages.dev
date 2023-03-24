import { FC, ReactNode } from "react";
import {
  Grid,
  Header,
  Image,
  Segment,
  SemanticWIDTHS,
} from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";

import styles from "./InvitedSpeakersSegment.module.css";

interface IProps {
  speakers: {
    name: string;
    affiliation: string;
    photoPath: string;
    bio: ReactNode;
  }[];
}

export const InvitedSpeakersSegment: FC<IProps> = ({ speakers }) => {
  const { ja } = useSiteInfo();
  return (
    <Segment basic>
      <a id="invited-speakers" className="anchor"></a>
      <Header
        as="h2"
        dividing
        content={ja ? "招待講演者" : "Invited speakers"}
      />
      <Grid
        columns={speakers.length as SemanticWIDTHS}
        stackable
        className={styles.speakers}
      >
        {speakers.map((s) => (
          <Grid.Column key={s.photoPath}>
            <Header
              as="h4"
              image={<Image src={s.photoPath} alt={`[Photo: ${s.name}]`} />}
              content={s.name}
              subheader={s.affiliation}
            />
            {s.bio}
          </Grid.Column>
        ))}
      </Grid>
    </Segment>
  );
};
