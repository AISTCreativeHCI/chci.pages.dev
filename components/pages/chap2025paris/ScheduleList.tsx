import { FC } from "react";
import { List } from "semantic-ui-react";

import styles from "./ScheduleList.module.css";

interface IProps {
  content: {
    time: string;
    activity: string;
    presenter?: string;
    icon: string;
  }[];
}

export const ScheduleList: FC<IProps> = ({ content }) => (
  <List relaxed celled className={styles.scheduleList}>
    {content.map(({ time, activity, presenter, icon }, index) => (
      <List.Item
        key={index}
        icon={icon}
        header={time}
        description={
          <List horizontal divided className={styles.scheduleListItem}>
            <List.Item content={activity} />
            {presenter && <List.Item content={presenter} />}
          </List>
        }
      />
    ))}
  </List>
);
