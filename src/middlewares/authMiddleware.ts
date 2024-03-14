import { NextRequest, NextResponse } from "next/server";

export default async function AuthMiddleware(request: NextRequest) {
  // Your logic for authentication goes here
  const response = NextResponse.next();

  return response;
}
