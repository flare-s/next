import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <main>
        <h1>My first post</h1>
        <Link href="/">home</Link>
      </main>
    </Layout>
  );
};

export default FirstPost;
