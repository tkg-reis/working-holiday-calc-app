import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

// testcode
export default function Result(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: "Hello from Next.js!" });
}
