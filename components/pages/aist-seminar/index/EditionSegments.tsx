import { FC } from "react";

import { EditionSegment } from "./EditionSegment";

import seminars from "../seminars.json";

export const EditionSegments: FC = () => (
  <>
    {new Array(seminars.length).fill(null).map((_, i) => (
      <EditionSegment key={`edition-${i}`} index={seminars.length - 1 - i} />
    ))}
  </>
);
