import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Admin() {
  const router = useRouter();
  useEffect(() => {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        // 로그인
      } else {
        router.push("/login");
      }
    });
  }, []);
  return <div>admin</div>;
}
