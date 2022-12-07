import { Button, Image } from "semantic-ui-react";
import styles from "../styles/Item.module.scss";

export default function Item({ item }: { item: Brand.Item }) {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.item_img}>
          <Image
            src={item?.image_link}
            alt={item?.name}
            width={150}
            height={150}
          />
        </div>
        <div className={styles.item_info}>
          <strong>{item?.name}</strong>
          <strong>${item?.price}</strong>
          <span>
            {item?.category ? `${item?.category}/` : ""}
            {item?.product_type}
          </span>
          <Button primary>구매하기</Button>
        </div>
      </div>
      <h3>Description</h3>
      <p className={styles.item_description}>{item?.description}</p>
    </>
  );
}
