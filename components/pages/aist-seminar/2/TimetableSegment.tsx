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
              <Table.Cell>10:00</Table.Cell>
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
              <Table.Cell>10:05</Table.Cell>
              <Table.Cell>{ja ? "招待講演 #1" : "Invited talk #1"}</Table.Cell>
              <Table.Cell textAlign="right">Amy Pavel</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>10:45</Table.Cell>
              <Table.Cell>{ja ? "質疑応答 #1" : "Q&A #1"}</Table.Cell>
              <Table.Cell textAlign="right">Amy Pavel</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>10:50</Table.Cell>
              <Table.Cell>{ja ? "招待講演 #2" : "Invited talk #2"}</Table.Cell>
              <Table.Cell textAlign="right">Xingyu Bruce Liu</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>11:30</Table.Cell>
              <Table.Cell>{ja ? "質疑応答 #2" : "Q&A #2"}</Table.Cell>
              <Table.Cell textAlign="right">Xingyu Bruce Liu</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>11:35</Table.Cell>
              <Table.Cell>
                {ja ? "パネルディスカッション" : "Panel discussion"}
              </Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "Pavel, Liu, 加藤" : "Amy, Bruce, Jun"}
              </Table.Cell>
            </Table.Row>
            <Table.Row disabled>
              <Table.Cell>11:55</Table.Cell>
              <Table.Cell>{ja ? "クロージング" : "Closing"}</Table.Cell>
              <Table.Cell textAlign="right">
                {ja ? "セミナー運営" : "Organizers"}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </>
    ),
    []
  );
  return bare ? content : <Segment basic>{bare}</Segment>;
};
