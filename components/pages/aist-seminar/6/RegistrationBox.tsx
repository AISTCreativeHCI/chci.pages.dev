import { FC } from "react";
import { Button, List } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { Alertbox } from "../Alertbox";

interface IProps {
  disabled?: boolean;
}

export const RegistrationBox: FC<IProps> = ({ disabled }) => {
  const { ja } = useSiteInfo();
  return (
    <Alertbox
      text={
        ja ? (
          <List bulleted>
            <List.Item>
              参加登録時に収集する個人情報は
              <a href="https://www.aist.go.jp/aist_j/privacy_policy/">
                産総研プライバシーポリシー
              </a>
              に準じて取り扱います。登録後、ZoomからWebinar参加URLを含む確認メールが届きます。
            </List.Item>
            <List.Item>
              <strong>現地参加の場合も参加登録が必要</strong>
              ですのでご注意ください。（フォームに参加方法として「現地参加」を選ぶ欄があります。）
            </List.Item>
          </List>
        ) : (
          <p>
            Personal information collected in this form will be utilized while
            following the{" "}
            <a href="https://www.aist.go.jp/aist_e/privacy_policy/index_en.html">
              AIST privacy policy
            </a>
            .
          </p>
        )
      }
    >
      <Button
        icon="edit"
        color="red"
        size="massive"
        content={ja ? "参加登録" : "Registration"}
        as="a"
        href="https://us06web.zoom.us/webinar/register/WN_3wFTdqKtQBSQW-MfTCGN0w"
        disabled={disabled}
      />
    </Alertbox>
  );
};
