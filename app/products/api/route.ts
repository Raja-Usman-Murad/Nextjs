import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  //First Method using Web api
  const requestHeader = new Headers(request.headers);
  const authorization = requestHeader.get("Authorization");
  console.log(authorization);

  //first method
  const cookie = request.cookies.get("theme");
  console.log(cookie, "cookie");

  // second method for getting cookie
  const resultsPerPage = cookies().get("resultsPerPage");
  console.log(resultsPerPage, "resultsPerPage");

  //Second Method using next/headers
  const requestHeader2 = headers();
  const authorization2 = requestHeader2.get("Authorization");
  console.log(authorization2);

  //second method for setting cookies
  cookies().set("resultsPerPage", "20");
  return new Response("<h1>products from api</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark", //first method
    },
  });
}
