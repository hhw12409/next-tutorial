import Link from "next/link";
import { Grid, Image } from "semantic-ui-react";
import styles from "../styles/ItemList.module.scss";

export default function ItemList({ list }: { list: Brand.Item[] }) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((el) => (
            <Grid.Column key={el.id}>
              <Link href={`/detail/${el.id}`} key={el.id}>
                <div className={styles.wrapper}>
                  <Image
                    src={el.image_link}
                    alt={el.name}
                    className={styles.item_img}
                  />
                  <strong className={styles.item_title}>{el.name}</strong>
                  <span className={styles.item_text}>
                    {el.category}
                    {el.product_type}
                  </span>
                  <strong className={styles.item_price}>${el.price}</strong>
                </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
