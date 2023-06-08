import { FC, HTMLAttributes, ReactNode } from "react";

import styles from "./HeroSegmentWrapper.module.css";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const HeroSegmentWrapper: FC<IProps> = (props) => (
  <div className={styles.wrapper} {...props}>
    {props.children}
  </div>
);
