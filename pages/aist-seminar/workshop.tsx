import {
  Body,
  ListingMode,
} from "../../components/pages/aist-seminar/index/Body";

export default function Index() {
  return (
    <Body title="AIST Creative HCI Workshop" mode={ListingMode.Workshop} />
  );
}
