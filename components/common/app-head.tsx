import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Pong</title>
      <meta name='og:title' content='Pong' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='twitter:site' content='@toggledtech' />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
}
