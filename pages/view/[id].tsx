import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});

  function getData() {
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    axios.get(API_URL).then((res) => {
      if (res.status === 200) {
        setItem(res.data);
      }
    });
  }

  useEffect(() => {
    if (id && Number(id) > 0) {
      getData();
    }
  }, [id]);

  return <p>Post: {id}</p>;
}
