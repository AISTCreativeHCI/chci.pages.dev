import { FC, ReactNode } from "react";
import { Button, Segment } from "semantic-ui-react";

interface IProps {
  children?: ReactNode;
  text?: string;
  link?: string;
}

export const EditionSegment: FC<IProps> = ({ children, text, link }) => (
  <Segment.Group>
    <Segment color="red" attached={text ? "top" : undefined}>
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
