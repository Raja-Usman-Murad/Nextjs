import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  const cookie = cookies().delete("token");
  return NextResponse.json({ success: true });
}
