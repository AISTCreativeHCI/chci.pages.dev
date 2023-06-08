import { FC, HTMLAttributes, ReactNode } from "react";

import styles from "./ButtonWrapper.module.css";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ButtonWrapper: FC<IProps> = (props) => (
  <div className={styles.button} {...props}>
    {props.children}
  </div>
);
