// "use server"
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import type { NextApiRequest, NextApiResponse } from "next";
// export const config = { runtime: 'experimental-edge' }


// export function GET() {

// }

// argsにFormDataを指定するのもあり。
export async function POST(req: Request, res: Response) {
  // const formData = await req.body;
  // const formData = await req.formData();
  // const age = formData.get("age");
  // const money = formData.get("money");
  // const insurance = formData.get("insurance");
  // const time = formData.get("time");
  // const englishLevel = formData.get("english-level");
  // const country = formData.get("selectedCountry");
  // const partTime = formData.get("parttimeWork");
  // const languageSchool = formData.get("languageSchool");
  // const cook = formData.get("cook");

  // return Response.json({
  //   age,
  //   money,
  //   country,
  //   partTime,
  //   languageSchool,
  //   insurance,
  //   time,
  //   englishLevel,
  //   cook,
  // });

  let data;
  try {
    data = await req.formData();
    console.log(data);
  } catch (e) {
    console.log(e);
    return new Response("fail");
  }

  return new Response(data);
  // const { age, travel } = req.body;

  // console.log(age, travel);

  // return res.send({success: true});

  // const age = formData.get("age");
  // const money = formData.get("money");

  // formData.console.log(age, money);

  // try {
  //   res.status(200).send({ success: true });
  // } catch (err) {
  //   res.status(500).send({ error: "Failed to fetch data" });
  // }
  // return res.
  // return

  //   const { age, travel } = req.body
  //  console.log(age, travel);

  // try {
  //   res.redirect(307, '/')
  // } catch (err) {
  //   res.status(500).send({ error: 'Failed to fetch data' })
  // }
}
