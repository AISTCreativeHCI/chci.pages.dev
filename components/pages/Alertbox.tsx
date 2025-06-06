import { CSSProperties, FC, ReactNode } from "react";

import styles from "./Alertbox.module.css";

interface IProps {
  children?: ReactNode;
  text?: ReactNode;
  styling?: {
    color: string;
    backgroundColor: string;
    borderColor: string;
  };
}

export const Alertbox: FC<IProps> = ({
  children,
  text,
  styling = {
    color: "#a33",
    backgroundColor: "#fff6f6",
    borderColor: "#fee",
  },
}) => {
  return (
    <div
      className={styles.alertbox}
      style={
        {
          "--color": styling.color,
          "--background-color": styling.backgroundColor,
        } as CSSProperties
      }
    >
      {children}
      {text && (
        <div
          className={styles.alert}
          style={
            {
              "--border-color": styling.borderColor,
            } as CSSProperties
          }
        >
          {text}
        </div>
      )}
    </div>
  );
};
