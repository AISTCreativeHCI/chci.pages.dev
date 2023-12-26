import { FC } from "react";

import speakers from "../invited-speakers.json";
import { SpeakersSegment } from "./SpeakersSegment";

export const SpeakersSegments: FC = () => (
  <>
    {speakers.map((list, edition) => (
      <SpeakersSegment list={list} edition={edition} />
    ))}
  </>
);
