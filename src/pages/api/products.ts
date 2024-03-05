// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  // GET以外のリクエストを許可しない
  if (req.method?.toLocaleLowerCase() !== 'get') {
      return res.status(405).end()
  }
  res.status(200).json([{
      name: "胡麻鯖セット",
      price: 5000,
  }, {
      name: "明太子詰め合わせ",
      price: 6000
  }])
}