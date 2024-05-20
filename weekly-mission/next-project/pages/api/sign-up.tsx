import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
