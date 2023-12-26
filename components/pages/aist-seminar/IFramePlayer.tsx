import { FC, IframeHTMLAttributes } from "react";

import styles from "./IFramePlayer.module.css";

export const IFramePlayer: FC<IframeHTMLAttributes<HTMLIFrameElement>> = (
  props
) => (
  <iframe
    className={styles.player}
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowFullScreen
    {...props}
  ></iframe>
);
