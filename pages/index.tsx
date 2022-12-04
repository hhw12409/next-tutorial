import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res) => setList(res.data));
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>Home | NextJs</title>
      </Head>
      <ItemList list={list} />
    </div>
  );
}
