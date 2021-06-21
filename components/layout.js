import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Open-ivf";

export default function Layout({ children }) {
  return (
    <div className>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <title>{siteTitle}</title>
        <meta property="og:image" content="" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>{children}</main>
    </div>
  );
}
