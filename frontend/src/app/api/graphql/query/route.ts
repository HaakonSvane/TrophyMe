import { graphQlQuery } from "./graphQlQuery";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export const POST = withApiAuthRequired(async function query(request, res) {
    const requestBody = await request.text();
    return await graphQlQuery(requestBody);
});
