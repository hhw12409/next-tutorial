import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/components/Footer";
import Top from "../src/components/Top";
import styles from "../styles/Home.module.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
