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
      {ja ? (
        <>
          <Message
            info
            icon="comments outline"
            content={
              <>
                2026年2月10日（火）に新たなセミナーシリーズの初回 「
                <Link href="https://anime.pj.aist.go.jp/events/2026-02-10-1st-seminar">
                  The 1st Animāre Seminar on Creativity Support Tools
                </Link>
                」 が開催されます。ぜひご参加ください。
              </>
            }
          />
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
                」 が開催されました。
              </>
            }
          />
        </>
      ) : (
        <>
          <Message
            info
            icon="comments outline"
            content={
              <>
                On February 10th, 2026, the first session of a new seminar
                series, "
                <Link href="https://anime.pj.aist.go.jp/en/events/2026-02-10-1st-seminar">
                  The 1st Animāre Seminar on Creativity Support Tools
                </Link>
                ," will be held. We look forward to your participation.
              </>
            }
          />
        </>
      )}
      {new Array(seminars.length).fill(null).map((_, i) => (
        <EditionSegment key={`edition-${i}`} index={seminars.length - 1 - i} />
      ))}
    </>
  );
};
