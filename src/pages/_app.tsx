import { type AppType } from "next/dist/shared/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Layout from "~/components/ui/Layout";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <main >
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default MyApp;
