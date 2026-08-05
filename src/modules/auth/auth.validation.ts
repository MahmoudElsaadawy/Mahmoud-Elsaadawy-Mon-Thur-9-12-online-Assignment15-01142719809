import z from "zod"

export const signupSchema = {
  body: z.strictObject({
    name: z.string(),
    email: z.email(),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[-!@#$%^&*(()_])(?=.*[0-9]).{8,}$/),
    phone: z.string(),
    age: z.number(),
    gender: z.number(),
    isOnline: z.boolean().optional(),
    isActive: z.boolean().optional(),
    provider: z.number().optional(),
    role: z.number().optional(),
    bio: z.string().optional()
  })
}

export const loginSchema = {
  body: z.strictObject({
    email: z.email(),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[-!@#$%^&*(()_])(?=.*[0-9]).{8,}$/),
  })
}