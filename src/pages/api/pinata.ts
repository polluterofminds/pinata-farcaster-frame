// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const data = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta property="fc:frame:image" content="https://mktg.mypinata.cloud/ipfs/Qmbdi1gDbXPZx74N8ccUZ2kpF3Kqwk53zYXvT31d7MPb7T?filename=pinnie.png" />
    <meta property="fc:frame:button:1" content="Nothing to see here [TEST]" />
    <meta property="fc:frame" content="vNext" />
    <title>Pinata Discount</title>
  </head>
  <body>
    <img src="https://mktg.mypinata.cloud/ipfs/Qmbdi1gDbXPZx74N8ccUZ2kpF3Kqwk53zYXvT31d7MPb7T?filename=pinnie.png" />
  </body>
</html>`


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error")
    }
  } else if (req.method === "POST") {
    try {
      console.log(req.body);
      //  Verify signature

      //  Generate image from Dalle
      //  Upload to Pinata
      //  Return results with img url
      const resultData = `<meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://mktg.mypinata.cloud/ipfs/Qmbdi1gDbXPZx74N8ccUZ2kpF3Kqwk53zYXvT31d7MPb7T?filename=pinnie.png" />`
      res.send(resultData);
    } catch (error) {
      res.send("Server error")
    }
  }
}
