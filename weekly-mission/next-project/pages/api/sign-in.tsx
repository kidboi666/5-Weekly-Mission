import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (email === "test@codeit.com" && password === "sprint101") {
      res.status(200).json({ success: true });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
