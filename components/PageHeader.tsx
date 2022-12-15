import Link from "next/link";
import { FC } from "react";
import { Menu } from "semantic-ui-react";
import { useSiteInfo } from "./lib/useSiteInfo";

export const PageHeader: FC = () => {
    const {
      ja,
      site,
      altRoot,
    } = useSiteInfo();
    return (<Menu fixed="top" id="fixed-menu">
<Link href={site.root} legacyBehavior passHref>
  <Menu.Item
    as="a"
    icon="splotch"
    content={
      <span className="hide-on-small-screens">
        {site.title}
      </span>}
  />
</Link>
<Menu.Menu position="right">
  {/* <Link href={`${site.root}/team`} legacyBehavior passHref>
    <Menu.Item
      as="a"
      icon="users"
      content={
        <span className="hide-on-small-screens">
          {ja ? "運営" : "Organizers"}
        </span>
      }
    />
  </Link> */}
  <Link href={`${altRoot}`} legacyBehavior passHref>
    <Menu.Item
      as="a"
      icon="globe"
      content={ja ? "English" : "日本語"}
    />
  </Link>
</Menu.Menu>
</Menu>);
}