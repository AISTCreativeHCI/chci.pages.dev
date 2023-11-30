import { FC, useMemo } from "react";

import { ReferencesSegment as GenericReferencesSegment } from "../ReferencesSegment";

interface IProps {
  bare?: boolean;
}

export const ReferencesSegment: FC<IProps> = ({ bare }) => {
  const publications = useMemo(
    () => [
      {
        pre: "Mare Hirsch, Gabrielle Benabdallah, Jennifer Jacobs, and Nadya Peek. 2023.",
        title:
          "Nothing Like Compilation: How Professional Digital Fabrication Workflows Go Beyond Extruding, Milling, and Machines",
        post: "ACM Trans. Comput.-Hum. Interact. 31, 1, Article 13 (February 2024), 45 pages.",
        url: "https://doi.org/10.1145/3609328",
      },
      {
        pre: "Samuelle Bourgault, Pilar Wiley, Avi Farber, and Jennifer Jacobs. 2023.",
        title:
          "CoilCAM: Enabling Parametric Design for Clay 3D Printing Through an Action-Oriented Toolpath Programming System",
        post: "In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI '23). Association for Computing Machinery, New York, NY, USA, Article 264, 1–16.",
        url: "https://doi.org/10.1145/3544548.3580745",
      },
      {
        pre: "Koya Narumi, Kazuki Koyama, Kai Suto, Yuta Noma, Hiroki Sato, Tomohiro Tachi, Masaaki Sugimoto, Takeo Igarashi, and Yoshihiro Kawahara. 2023.",
        title:
          "Inkjet 4D Print: Self-folding Tessellated Origami Objects by Inkjet UV Printing",
        post: "ACM Trans. Graph. 42, 4, Article 117 (August 2023), 13 pages.",
        url: "https://doi.org/10.1145/3592409",
      },
      {
        pre: "Kai Suto, Yuta Noma, Kotaro Tanimichi, Koya Narumi, and Tomohiro Tachi. 2023.",
        title:
          "Crane: An Integrated Computational Design Platform for Functional, Foldable, and Fabricable Origami Products",
        post: "ACM Trans. Comput.-Hum. Interact. 30, 4, Article 52 (August 2023), 29 pages.",
        url: "https://doi.org/10.1145/3576856",
      },
    ],
    []
  );
  return (
    <GenericReferencesSegment
      bare={bare}
      description={null}
      publications={publications}
    />
  );
};
