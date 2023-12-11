import { z } from "zod";

const baseAuthArgsSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email address" })
    .min(6, "Email must be atleast 6 characters long")
    .max(50, "Email must be atmost 50 characters long"),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, "Password must be atleast 6 characters long")
    .max(20, "Password must be atmost 20 characters long"),
});

export const loginAuthSchema = baseAuthArgsSchema;

export const registerAuthSchema = baseAuthArgsSchema.extend({
  userName: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .min(5, "User name must be atleast 5 characters long")
    .max(12, "User name must be atmost 12 characters long"),
});
