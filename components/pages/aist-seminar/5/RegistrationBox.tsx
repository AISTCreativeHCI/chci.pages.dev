import { FC } from "react";
import { Button } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { Alertbox } from "../Alertbox";

interface IProps {
  disabled?: boolean;
}

export const RegistrationBox: FC<IProps> = ({ disabled }) => {
  const { ja } = useSiteInfo();
  return (
    <>
      {/* <Alertbox>
          <p>
            {ja
              ? "本ページはアーカイブ目的で提供されており、主に開催前時点での情報が掲載されています。"
              : "This page is provided for archival purposes and contains information as of a point in time prior to the event."}
          </p>
        </Alertbox> */}
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
          href=""
          disabled={disabled}
        />
      </Alertbox>
    </>
  );
};
