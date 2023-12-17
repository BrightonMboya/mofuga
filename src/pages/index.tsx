import Head from "next/head";
import ConversationFeed from "~/components/home/ConversationFeed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tajiri Aurellio mwenye pesa zake</title>
        <meta name="description" content="Build with Love by Brighton Mboya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-[20px]">
        <h3>Hello World This is the home page</h3>
      </main>
    </>
  );
}
