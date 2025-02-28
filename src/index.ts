import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string().min(3, { message: "Please provide Valid Name" }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Please enter strong password having atleast 6 characters",
  }),
});

export type registerUserSchemaType = z.infer<typeof registerUserSchema>;

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Please enter valid password" }),
});

export type loginUserSchemaType = z.infer<typeof loginUserSchema>;
