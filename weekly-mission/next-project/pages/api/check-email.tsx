import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "db/dbConnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // 데이터베이스 연결
    const client = await connectDB();
    const db = client.db();

    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { email } = req.body;

    // 이메일이 이미 존재하는지 확인
    const existingEmail = await db.collection("users").findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: "이미 사용 중인 이메일입니다." });
    }

    // 이메일이 존재하지 않으면 새로 추가
    await db.collection("users").insertOne({ email });

    return res.status(200).json({ message: "사용 가능한 이메일입니다." });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "서버 오류 발생" });
  }
}
