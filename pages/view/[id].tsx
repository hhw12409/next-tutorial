import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import { Dimmer, Loader } from "semantic-ui-react";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<Brand.Item>();
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    axios
      .get(API_URL)
      .then((res) => {
        if (res.status === 200) {
          setItem(res.data);
        }
      })
      .then(() => setIsLoading((prev) => !prev));
  }

  useEffect(() => {
    if (id && Number(id) > 0) {
      getData();
    }
  }, [id]);

  return isLoading ? (
    <Dimmer active inverted>
      <Loader inverted />
    </Dimmer>
  ) : (
    <Item item={item!} />
  );
}
