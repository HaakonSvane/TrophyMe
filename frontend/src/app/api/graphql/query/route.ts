import { graphQlQuery } from "./graphQlQuery";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function query(request, res) {
    const requestBody = await request.text();
    return await graphQlQuery(requestBody);
});
