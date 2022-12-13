import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string | undefined;
};

export default function isLogin(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: req.cookies.a_name });
}
