import Link from "next/link";
import { FC } from "react";
import { Message } from "semantic-ui-react";

import { useSiteInfo } from "../../../lib/useSiteInfo";
import { PanelTopicSegment } from "./PanelTopicSegment";

import seminars from "../seminars.json";

export const PanelTopicSegments: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <>
      <Message
        info
        icon="comments outline"
        content={
          ja ? (
            <>
              <Link href="/aist-seminar/3">
                第三回（CHI 2023 が分かる！発表者による振り返り）
              </Link>
              と
              <Link href="/aist-seminar/4">
                第四回（海外で研究するということ）
              </Link>
              に関してはセミナー全体がパネルディスカッションのような構成となっているため、それぞれの紹介ページからご視聴ください。
            </>
          ) : (
            <>
              Panel topics from the <Link href="/aist-seminar/en/3">third</Link>{" "}
              and <Link href="/aist-seminar/en/4">fourth</Link> editions are
              omitted as they are in Japanese. Please refer to the individual
              pages for details.
            </>
          )
        }
      />
      {new Array(seminars.length).fill(null).map((_, i) => (
        <>
          {seminars[i].panelTopics && (
            <PanelTopicSegment key={i} index={seminars.length - 1 - i} />
          )}
        </>
      ))}
    </>
  );
};
