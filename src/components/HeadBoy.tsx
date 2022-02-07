import Head from 'next/head';

type Props = {
  title: string;
};

function HeadBoy({ title }: Props) {
  return (
    <Head>
      <title>HomePage | {title}</title>
    </Head>
  );
}

export default HeadBoy;
