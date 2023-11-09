import { NextRequest, NextResponse } from "next/server";
import { graphQlQuery } from "./graphQlQuery";

export async function POST(request: NextRequest, response: NextResponse) {
  const requestBody = JSON.stringify(request.body);
  return await graphQlQuery(requestBody);
}
