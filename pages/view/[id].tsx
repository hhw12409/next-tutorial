import axios from "axios";
import Item from "../../components/Item";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export default function Post({
  data,
  name,
}: {
  data: Brand.Item;
  name: string;
}) {
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
