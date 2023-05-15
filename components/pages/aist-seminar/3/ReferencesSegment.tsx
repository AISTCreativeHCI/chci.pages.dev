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
        pre: "Kai Suto, Yuta Noma, Kotaro Tanimichi, Koya Narumi, and Tomohiro Tachi. 2022.",
        title:
          "Crane: An Integrated Computational Design Platformfor Functional, Foldable, and Fabricable Origami Products",
        post: "ACM Transactions on Computer-Human Interaction. December 2022.",
        url: "https://doi.org/10.1145/3576856",
      },
      {
        pre: "Riku Arakawa and Hiromu Yakura. 2023.",
        title: "AI for Human Assessment: What Do Professional Assessors Need?",
        post: "In Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems (CHI EA '23). Association for Computing Machinery, New York, NY, USA, Article No. 378, 1–7.",
        url: "https://doi.org/10.1145/3544549.3573849",
      },
      {
        pre: "Kunihiro Kato, Ami Motomura, Kaori Ikematsu, Hiromi Nakamura, and Yuki Igarashi. 2023.",
        title:
          "Demonstrating FoodSkin: A Method for Creating Electronic Circuits on Food Surfaces by Using Edible Gold Leaf for Enhancement of Eating Experience",
        post: "In Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems (CHI EA '23). Association for Computing Machinery, New York, NY, USA, Article No. 434, 1–4.",
        url: "https://doi.org/10.1145/3544549.3583933",
      },
      {
        pre: "Jun Kato, Jonas Frich, Zhicong Lu, Jennifer Jacobs, Kumiyo Nakakoji, and Celine Latulipe. 2023.",
        title: "Special Interest Group on Creativity and Cultures in Computing",
        post: "In Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems (CHI EA '23). Association for Computing Machinery, New York, NY, USA, Article No. 520, 1–4.",
        url: "https://doi.org/10.1145/3544549.3583175",
      },
    ]}
  />
);
