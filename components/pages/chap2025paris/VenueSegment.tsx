import { FC, ReactNode } from "react";
import {
  Grid,
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
  const { icon, dividing, ...props_ } = props;
  return (
    <Segment basic {...props_}>
      <a id="venue" className="anchor"></a>
      <Header
        as="h2"
        dividing={typeof dividing === "boolean" ? dividing : true}
        content="Venues"
        icon={icon}
      />
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as="h3" dividing color="orange" content="Public Seminar" />
            <GMapsIframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.6694011238196!2d2.3438620767089593!3d48.826368971327994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67213a6b6c81f%3A0x61fe1080582e2944!2sInria!5e0!3m2!1sja!2sfr!4v1737122564750!5m2!1sja!2sfr" />
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" dividing color="orange" content="Workshops" />
            <Grid stackable>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <GMapsIframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5252.207831615871!2d2.350052962472409!3d48.837156520865996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671ed664fecb1%3A0x74c421ef5f9ff35!2z44K044OW44Op44Oz!5e0!3m2!1sja!2sfr!4v1739025293824!5m2!1sja!2sfr" />
                </Grid.Column>
                <Grid.Column>
                  <GMapsIframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.5976014091748!2d2.3535760018588396!3d48.846636454187916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671faadc9abf1%3A0xb9f0dc922cc91d!2sSorbonne%20University!5e0!3m2!1sja!2sfr!4v1738265609478!5m2!1sja!2sfr" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
