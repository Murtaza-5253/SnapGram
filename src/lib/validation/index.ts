import { z } from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, "Too Short"),
  username: z.string().min(2, "Too Short"),
  email: z.string().min(2, "Too Short"),
  password: z.string().min(2, "Too Short"),
});
