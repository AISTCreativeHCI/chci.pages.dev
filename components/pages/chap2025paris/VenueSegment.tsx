import { FC, ReactNode } from "react";
import {
  Header,
  Segment,
  SegmentProps,
  SemanticICONS,
} from "semantic-ui-react";

import { GMapsIframe } from "../aist-seminar/GMapsIframe";

export const VenueSegment: FC<
  SegmentProps & {
    icon?: SemanticICONS | ReactNode;
    dividing?: boolean;
  }
> = (props) => {
  const { icon, dividing } = props;
  return (
    <Segment basic {...props}>
      <a id="venue" className="anchor"></a>
      <Header
        as="h2"
        dividing={typeof dividing === "boolean" ? dividing : true}
        content="Onsite venue"
        icon={icon}
      />
      <p></p>
      <GMapsIframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.6694011238196!2d2.3438620767089593!3d48.826368971327994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67213a6b6c81f%3A0x61fe1080582e2944!2sInria!5e0!3m2!1sja!2sfr!4v1737122564750!5m2!1sja!2sfr" />
    </Segment>
  );
};
