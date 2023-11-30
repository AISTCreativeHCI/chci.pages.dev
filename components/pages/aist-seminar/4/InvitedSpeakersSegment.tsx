import { FC } from "react";

import { InvitedSpeakersSegment as GenericInvitedSpeakersSegment } from "../InvitedSpeakersSegment";

interface IProps {
  bare?: boolean;
}

export const InvitedSpeakersSegment: FC<IProps> = ({ bare }) => (
  <GenericInvitedSpeakersSegment bare={bare} list speakers={3} />
);
