import { z } from "zod";

export const feedbackSchema = z.object({
    body: z.string().min(1),
    title: z.string().min(1),
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
});
