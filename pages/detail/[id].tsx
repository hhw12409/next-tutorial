import axios from "axios";
import Item from "../../components/Item";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/detail.module.scss";
import { Loader } from "semantic-ui-react";

export default function Post({
  data,
  name,
}: {
  data: Brand.Item;
  name: string;
}) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className={styles.loaderContainer}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  return (
    data && (
      <>
        <Head>
          <title>{data.name}</title>
          <meta name="description" content={data.description}></meta>
        </Head>
        {name}환경 입니다.
        <Item item={data} />
      </>
    )
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } },
    ],
    // 없는페이지에 대한 대응
    fallback: true,
  };
}

//TODO: context타입에 대해서 한번 더 확인해보기
export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params as any;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const { data } = res;

  return {
    props: {
      data,
      name: process.env.name,
    },
  };
}
