import { FC } from "react";
import { Header, Segment, Table } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";

export const TimetableSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment basic>
      <a id="invited-speakers" className="anchor"></a>
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
            <Table.Cell>12:30</Table.Cell>
            <Table.Cell>{ja ? "開場" : "Doors open"}</Table.Cell>
            <Table.Cell textAlign="right">
              {ja ? "セミナー運営" : "Organizers"}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>13:00</Table.Cell>
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
            <Table.Cell>13:10</Table.Cell>
            <Table.Cell>
              {ja
                ? "共催「Japan ACM SIGCHI Chapter」の紹介"
                : "Introduction of Japan ACM SIGCHI Chapter"}
            </Table.Cell>
            <Table.Cell textAlign="right">
              {ja ? "中小路 久美代" : "Nakakoji Kumiyo"}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>13:15</Table.Cell>
            <Table.Cell>{ja ? "招待講演 #1" : "Invited talk #1"}</Table.Cell>
            <Table.Cell textAlign="right">Jonas Frich</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>14:15</Table.Cell>
            <Table.Cell>{ja ? "質疑応答 #1" : "Q&A #1"}</Table.Cell>
            <Table.Cell textAlign="right">Jonas Frich</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>14:30</Table.Cell>
            <Table.Cell>{ja ? "招待講演 #2" : "Invited talk #2"}</Table.Cell>
            <Table.Cell textAlign="right">Zhicong Lu</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>15:30</Table.Cell>
            <Table.Cell>{ja ? "質疑応答 #2" : "Q&A #2"}</Table.Cell>
            <Table.Cell textAlign="right">Zhicong Lu</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>15:45</Table.Cell>
            <Table.Cell>
              {ja ? "パネルディスカッション" : "Panel discussion"}
            </Table.Cell>
            <Table.Cell textAlign="right">
              {ja ? "Frich, Lu, 加藤" : "Jonas, Zhicong, Jun"}
            </Table.Cell>
          </Table.Row>
          <Table.Row disabled>
            <Table.Cell>16:25</Table.Cell>
            <Table.Cell>{ja ? "クロージング" : "Closing"}</Table.Cell>
            <Table.Cell textAlign="right">
              {ja ? "セミナー運営" : "Organizers"}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  );
};
