import Head from 'next/head';

function PageHead({ title }) {
  return (
    <Head>
      <title>{title} | Next.js Study</title>
    </Head>
  );
}

export default PageHead;
