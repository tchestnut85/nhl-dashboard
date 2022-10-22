import Head from 'next/head';

const HEADING = 'Hey, listen!';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{HEADING}</h1>
      </main>
    </div>
  );
}
