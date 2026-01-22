import { FC, ReactNode } from "react";
import {
  Button,
  Grid,
  Header,
  List,
  Message,
  Segment,
} from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { IFramePlayer } from "../IFramePlayer";

import speakers from "../invited-speakers.json";
import seminars from "../seminars.json";
import styles from "./PanelTopicSegment.module.css";

interface IProps {
  children?: ReactNode;
  index: number;
}

export const PanelTopicSegment: FC<IProps> = ({ children, index }) => {
  const { ja } = useSiteInfo();
  const si = seminars[index];
  const ss = speakers[index];
  const edition = ja ? `第${si.edition.ja}回` : `#${si.edition.en}`;
  const title = ja ? si.title.ja : si.title.en;
  const subtitle = ss
    .map((s) =>
      typeof s.name === "string" ? s.name : s.name[ja ? "ja" : "en"],
    )
    .join(", ");
  const youTubeUrl = `https://youtu.be/${si.youTubeVideoId}?t=${si.panelIndexTime}s`;
  const text = ja
    ? `第${seminars[index].edition.ja}回について詳しく`
    : "More details";
  const link = `/aist-seminar${ja ? "" : "/en"}/${index + 1}`;
  return (
    <Segment.Group>
      <Segment color="blue" attached={text ? "top" : undefined}>
        <Header as="h2" content={`${edition} ${title}`} subheader={subtitle} />
        {si.panelTopics ? (
          <Grid stackable>
            <Grid.Column width={6}>
              <IFramePlayer
                src={`https://www.youtube.com/embed/${si.youTubeVideoId}?start=${si.panelIndexTime}`}
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Message content={ja ? si.panelTopics.ja : si.panelTopics.en} />
              <List bulleted>
                <List.Item>
                  {ja ? "YouTube動画URL" : "YouTube video link"}:{" "}
                  <a href={youTubeUrl}>{youTubeUrl}</a>
                </List.Item>
                <List.Item>{timeCodeToString(si.panelIndexTime, ja)}</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        ) : (
          <></>
        )}
        {children}
      </Segment>
      <Segment secondary attached="bottom" textAlign="right">
        <div className={styles.buttons}>
          <Button
            color="red"
            size="tiny"
            content={ja ? "共有ノート" : "Shared notes"}
            as="a"
            href={`https://docs.google.com/document/d/${si.sharedNoteId}/edit`}
          />
          <Button
            color="blue"
            icon="arrow right"
            labelPosition="right"
            size="tiny"
            content={text}
            as="a"
            href={link}
          />
        </div>
      </Segment>
    </Segment.Group>
  );
};

function timeCodeToString(time: number, ja: boolean) {
  const hh = Math.floor(time / (60 * 60)),
    hhs = String(hh); //.padStart(2, "0");
  const mm = Math.floor(time / 60) - hh * 60,
    mms = String(mm).padStart(2, "0");
  const ss = time % 60,
    sss = String(ss).padStart(2, "0");
  return ja
    ? `開始時刻: ${hhs}時間${mms}分${sss}秒`
    : `Video offset: ${hhs}:${mms}:${sss}`;
}
