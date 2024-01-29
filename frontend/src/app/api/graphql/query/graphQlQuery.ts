import { getAccessToken } from "@auth0/nextjs-auth0";

export async function graphQlQuery(requestBody: string) {
    const { accessToken } = await getAccessToken();
    if (!accessToken) {
        return new Response("Unauthorized", { status: 401 });
    }
    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) {
        throw new Error("Missing BASE_URL");
    }
    const r = await fetch(baseUrl, {
        method: "POST",
        headers: {
            Accept: "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: requestBody,
    });
    return r;
}
