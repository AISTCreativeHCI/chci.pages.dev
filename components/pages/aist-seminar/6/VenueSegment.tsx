import { FC } from "react";
import { Header, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";

import styles from "./VenueSegment.module.css";

export const VenueSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment basic>
      <a id="venue" className="anchor"></a>
      <Header as="h2" dividing content={ja ? "現地会場" : "Onsite venue"} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.576638462137!2d139.75883396612772!3d35.71203448588789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c307e317f31%3A0xa5a4e210ad6b021e!2z5p2x5Lqs5aSn5a2m5aSn5a2m6ZmiIOaDheWgseWtpueSsOODu-emj-atpuODm-ODvOODqw!5e0!3m2!1sja!2sjp!4v1675821575074!5m2!1sja!2sjp"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      ></iframe>
    </Segment>
  );
};
