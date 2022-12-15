import Image from "next/image";
import { FC } from "react";
import { Divider, Segment } from "semantic-ui-react";

import styles from "./PageFooter.module.css";

export const PageFooter: FC = () => (
  <footer className={styles.footer}>
    <Divider />
    <Segment basic textAlign="center">
      <a
        href="https://www.aist.go.jp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/aist-logo.png" alt="AIST Logo" width={150} height={26} />
      </a>
    </Segment>
  </footer>
);
