import { z } from "zod";

export const newGameSchema = z.object({
    name: z.string().min(1).max(255),
    symbol: z.string().emoji(),
    description: z.string().min(0).max(255).optional(),
    additionalInfo: z.string().min(0).max(255).optional(),
});
