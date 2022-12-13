import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function logout(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: "logout" });
}
