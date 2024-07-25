import { z } from 'zod'

export const RegisterSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, 'The password must be at least 8 characters long.')
      .regex(/[A-Z]/, 'The password must contain at least one uppercase letter.')
      .regex(/[a-z]/, 'The password must contain at least one lowercase letter.')
      .regex(/[0-9]/, 'The password must contain at least one digit.')
      .regex(/[\W_]/, 'The password must contain at least one special character.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'The passwords do not match.',
  })
