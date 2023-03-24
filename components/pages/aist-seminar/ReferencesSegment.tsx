import { FC, ReactNode, useMemo } from "react";
import { Header, List, Segment } from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";

interface IProps {
  bare?: boolean;
  publications: {
    pre: ReactNode;
    title: string;
    post: ReactNode;
    url: string;
  }[];
}

export const ReferencesSegment: FC<IProps> = ({ bare, publications }) => {
  const { ja } = useSiteInfo();
  const content = useMemo(
    () => (
      <>
        <a id="references" className="anchor"></a>
        <Header as="h2" dividing content={ja ? "参考文献" : "References"} />
        {ja ? (
          <p>招待講演者の発表文献一覧からの抜粋です。</p>
        ) : (
          <p>
            Example publications from the invited speakers are listed below.
          </p>
        )}
        <List relaxed ordered>
          {publications.map(({ pre, title, post, url }) => (
            <List.Item key={title}>
              {pre} <a href={url}>{title}</a>. {post}
            </List.Item>
          ))}
        </List>
      </>
    ),
    [publications]
  );
  return bare ? content : <Segment basic>{content}</Segment>;
};
