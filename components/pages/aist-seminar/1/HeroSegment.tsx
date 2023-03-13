import { FC } from "react";
import { Button, Divider, Header, Image, List } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";

import styles from "./HeroSegment.module.css";

interface IProps {
  fullWidth?: boolean;
}

export const HeroSegment: FC<IProps> = ({ fullWidth }) => {
  const { ja } = useSiteInfo();
  return (
    <>
      <div
        className={`${styles.details}${
          fullWidth ? ` ${styles.fullwidth}` : ""
        }`}
      >
        <div className={styles.title}>
          <Header
            as="h2"
            content="AIST Creative HCI Seminar #1"
            subheader={ja && "第一回 AIST Creative HCI Seminar"}
          />
          <List>
            {fullWidth && (
              <List.Item
                content={
                  ja
                    ? "招待講演者: Jonas Frich, Zhicong Lu"
                    : "Invited speakers: Jonas Frich, Zhicong Lu"
                }
              />
            )}
            <List.Item
              content={
                ja
                  ? "日時: 2023年3月7日（火）13:00 ～ 16:30 / 開場 12:30"
                  : "Date: Mar. 7th, 2023 / Time: 13:00-16:30 (Japan Standard Time)"
              }
            />
            <List.Item
              content={
                ja
                  ? "会場: 東京大学本郷キャンパス 福武ラーニングシアター / YouTube Live"
                  : "Fukutake Learning Theater, The University of Tokyo / YouTube Live (Hybrid)"
              }
            />
          </List>
        </div>
        <div className={styles.images}>
          <Image
            avatar
            src="/images/1-jonas-frich.jpg"
            alt="[Photo: Jonas Frich]"
          />
          <Image
            avatar
            src="/images/1-zhicong-lu.jpg"
            alt="[Photo: Zhicong Lu]"
          />
        </div>
      </div>
      {!fullWidth && <Divider hidden />}
      <div className={styles.wrapper}>
        <iframe
          className={styles.player}
          src="https://www.youtube.com/embed/HYGUCwoOHCk"
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
              href="https://docs.google.com/document/d/1GAOBgEtpCBINNIjNGwp56U5k-3atFPVTpeJ27wrEudY/edit"
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
              href="https://forms.office.com/r/iMbrDZrttL"
            />
          </Button.Group>
        </div>
      </div>
    </>
  );
};
