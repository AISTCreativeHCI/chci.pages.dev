import { FC } from "react";
import { Button } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { HeroSegment as GenericHeroSegment } from "../HeroSegment";

import styles from "./HeroSegment.module.css";

interface IProps {
  fullWidth?: boolean;
}

export const HeroSegment: FC<IProps> = ({ fullWidth }) => {
  const { ja } = useSiteInfo();
  return (
    <GenericHeroSegment
      fullWidth={fullWidth}
      edition={2}
      editionJa="二"
      dateTime={
        ja
          ? "日時: 2023年4月14日（金）10:00 ～ 12:00"
          : "Date: Apr. 14th, 2023 / Time: 10:00-12:00 (Japan Standard Time)"
      }
      venue={ja ? "会場: Zoom Webinar" : "Zoom Webinar (Online)"}
      topic={ja ? "テーマ: AI × HCI（HCIのためのAI）" : "Topic: AI for HCI"}
      speakers={[
        { name: "Amy Pavel", photoPath: "/images/2-amy-pavel.png" },
        {
          name: "Xingyu Bruce Liu",
          photoPath: "/images/2-xingyu-bruce-liu.jpg",
        },
      ]}
    >
      <div className={styles.wrapper}>
        <iframe
          className={styles.player}
          src="https://www.youtube.com/embed/6hEk_qXs_gM"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className={styles.button}>
          <Button.Group>
            <Button
              primary
              icon="file"
              size="large"
              content={
                <span>
                  <span className="show-on-small-screens" aria-hidden="true">
                    {ja ? "ノート" : "Notes"}
                  </span>
                  <span className="hide-on-small-screens">
                    {ja ? "共有ノート" : "Shared notes"}
                  </span>
                </span>
              }
              as="a"
              href="https://docs.google.com/document/d/11IjtlIVx-Cfr8vDg2bgY7B7o6MxY4VZDNU7sKglNptY/edit"
            />
            <Button
              icon="edit"
              size="large"
              content={
                <span>
                  <span className="show-on-small-screens" aria-hidden="true">
                    {ja ? "アンケート" : "Questionnaire"}
                  </span>
                  <span className="hide-on-small-screens">
                    {ja ? "視聴者向けアンケート" : "Post-seminar Questionnaire"}
                  </span>
                </span>
              }
              as="a"
              href="https://forms.office.com/r/ZB4yGGQTQv"
            />
          </Button.Group>
        </div>
      </div>
    </GenericHeroSegment>
  );
};
