import { FC } from "react";

import { EditionSegment } from "./EditionSegment";

import seminars from "../seminars.json";
import { useSiteInfo } from "../../../lib/useSiteInfo";
import { Message } from "semantic-ui-react";
import Link from "next/link";

export const EditionSegments: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <>
      {ja && (
        <Message
          info
          icon="comments outline"
          content={
            <>
              2024年3月5日（火）にコンテンツ産業の研究開発担当者が講演・パネルディスカッションする
              「
              <Link href="/aist-seminar/workshop">
                AIST Creative HCI Workshop
              </Link>
              」 が開催されます。ぜひご参加ください。
            </>
          }
        />
      )}
      {new Array(seminars.length).fill(null).map((_, i) => (
        <EditionSegment key={`edition-${i}`} index={seminars.length - 1 - i} />
      ))}
    </>
  );
};
