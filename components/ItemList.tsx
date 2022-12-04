import { Grid, Image } from "semantic-ui-react";

export default function ItemList({ list }: { list: Brand.Item[] }) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((el) => (
            <Grid.Column key={el.id}>
              <Image src={el.image_link} alt="image" />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
