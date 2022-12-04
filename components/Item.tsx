import Image from "next/image";
import { Button } from "semantic-ui-react";
import styles from "../styles/Item.module.scss";

export default function Item({ item }: { item: Brand.Item }) {
  console.log(item);
  return (
    <>
      <div>
        <Image
          src={item?.image_link}
          alt={item?.name}
          className={styles.thumbnail}
          width={100}
          height={100}
        />
      </div>
      <div>
        <strong>{item?.name}</strong>
        <strong>${item?.price}</strong>
      </div>
      <Button primary>구매하기</Button>
      <div>
        <p>{item?.description}</p>
      </div>
    </>
  );
}
