import { z } from "zod";

const groupDecisionModel = z.enum(["DEMOCRACY", "DICTATORSHIP"]);

export const newGroupSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1).max(255).optional(),
  decisionModel: groupDecisionModel,
});
