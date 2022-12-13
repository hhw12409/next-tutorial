import { Button, Form } from "semantic-ui-react";
import styles from "../styles/login.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue">Login</Button>
      </Form>
    </div>
  );
}
