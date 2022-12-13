import axios from "axios";
import Router, { useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";
import styles from "../styles/login.module.scss";

export default function Login() {
  const router = useRouter();
  function login() {
    axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        // 로그인 성공
        router.push("/admin");
      }
    });
  }

  return (
    <div className={styles.container}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue" onClick={login}>
          Login
        </Button>
      </Form>
    </div>
  );
}
