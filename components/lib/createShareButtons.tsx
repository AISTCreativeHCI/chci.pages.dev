import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, List, SemanticCOLORS } from "semantic-ui-react";

export function createShareButtons(
  title: string,
  color: SemanticCOLORS = "red",
  hashtag: string = "CreativeHCI"
) {
  const router = useRouter();
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    setUrl(
      typeof window === "undefined"
        ? null
        : `${location.protocol}//${location.host}${router.asPath}`
    );
  }, [router.asPath]);

  // render buttons on client-side rendering
  const u = encodeURIComponent(url || "https://chci.pages.dev");
  return (
    <List horizontal>
      <List.Item>
        <Button
          icon="facebook"
          color={color}
          as="a"
          href={`http://www.facebook.com/sharer/sharer.php?u=${u}`}
          target="facebook"
        />
      </List.Item>
      <List.Item>
        <Button
          icon="twitter"
          color={color}
          as="a"
          href={`https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(
            hashtag
          )}&url=${u}&text=${encodeURIComponent(title)}`}
          target="twitter"
        />
      </List.Item>
    </List>
  );
}
