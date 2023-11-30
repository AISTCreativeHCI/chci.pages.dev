import { FC } from "react";
import { Button } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { Alertbox } from "../Alertbox";

export const RegistrationBox: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Alertbox
      text={
        ja ? (
          <p>
            参加登録時に収集する個人情報は
            <a href="https://www.aist.go.jp/aist_j/privacy_policy/">
              産総研プライバシーポリシー
            </a>
            に準じて取り扱います。登録後、ZoomからWebinar参加URLを含む確認メールが届きます。
          </p>
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
        href="https://us06web.zoom.us/webinar/register/WN_g-e37JN_R5yRMDd5ExOW4Q"
      />
    </Alertbox>
  );
};
