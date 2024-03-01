import { FC } from "react";
import { Header, Segment, Table } from "semantic-ui-react";
import { useSiteInfo } from "../../../lib/useSiteInfo";
import { GMapsIframe } from "../GMapsIframe";

import { HeroSegment } from "../HeroSegment";
import { RegistrationBox } from "../RegistrationBox";

export const WorkshopSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment color="red">
      <HeroSegment
        fullWidth
        dateTime="2024年3月5日（火）13:00 ～ 15:00 / 開場 12:45"
        venue="東京大学本郷キャンパス 理学部7号館214室 / Zoom Webinar"
        header="AIST Creative HCI Workshop"
      />
      <p>
        Human-Computer InteractionやComputer
        Graphics、自然言語処理などの分野で学術的にも活躍しながら、コンテンツ産業（アニメ、漫画、メタバース）の研究開発の現場で、クリエータと共に創造性支援の課題に取り組んでいる方々をお呼びして講演いただき、パネルディスカッションします。言語は日本語です。
      </p>
      <a id="timetable" className="anchor"></a>
      <Header as="h2" dividing content={ja ? "プログラム" : "Timetable"} />
      <Table striped basic="very" size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{ja ? "時刻" : "Time"}</Table.HeaderCell>
            <Table.HeaderCell colSpan={2}>
              {ja ? "内容" : "Program"}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row disabled>
            <Table.Cell>12:45</Table.Cell>
            <Table.Cell>{ja ? "開場" : "Doors open"}</Table.Cell>
            <Table.Cell textAlign="right">
              {ja ? "ワークショップ運営" : "Organizers"}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>13:00</Table.Cell>
            <Table.Cell>
              {ja ? "ワークショップの開催経緯" : "Introduction of the seminar"}
            </Table.Cell>
            <Table.Cell textAlign="right">
              {ja ? "加藤 淳" : "Jun Kato"}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>13:10</Table.Cell>
            <Table.Cell>
              絵コンテのデジタル化から始めるアニメ制作支援
            </Table.Cell>
            <Table.Cell textAlign="right">
              加藤 淳（アーチ株式会社 技術顧問）
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>13:25</Table.Cell>
            <Table.Cell>アニメスタジオ OLMでの研究開発</Table.Cell>
            <Table.Cell textAlign="right">
              四倉 達夫, 前島 謙宣（株式会社オー・エル・エム・デジタル 取締役,
              R&amp;D Lead）
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>13:55</Table.Cell>
            <Table.Cell>LLM時代のマンガ機械翻訳</Table.Cell>
            <Table.Cell textAlign="right">
              石渡 祥之佑（Mantra株式会社 CEO）
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>14:15</Table.Cell>
            <Table.Cell>メタバースプラットフォームでのVR実験（仮）</Table.Cell>
            <Table.Cell textAlign="right">
              平木 剛史（クラスター株式会社 Senior Research Scientist）
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>14:35</Table.Cell>
            <Table.Cell>
              {ja ? "パネルディスカッション" : "Panel discussion"}
            </Table.Cell>
            <Table.Cell textAlign="right">
              {ja
                ? "加藤, 四倉, 前島, 石渡, 平木"
                : "Jun, Tatsuo, Akinobu, Shonosuke, Takefumi"}
            </Table.Cell>
          </Table.Row>
          <Table.Row disabled>
            <Table.Cell>14:55</Table.Cell>
            <Table.Cell>{ja ? "クロージング" : "Closing"}</Table.Cell>
            <Table.Cell textAlign="right">
              {ja ? "ワークショップ運営" : "Organizers"}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <RegistrationBox href="https://us06web.zoom.us/webinar/register/WN_9fSX5PZhQHu7nZ1xy-5EeA" />
      <a id="venue" className="anchor"></a>
      <Header as="h2" dividing content={ja ? "現地会場" : "Onsite venue"} />
      <p>
        {ja ? (
          <a href="https://www.u-tokyo.ac.jp/campusmap/cam01_06_06_j.html">
            東京大学本郷キャンパス 理学部7号館214室
          </a>
        ) : (
          <a href="https://www.u-tokyo.ac.jp/content/400020145.pdf">
            Faculty of Science Bldg.7, The University of Tokyo (No.105 on the
            PDF map)
          </a>
        )}
      </p>
      <GMapsIframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.524735991763!2d139.76091597791196!3d35.71331137257681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c2feeb8725d%3A0xea93a410d97e82d5!2z44CSMTEzLTAwMzMg5p2x5Lqs6YO95paH5Lqs5Yy65pys6YO377yX5LiB55uu77yTIOadseS6rOWkp-WtpiDnkIblrabpg6ggN-WPt-mkqA!5e0!3m2!1sja!2sjp!4v1709293300468!5m2!1sja!2sjp" />
    </Segment>
  );
};
