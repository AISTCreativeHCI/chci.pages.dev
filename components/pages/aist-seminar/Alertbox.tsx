import { FC, ReactNode } from "react";

import styles from "./Alertbox.module.css";

interface IProps {
  children?: ReactNode;
  text?: ReactNode;
}

export const Alertbox: FC<IProps> = ({ children, text }) => {
  return (
    <div className={styles.alertbox}>
      {children}
      {text && <div className={styles.alert}>{text}</div>}
    </div>
  );
};
