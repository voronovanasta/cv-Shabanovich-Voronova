import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
