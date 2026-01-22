import { FC } from "react";
import { Button, Image, List, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";

import speakers from "../invited-speakers.json";
import seminars from "../seminars.json";

interface IProps {
  list: (typeof speakers)[0];
  edition: number;
}

export const SpeakersSegment: FC<IProps> = ({ list, edition }) => {
  const { ja } = useSiteInfo();
  const text = `#${seminars[edition].edition.en} ${
    ja ? seminars[edition].title.ja : seminars[edition].title.en
  }`;
  const link = `/aist-seminar${ja ? "" : "/en"}/${edition + 1}`;
  return (
    <Segment.Group>
      <Segment key={`invited-speakers-${edition}`}>
        <List relaxed>
          {list.map((s, i) => (
            <List.Item key={`invited-speakers-${edition}-${i}`}>
              <List.Content floated="right">
                <Button
                  primary
                  icon="youtube"
                  labelPosition="right"
                  size="tiny"
                  content={ja ? "講演" : "Talk"}
                  as="a"
                  href={
                    typeof s.talkUrl === "string"
                      ? s.talkUrl
                      : ja
                        ? s.talkUrl.ja
                        : s.talkUrl.en
                  }
                  disabled={!s.talkUrl}
                />
              </List.Content>
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
                      {(s as any).bio}
                    </>
                  }
                />
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>
      <Segment secondary attached="bottom" textAlign="right">
        <Button
          icon="arrow right"
          labelPosition="right"
          size="tiny"
          content={text}
          as="a"
          href={link}
        />
      </Segment>
    </Segment.Group>
  );
};
