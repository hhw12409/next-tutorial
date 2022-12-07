import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider } from "semantic-ui-react";
import ItemList from "../components/ItemList";
import styles from "../styles/Home.module.scss";
import { Dimmer, Loader } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios
      .get(API_URL)
      .then((res) => {
        if (res.status === 200) {
          setList(res.data);
        }
      })
      .then(() => {
        setIsLoading((prev) => !prev);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | NextJs</title>
        <meta name="description" content="nextjs연습페이지 입니다."></meta>
      </Head>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader inverted />
        </Dimmer>
      ) : (
        ["베스트상품", "신상품"].map((el, index) => (
          <div key={index}>
            <h3 className={styles.header}>{el}</h3>
            <Divider />
            <ItemList
              list={el === "베스트상품" ? list.slice(0, 9) : list.slice(9)}
            />
          </div>
        ))
      )}
    </div>
  );
}
