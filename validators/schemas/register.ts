import { z } from 'zod'
import msg from '~/locales/es/register.json'
export const RegisterSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/, msg.register.msgErrorPasswordUpper)
      .regex(/[a-z]/, msg.register.msgErrorPasswordLower)
      .regex(/[0-9]/, msg.register.msgErrorPasswordDigit)
      .regex(/[\W_]/, msg.register.msgErrorPasswordCharacter),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'The passwords do not match.',
  })
