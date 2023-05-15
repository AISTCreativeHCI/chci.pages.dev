import { FC, ReactNode, useMemo } from "react";
import { Header, List, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";

interface IProps {
  bare?: boolean;
  description?: string | null;
  publications: {
    pre: ReactNode;
    title: string;
    post: ReactNode;
    url: string;
  }[];
}

export const ReferencesSegment: FC<IProps> = ({
  bare,
  description,
  publications,
}) => {
  const { ja } = useSiteInfo();
  const content = useMemo(
    () => (
      <>
        <a id="references" className="anchor"></a>
        <Header as="h2" dividing content={ja ? "参考文献" : "References"} />
        {typeof description === "string" ? (
          description
        ) : typeof description === "undefined" ? (
          ja ? (
            <p>招待講演者の発表文献一覧からの抜粋です。</p>
          ) : (
            <p>
              Example publications from the invited speakers are listed below.
            </p>
          )
        ) : null}
        <List relaxed ordered>
          {publications.map(({ pre, title, post, url }) => (
            <List.Item key={title}>
              {pre} <a href={url}>{title}</a>
              {/[!?]/.test(title.slice(-1)) ? "" : "."} {post}
            </List.Item>
          ))}
        </List>
      </>
    ),
    [publications]
  );
  return bare ? content : <Segment basic>{content}</Segment>;
};
