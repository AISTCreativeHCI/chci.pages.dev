import {
  Body,
  ListingMode,
} from "../../components/pages/aist-seminar/index/Body";

export default function Index() {
  return (
    <Body
      title="AIST Creative HCI Workshop"
      description="コンテンツ産業（アニメ、漫画、メタバース、ゲーム）の研究開発担当者をお呼びして講演いただき、パネルディスカッションするイベント「AIST Creative HCI Workshop」の紹介ページです。"
      mode={ListingMode.Workshop}
    />
  );
}
