import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
});

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;
