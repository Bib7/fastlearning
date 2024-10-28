import { z } from 'zod';

export const envsVariables = z.object({
  APIKEY: z.string(),
});

export type envs = z.infer<typeof envsVariables>;
