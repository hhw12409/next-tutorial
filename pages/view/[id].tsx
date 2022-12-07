import axios from "axios";
import Item from "../../components/Item";
import { NextPageContext } from "next";

export default function Post({ data }: { data: Brand.Item }) {
  return data && <Item item={data} />;
}

export async function getServerSideProps(context: NextPageContext) {
  const { id } = context.query;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const { data } = res;

  return {
    props: {
      data,
    },
  };
}
