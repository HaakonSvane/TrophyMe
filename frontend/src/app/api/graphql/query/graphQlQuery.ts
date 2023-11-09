import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function graphQlQuery(requestBody: string) {
  const session = await getServerSession(authOptions);
  const idToken = session?.idToken;
  if (!idToken) {
    return new Response("Unauthorized", { status: 401 });
  }
  const baseUrl = process.env.BASE_URL;
  if (!baseUrl) {
    throw new Error("Missing BASE_URL");
  }
  const r = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`,
      Accept:
        "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
    },
    body: requestBody,
  });
  return r;
}
