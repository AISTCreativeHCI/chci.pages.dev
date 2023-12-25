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
import speakers from "./invited-speakers.json";

interface IProps {
  bare?: boolean;
  list?: boolean;
  speakers:
    | {
        name: string;
        affiliation: string;
        photoPath: string;
        link?: string;
        bio?: ReactNode;
      }[]
    | number;
  bios?: ReactNode[];
}

export const InvitedSpeakersSegment: FC<IProps> = ({
  bare,
  list,
  speakers: speakersOrIndex,
  bios,
}) => {
  const { ja } = useSiteInfo();
  const ss =
    typeof speakersOrIndex === "number"
      ? speakers[speakersOrIndex]
      : speakersOrIndex;
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
            {ss.map((s, i) => (
              <List.Item key={i}>
                <Image
                  avatar
                  src={s.photoPath}
                  alt={`[Photo: ${
                    typeof s.name === "string"
                      ? s.name
                      : ja
                      ? s.name.ja
                      : s.name.en
                  }]`}
                />
                <List.Content>
                  <List.Header
                    content={
                      typeof s.name === "string"
                        ? s.name
                        : ja
                        ? s.name.ja
                        : s.name.en
                    }
                    as={typeof s.link !== "undefined" ? "a" : "div"}
                    href={
                      typeof s.link === "undefined"
                        ? undefined
                        : typeof s.link === "string"
                        ? s.link
                        : ja
                        ? s.link.ja
                        : s.link.en
                    }
                  />
                  <List.Description
                    content={
                      <>
                        <p>
                          {typeof s.affiliation === "string"
                            ? s.affiliation
                            : ja
                            ? s.affiliation.ja
                            : s.affiliation.en}
                        </p>
                        {(s as any).bio || (bios && bios[i])}
                      </>
                    }
                  />
                </List.Content>
              </List.Item>
            ))}
          </List>
        ) : (
          <Grid
            columns={ss.length as SemanticWIDTHS}
            stackable
            className={styles.speakers}
          >
            {ss.map((s, i) => (
              <Grid.Column key={s.photoPath}>
                <Header
                  as="h4"
                  image={
                    <Image
                      src={s.photoPath}
                      alt={`[Photo: ${
                        typeof s.name === "string"
                          ? s.name
                          : s.name[ja ? "ja" : "en"]
                      }]`}
                    />
                  }
                  content={
                    typeof s.name === "string"
                      ? s.name
                      : s.name[ja ? "ja" : "en"]
                  }
                  subheader={s.affiliation}
                />
                {(s as any).bio || (bios && bios[i])}
              </Grid.Column>
            ))}
          </Grid>
        )}
      </>
    ),
    [speakersOrIndex, bios]
  );
  return bare ? content : <Segment basic>{content}</Segment>;
};
