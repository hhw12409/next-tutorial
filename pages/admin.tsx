import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        // 로그인
        setIsLogin(true);
      } else {
        router.push("/login");
      }
    });
  }, []);

  function logout() {
    axios.post("/api/logout").then((res) => {
      if (res.status === 200) {
        // 로그아웃 성공
        router.push("/");
      }
    });
  }

  return (
    <div>
      <h1>admin</h1>
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </div>
  );
}
