import { FC } from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

import { useSiteInfo } from "../../lib/useSiteInfo";

import styles from "./FirstEditionSegment.module.css";

export const FirstEditionSegment: FC = () => {
  const { ja } = useSiteInfo();
  return (
    <Segment color="red">
      <div className={styles.details}>
        <div className={styles.title}>
          <Header
            as="h2"
            content="AIST Creative HCI Seminar #1"
            subheader={ja && "第一回 AIST Creative HCI Seminar"}
          />
          <List>
            <List.Item
              content={
                ja
                  ? "日時: 2023年3月7日（火）13:00 ～ 16:30 / 開場 12:30"
                  : "Date: Mar. 7th, 2023"
              }
            />
            <List.Item
              content={
                ja
                  ? "会場: 東京大学本郷キャンパス 福武ラーニングシアター / YouTube Live"
                  : "Fukutake Learning Theater, The University of Tokyo / YouTube Live (Hybrid)"
              }
            />
          </List>
        </div>
        <div className={styles.images}>
          <Image
            avatar
            src="/images/1-jonas-frich.jpg"
            alt="[Photo: Jonas Frich]"
          />
          <Image
            avatar
            src="/images/1-zhicong-lu.jpg"
            alt="[Photo: Zhicong Lu]"
          />
        </div>
      </div>
      {ja ? (
        <>
          <p>
            本セミナーの第1回目は、
            <a href="https://www.interaction-ipsj.org/2023/">
              インタラクション 2023
            </a>
            開催前日の<strong>2023年3月7日（火）</strong>
            に開催します。記念すべき第1回目では、CHI、CSCW、DIS、C&amp;Cなど、HCIのトップ国際会議で活発に論文を発表している、創造性に関する学際研究のエッジランナー2名をお招きする予定です。
          </p>
          <p>
            形式は、東京大学本郷キャンパス
            構内の会場（福武ラーニングシアター）にお越しいただくか、YouTube
            Liveでのオンラインストリーミングをご覧いただく、1日のハイブリッドワークショップとなります。講演者は現地に招聘予定です。ぜひ活発な議論をお願いいたします。
          </p>
        </>
      ) : (
        <>
          <p>
            The seminar's first edition will be held on{" "}
            <strong>March 7 (Tue), 2023</strong>. For this very first edition,
            we plan to invite two edge runners of the interdisciplinary study on
            creativity who have actively published papers at top-tier HCI
            venues, including CHI, CSCW, DIS, and C&amp;C.
          </p>
          <p>
            The format will be a one-day hybrid workshop &mdash; attendees can
            either visit a venue in Tokyo, Japan, or watch online streaming on
            YouTube Live.
          </p>
        </>
      )}
      <div className={styles.registration}>
        <Button
          icon="edit"
          color="red"
          size="massive"
          content={ja ? "参加登録" : "Registration"}
          as="a"
          href="https://forms.office.com/r/yzPWSfChR3"
        />
        {ja ? (
          <List bulleted className={styles.alert}>
            <List.Item>
              現地参加には事前の参加登録が必要となります。先着順で締め切る可能性がありますのでお早めにご登録ください。
            </List.Item>
            <List.Item>
              参加登録時に収集する個人情報は
              <a href="https://www.aist.go.jp/aist_j/privacy_policy/">
                産総研プライバシーポリシー
              </a>
              に準じて取り扱います。
            </List.Item>
          </List>
        ) : (
          <p className={styles.alert}>
            Personal information collected in this form will be utilized while
            following the{" "}
            <a href="https://www.aist.go.jp/aist_e/privacy_policy/index_en.html">
              AIST privacy policy
            </a>
            .
          </p>
        )}
      </div>
      <Divider />
      <Header as="h3" content={ja ? "招待講演者" : "Invited speakers"} />
      <Grid columns={2} stackable className={styles.speakers}>
        <Grid.Column>
          <Header
            as="h4"
            image={
              <Image
                src="/images/1-jonas-frich.jpg"
                alt="[Photo: Jonas Frich]"
              />
            }
            content="Jonas Frich"
            subheader="Digital Design &
                Information Studies, Aarhus University"
          />
          <p>
            Jonas Frich is an Assistant Professor at Digital Design &amp;
            Information Studies, Aarhus University, Denmark. He is an expert on
            the intersecting fields of creativity research and Human-Computer
            Interaction and is driven by the ambition to improve more people to
            be more creative using technology.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Header
            as="h4"
            image={
              <Image src="/images/1-zhicong-lu.jpg" alt="[Photo: Zhicong Lu]" />
            }
            content="Zhicong Lu"
            subheader="Department of
                Computer Science, City University of Hong Kong"
          />
          <p>
            Zhicong Lu is an Assistant Professor at the Department of Computer
            Science, City University of Hong Kong. His research has been
            exploring the potential of leveraging livestreaming for supporting
            knowledge sharing, creativity, and intangible cultural heritage
            preservation. He is especially interested in understanding social
            interactions that are critical to user engagement with livestreaming
            communities.
          </p>
        </Grid.Column>
      </Grid>
      <Divider />
      <Header as="h3" content={ja ? "参考文献" : "References"} />
      {ja ? (
        <p>招待講演者の発表文献一覧からの抜粋です。</p>
      ) : (
        <p>Example publications from the invited speakers are listed below.</p>
      )}
      <List relaxed ordered>
        <List.Item>
          Jonas Frich, Lindsay MacDonald Vermeulen, Christian Remy, Michael Mose
          Biskjaer, and Peter Dalsgaard. 2019.{" "}
          <a href="https://doi.org/10.1145/3290605.3300619">
            Mapping the Landscape of Creativity Support Tools in HCI
          </a>
          . In Proceedings of the 2019 CHI Conference on Human Factors in
          Computing Systems (CHI '19). Association for Computing Machinery, New
          York, NY, USA, Paper 389, 1–18.
        </List.Item>
        <List.Item>
          Zhicong Lu, Chenxinran Shen, Jiannan Li, Hong Shen, and Daniel Wigdor.
          2021.{" "}
          <a href="https://doi.org/10.1145/3411764.3445660">
            More Kawaii than a Real-Person Live Streamer: Understanding How the
            Otaku Community Engages with and Perceives Virtual YouTubers
          </a>
          . In Proceedings of the 2021 CHI Conference on Human Factors in
          Computing Systems (CHI '21). Association for Computing Machinery, New
          York, NY, USA, Article 137, 1–14.
        </List.Item>
      </List>
      <Divider />
      <Header as="h3" content={ja ? "現地会場" : "Onsite venue"} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.576638462137!2d139.75883396612772!3d35.71203448588789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c307e317f31%3A0xa5a4e210ad6b021e!2z5p2x5Lqs5aSn5a2m5aSn5a2m6ZmiIOaDheWgseWtpueSsOODu-emj-atpuODm-ODvOODqw!5e0!3m2!1sja!2sjp!4v1675821575074!5m2!1sja!2sjp"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      ></iframe>
    </Segment>
  );
};