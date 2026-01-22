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
              <Table.Cell>17:30</Table.Cell>
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
              <Table.Cell>17:40</Table.Cell>
              <Table.Cell>{ja ? "招待講演 #1" : "Invited talk #1"}</Table.Cell>
              <Table.Cell textAlign="right">Xavier Lambein</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>18:10</Table.Cell>
              <Table.Cell>{ja ? "招待講演 #2" : "Invited talk #2"}</Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "松浦 知也" : "Tomoya Matsuura"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>18:30</Table.Cell>
              <Table.Cell>{ja ? "招待講演 #3" : "Invited talk #3"}</Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "橋本 麦" : "Baku Hashmoto"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>18:50</Table.Cell>
              <Table.Cell>
                {ja ? "パネルディスカッション" : "Panel discussion"}
              </Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "Lambein, 松浦, 橋本, 加藤" : "Xavier, Tomoya, Baku, Jun"}
              </Table.Cell>
            </Table.Row>
            <Table.Row disabled>
              <Table.Cell>19:25</Table.Cell>
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
