import { FC } from "react";
import { Icon, List } from "semantic-ui-react";
import { TeamIface } from "../../../lib/TeamIface";

interface IProps {
  team: TeamIface;
  language: "ja" | "en";
}

export const Team: FC<IProps> = ({ team, language }) => (
  <List relaxed selection>
    {team.map((member, index) => (
      <List.Item
        key={`${language}-${index}`}
        {...(member[language].website
          ? { as: "a", href: member[language].website }
          : {})}
      >
        <List.Content>
          <List.Header>
            {member[language].name}
            {member[language].website && (
              <>
                {" "}
                <Icon name="external" />
              </>
            )}
          </List.Header>
          <List.Description>{member[language].affiliation}</List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
);
