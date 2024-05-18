import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (email === "test@codeit.com" && password === "sprint101") {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "로그인 오류" });
  }
}
