import { headers } from "next/headers";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  //First Method using Web api
  const requestHeader = new Headers(request.headers);
  const authorization = requestHeader.get("Authorization");
  console.log(authorization);

  //Second Method using next/headers
  const requestHeader2 = headers();
  const authorization2 = requestHeader2.get("Authorization");
  console.log(authorization2);

  return new Response("<h1>products from api</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
