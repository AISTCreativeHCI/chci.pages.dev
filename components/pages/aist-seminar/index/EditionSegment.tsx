import { FC, ReactNode } from "react";
import { Button, Segment } from "semantic-ui-react";
import { GenericHeroSegment } from "../GenericHeroSegment";

import seminars from "../seminars.json";
import { useSiteInfo } from "../../../lib/useSiteInfo";

interface IProps {
  children?: ReactNode;
  index?: number;
  text?: string;
  link?: string;
}

export const EditionSegment: FC<IProps> = ({ children, index, text, link }) => {
  const { ja } = useSiteInfo();
  if (!text && typeof index === "number") {
    text = ja
      ? `第${seminars[index].edition.ja}回について詳しく`
      : "More details";
  }
  if (!link && typeof index === "number") {
    link = ja ? `/aist-seminar/${index + 1}` : `/aist-seminar/en/${index + 1}`;
  }
  return (
    <Segment.Group>
      <Segment color="red" attached={text ? "top" : undefined}>
        {typeof index === "number" && (
          <GenericHeroSegment fullWidth index={index} />
        )}
        {children}
      </Segment>
      {text && (
        <Segment secondary attached="bottom" textAlign="right">
          <Button
            color="red"
            icon="arrow right"
            labelPosition="right"
            size="large"
            content={text}
            as="a"
            href={link}
          />
        </Segment>
      )}
    </Segment.Group>
  );
};
