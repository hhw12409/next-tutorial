import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../components/ItemList";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res) => {
      if (res.status === 200) {
        setList(res.data);
      }
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | NextJs</title>
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
