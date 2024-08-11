// pages/api/backgroundTask.js
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Arka planda uzun sürecek bir işlemi başlat
  setTimeout(() => {
    console.log("Background task completed");
  }, 10000); // 10 saniye sonra işlem tamamlanacak

  res.status(200).json({ message: "Task started" });
}
