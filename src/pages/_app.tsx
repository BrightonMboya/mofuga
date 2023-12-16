import { type AppType } from "next/dist/shared/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Layout from "~/components/ui/Layout";
import localFont from "next/font/local";

// const geist = localFont({
//   src: [
//     { path: "../public/fonts/Geist/Geist-Regular.otf", weight: "500" },
//     { path: "../public/fonts/Geist/Geist-Medium.otf", weight: "600" },
//     { path: "../public/fonts/Geist/Geist-SemiBold.otf", weight: "700" },
//     { path: "../public/fonts/Geist/Geist-Bold.otf", weight: "800" },
//     { path: "../public/fonts/Geist/Geist-Black.otf", weight: "900" },
//   ],
//   display: "swap",
//   variable: "--font-geist-sans",
//   fallback: ["inter"],
// });

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <main className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default MyApp;
