import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export const POST = withApiAuthRequired(async function query(request, res) {
    console.log("submitting feedback to GitHub... body:", request.body);
    return await fetch("https://api.github.com/repos/HaakonSvane/troji/dispatches", {
        method: "POST",
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `Bearer ${process.env.GITHUB_FEEDBACK_PAT}`,
        },
        body: request.body,
    });
});
