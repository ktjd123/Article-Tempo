import Head from "next/head";

const PageHead = ({
  title = "아티클 템포",
  description = "Dekina Inc.",
  url = "http://article.tempo.dekina.com",
  image = ""
}) => (
  <Head>
    <title>{title}</title>
    <meta
      name="naver-site-verification"
      content="901eb3a81658e4489f76e975360e51b95ca49229"
    />
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="shortcut icon" href="/static/favicon.ico" />

    <meta property="og:site_name" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={url + image} />
    <meta property="og:image:width" content="1024" />
    <meta property="og:image:height" content="500" />
    <meta property="og:description" content={description} />
  </Head>
);
export default PageHead;
