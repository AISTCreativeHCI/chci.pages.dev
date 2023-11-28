import { FC } from "react";
import { Header, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { GMapsIframe } from "../GMapsIframe";

export const VenueSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment basic>
      <a id="venue" className="anchor"></a>
      <Header as="h2" dividing content={ja ? "現地会場" : "Onsite venue"} />
      <p>
        {ja ? (
          <a href="https://www.riise.u-tokyo.ac.jp/contact">
            東京大学 目白台インターナショナル・ビレッジ ENTREPRENEUR VILLAGE
          </a>
        ) : (
          <a href="https://www.riise.u-tokyo.ac.jp/en/contact">
            ENTREPRENEUR VILLAGE, Mejirodai International Village, The
            University of Tokyo
          </a>
        )}
      </p>
      <GMapsIframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.351478789155!2d139.7257924!3d35.7175735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d9d691a4cbd%3A0x1a81eda93c4c65fd!2z5p2x5Lqs5aSn5a2mIOebrueZveWPsOOCpOODs-OCv-ODvOODiuOCt-ODp-ODiuODq-ODu-ODk-ODrOODg-OCuA!5e0!3m2!1sja!2sjp!4v1701200950279!5m2!1sja!2sjp" />
    </Segment>
  );
};
