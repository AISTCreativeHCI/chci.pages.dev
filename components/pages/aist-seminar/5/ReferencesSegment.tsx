import { FC } from "react";

import { ReferencesSegment as GenericReferencesSegment } from "../ReferencesSegment";

interface IProps {
  bare?: boolean;
}

export const ReferencesSegment: FC<IProps> = ({ bare }) => (
  <GenericReferencesSegment
    bare={bare}
    description={null}
    publications={[
      {
        pre: "Jon E. Froehlich, Anke M. Brock, Anat Caspi, João Guerreiro, Kotaro Hara, Reuben Kirkham, Johannes Schöning, and Benjamin Tannert. 2019",
        title: "Grand Challenges in Accessible Maps",
        post: "Interactions 26, 2 (March - April 2019). Association for Computing Machinery, New York, NY, USA, 78–81.",
        url: "https://doi.org/10.1145/3301657",
      },
      {
        pre: "Riku Arakawa, Karan Ahuja, Kristie Mak, Gwendolyn Thompson, Sam Shaaban, Oliver Lindhiem, and Mayank Goel",
        title:
          "LemurDx: Using Unconstrained Passive Sensing for an Objective Measurement of Hyperactivity in Children with no Parent Input",
        post: "In Proceedings of the ACM on Interactive Mobile Wearable Ubiquitous Technology, Volume 7, Issue 2 (PACM IMWUT, Ubicomp'23). Association for Computing Machinery, New York, NY, USA, Article No. 46, 1–23.",
        url: "https://doi.org/10.1145/3596244",
      },
    ]}
  />
);
