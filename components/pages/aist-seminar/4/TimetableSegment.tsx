import { FC, useMemo } from "react";
import { Header, Segment, Table } from "semantic-ui-react";

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
              <Table.Cell>10:30</Table.Cell>
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
              <Table.Cell>10:35</Table.Cell>
              <Table.Cell>{ja ? "招待講演 #1" : "Invited talk #1"}</Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "原 航太郎" : "Kotaro Hara"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>11:10</Table.Cell>
              <Table.Cell>{ja ? "招待講演 #2" : "Invited talk #2"}</Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "荒川 陸" : "Riku Arakawa"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>11:35</Table.Cell>
              <Table.Cell>{ja ? "招待講演 #3" : "Invited talk #3"}</Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "中川 茉奈美" : "Manami Nakagawa"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>11:55</Table.Cell>
              <Table.Cell>
                {ja ? "パネルディスカッション" : "Panel discussion"}
              </Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "原, 荒川, 中川, 加藤" : "Kotaro, Riku, Manami, Jun"}
              </Table.Cell>
            </Table.Row>
            <Table.Row disabled>
              <Table.Cell>12:25</Table.Cell>
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
