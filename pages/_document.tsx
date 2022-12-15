// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import { useSiteInfo } from "../components/lib/useSiteInfo";

export default function Document() {
  const {
    site,
  } = useSiteInfo();
  return (
    <Html>
      <Head>
        <title key="title">{site.title}</title>
        <meta name="description" content={site.description} key="description" />
        <link rel="stylesheet" href="/semantic.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
