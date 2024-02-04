"use server";

import { feedbackSchema } from "@/schemas/feedbackSchema";
import { z } from "zod";

export const submitFeedback = async (data: z.infer<typeof feedbackSchema>) => {
    const response = await fetch("https://api.github.com/repos/HaakonSvane/troji/dispatches", {
        method: "POST",
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `Bearer ${process.env.GITHUB_FEEDBACK_PAT}`,
        },
        body: JSON.stringify({
            event_type: "submit_feedback",
            client_payload: data,
        }),
    });
    if (response.status !== 204) {
        throw new Error(`Failed to submit feedback. Got: "${response.statusText}"`);
    }
};
