export const dynamic = "force-dynamic"; // defaults to auto
import { axios } from "../../../_configs/config";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const response = await axios.post(`/auth/signup`, reqBody);

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
