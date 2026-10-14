import { z } from 'zod'

export const helloSchema = z.object({
  flags: z
    .object({
      from: z.string().default('fixture').describe('Whom is saying hello'),
      times: z.number().int().positive().default(1).describe('How many times to say hello'),
      excited: z.boolean().default(false)
    })
    .refine((flags) => !flags.excited || flags.times > 1, { message: '--excited needs --times above 1' }),
  args: z.object({
    person: z.string().default('world').describe('Person to say hello to')
  })
})
