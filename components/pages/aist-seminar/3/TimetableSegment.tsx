import { FC, useMemo } from "react";
import { Header, Icon, Segment, Table } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";

interface IProps {
  bare?: boolean;
}

export const TimetableSegment: FC<IProps> = ({ bare }) => {
  const { ja } = useSiteInfo();
  const content = useMemo(
    () => (
      <>
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
            <Table.Row>
              <Table.Cell>15:00</Table.Cell>
              <Table.Cell>
                {ja
                  ? "「AIST Creative HCI Seminar」の開催経緯"
                  : "Introduction of the seminar"}
              </Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "加藤 淳" : "Jun Kato"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>15:05</Table.Cell>
              <Table.Cell>
                <a href="/files/3-ami-motomura.pdf">
                  <Icon name="file" />{" "}
                  {ja
                    ? "招待講演 #3 / Late-Breaking Work & Interactivity (講演資料ダウンロード可)"
                    : "Invited talk #3 / Late-Breaking Work & Interactivity"}
                </a>
              </Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "元村 愛美" : "Motomura Ami"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>15:35</Table.Cell>
              <Table.Cell>
                <a href="/files/3-hiromu-yakura.pdf">
                  <Icon name="file" />{" "}
                  {ja
                    ? "招待講演 #2 / Case Studies & Doctoral Consortium (講演資料ダウンロード可)"
                    : "Invited talk #2 / Case Studies & Doctoral Consortium"}
                </a>
              </Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "矢倉 大夢" : "Hiromu Yakura"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>16:05</Table.Cell>
              <Table.Cell>
                <a href="/files/3-koya-narumi.pdf">
                  <Icon name="file" />{" "}
                  {ja
                    ? "招待講演 #1 / Papers (講演資料ダウンロード可)"
                    : "Invited talk #1 / Papers"}
                </a>
              </Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "鳴海 紘也" : "Koya Narumi"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>16:35</Table.Cell>
              <Table.Cell>
                <a href="/files/3-jun-kato.pdf">
                  <Icon name="file" />{" "}
                  {ja
                    ? "Student Competitions & Special Interest Group (講演資料ダウンロード可)"
                    : "Student Competitions & Special Interest Group"}
                </a>
              </Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "加藤 淳" : "Jun Kato"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>16:45</Table.Cell>
              <Table.Cell>
                {ja ? "パネルディスカッション" : "Panel discussion"}
              </Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "鳴海, 矢倉, 元村, 加藤" : "Koya, Hiromu, Ami, Jun"}
              </Table.Cell>
            </Table.Row>
            <Table.Row disabled>
              <Table.Cell>16:55</Table.Cell>
              <Table.Cell>{ja ? "クロージング" : "Closing"}</Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "セミナー運営" : "Organizers"}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </>
    ),
    [],
  );
  return bare ? content : <Segment basic>{content}</Segment>;
};
