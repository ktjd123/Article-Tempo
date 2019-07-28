import Head from "next/head";

const PageHead = ({
  title = "Article Tempo",
  description = "Dekina Inc.",
  url = "121.189.66.115",
  image = "img"
}) => (
  <Head>
    <title>{title}</title>
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
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
  </Head>
);
export default PageHead;
