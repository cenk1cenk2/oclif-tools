import { z } from 'zod'

export const helloSchema = z.object({
  flags: z
    .object({
      from: z.string(),
      times: z.number().int().positive(),
      excited: z.boolean()
    })
    .refine((flags) => !flags.excited || flags.times > 1, { message: '--excited needs --times above 1' }),
  args: z.object({
    person: z.string()
  })
})
