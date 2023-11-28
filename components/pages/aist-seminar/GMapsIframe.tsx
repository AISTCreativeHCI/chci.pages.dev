import { FC } from "react";

import styles from "./GMapsIframe.module.css";

interface IProps {
  url: string;
}

export const GMapsIframe: FC<IProps> = ({ url }) => (
  <iframe
    src={url}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className={styles.map}
  ></iframe>
);
