import {
  Body,
  ListingMode,
} from "../../components/pages/aist-seminar/index/Body";

export default function Index() {
  return <Body mode={ListingMode.ByPanelTopic} />;
}
