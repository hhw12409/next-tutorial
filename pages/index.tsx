import axios from "axios";
import Head from "next/head";
import { Divider } from "semantic-ui-react";
import ItemList from "../components/ItemList";
import styles from "../styles/Home.module.scss";

export default function Home({ list }: { list: Brand.Item[] }) {
  console.log(list);
  return (
    <div>
      <Head>
        <title>Home | NextJs</title>
        <meta name="description" content="nextjs연습페이지 입니다."></meta>
      </Head>
      {["베스트상품", "신상품"].map((el, index) => (
        <div key={index}>
          <h3 className={styles.header}>{el}</h3>
          <Divider />
          <ItemList
            list={el === "베스트상품" ? list.slice(0, 9) : list.slice(9)}
          />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const API_URL = String(process.env.API_URL);
  const res = await axios.get(API_URL);
  const { data } = res;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
