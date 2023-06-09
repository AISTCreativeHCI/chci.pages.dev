import { FC } from "react";

import { ReferencesSegment as GenericReferencesSegment } from "../ReferencesSegment";

interface IProps {
  bare?: boolean;
}

export const ReferencesSegment: FC<IProps> = ({ bare }) => (
  <GenericReferencesSegment bare={bare} description={null} publications={[]} />
);
