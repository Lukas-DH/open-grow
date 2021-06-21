import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// import Alert from "../components/sideBar";
// import styles from "../components/alert.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { LandingNav } from "../components/Navbar";
import { BackgroundVid } from "../components/BackgroundVid";

export default function Home() {
  return (
    <>
      <Layout>
        <LandingNav />
        <BackgroundVid />
      </Layout>
    </>
  );
}
