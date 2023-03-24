import { FC } from "react";

import { ReferencesSegment as GenericReferencesSegment } from "../ReferencesSegment";

interface IProps {
  bare?: boolean;
}

export const ReferencesSegment: FC<IProps> = ({ bare }) => (
  <GenericReferencesSegment
    bare={bare}
    publications={[
      {
        pre: "Amy Pavel, Gabriel Reyes, and Jeffrey P. Bigham. 2020.",
        title:
          "Rescribe: Authoring and Automatically Editing Audio Descriptions",
        post: "In Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology (UIST '20). Association for Computing Machinery, New York, NY, USA, Pages 747–759.",
        url: "https://doi.org/10.1145/3379337.3415864",
      },
      {
        pre: "Xingyu Liu, Ruolin Wang, Dingzeyu Li, Xiang Anthony Chen, and Amy Pavel. 2022.",
        title:
          "CrossA11y: Identifying Video Accessibility Issues via Cross-modal Grounding",
        post: "In Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology (UIST '22). Association for Computing Machinery, New York, NY, USA, Article 43, 1–14.",
        url: "https://doi.org/10.1145/3526113.3545703",
      },
    ]}
  />
);
