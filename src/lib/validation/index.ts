import { z } from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, "Too Short"),
  username: z.string().min(2, "Too Short"),
  email: z.string().min(2, "Too Short"),
  password: z.string().min(8, "Password must be atleast 8 characters"),
});

export const SignInValidation = z.object({
  email: z.string().min(2, "Too Short"),
  password: z.string().min(8, "Password must be atleast 8 characters"),
});

export const PostValidation = z.object({
  caption:z.string().min(5).max(22),
  file:z.custom<File[]>(),
  location:z.string().min(2).max(100),
  tags:z.string()
})