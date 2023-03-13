import Link from "next/link";
import { FC } from "react";
import { Image, Menu } from "semantic-ui-react";
import { useSiteInfo } from "./lib/useSiteInfo";

import styles from "./PageHeader.module.css";

interface IProps {
  withoutBrand?: boolean;
}

export const PageHeader: FC<IProps> = ({ withoutBrand }) => {
  const { ja, site, altRoot } = useSiteInfo();
  return (
    <Menu fixed="top" id="fixed-menu">
      {!withoutBrand && (
        <Link href={site.root} legacyBehavior passHref>
          <Menu.Item
            as="a"
            icon={
              <Image src="/aist-creative-hci-seminar-logo.svg" size="mini" />
            }
            content={
              <span className="hide-on-small-screens">{site.title}</span>
            }
            className={styles.brand}
          />
        </Link>
      )}
      <Menu.Menu position="right">
        <Link href={`${site.root}/team`} legacyBehavior passHref>
          <Menu.Item
            as="a"
            icon="users"
            content={
              <span className="hide-on-small-screens">
                {ja ? "運営" : "Organizers"}
              </span>
            }
          />
        </Link>
        <Link href={`${altRoot}`} legacyBehavior passHref>
          <Menu.Item as="a" icon="globe" content={ja ? "English" : "日本語"} />
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
