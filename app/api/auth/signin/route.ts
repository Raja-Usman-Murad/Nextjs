export const dynamic = "force-dynamic"; // defaults to auto
import { cookies } from "next/headers";
import { axios } from "../../../../configs/config";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const response = await axios.post(`/auth/signin`, reqBody);

    if (response.data.success) {
      const oneDay = 24 * 60 * 60 * 1000;
      // const oneHour = 60 * 60 * 1000;
      cookies().set("token", response.data.data.token, {
        expires: Date.now() + oneDay,
      });
    }
    // Check the response status and propagate it correctly
    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    // Check if the error is an Axios error with a response
    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json(error.response.data, {
        status: error.response.status,
      });
    }

    // Handle unexpected errors
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
