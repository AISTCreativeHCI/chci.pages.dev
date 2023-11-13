import { FC, ReactNode, useMemo } from "react";
import {
  Grid,
  Header,
  Image,
  List,
  Segment,
  SemanticWIDTHS,
} from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";

import styles from "./InvitedSpeakersSegment.module.css";

interface IProps {
  bare?: boolean;
  list?: boolean;
  speakers: {
    name: string;
    affiliation: string;
    photoPath: string;
    link?: string;
    bio?: ReactNode;
  }[];
}

export const InvitedSpeakersSegment: FC<IProps> = ({
  bare,
  list,
  speakers,
}) => {
  const { ja } = useSiteInfo();
  const content = useMemo(
    () => (
      <>
        <a id="invited-speakers" className="anchor"></a>
        <Header
          as="h2"
          dividing
          content={ja ? "招待講演者" : "Invited speakers"}
        />
        {list ? (
          <List relaxed className={styles.speakers}>
            {speakers.map((s) => (
              <List.Item>
                <Image avatar src={s.photoPath} alt={`[Photo: ${s.name}]`} />
                <List.Content>
                  <List.Header
                    content={s.name}
                    as={s.link ? "a" : "div"}
                    href={s.link || undefined}
                  />
                  <List.Description
                    content={
                      <>
                        <p>{s.affiliation}</p>
                        {s.bio}
                      </>
                    }
                  />
                </List.Content>
              </List.Item>
            ))}
          </List>
        ) : (
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
        )}
      </>
    ),
    [speakers]
  );
  return bare ? content : <Segment basic>{content}</Segment>;
};
