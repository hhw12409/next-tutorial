import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function isLogin(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // cookie 생성
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
}
