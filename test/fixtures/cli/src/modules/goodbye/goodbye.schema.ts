import { z } from 'zod'

export const goodbyeSchema = z.object({
  flags: z.object({
    tone: z.enum(['polite', 'casual']).describe('How to say goodbye')
  }),
  args: z.object({
    person: z.string().default('world').describe('Person to say goodbye to')
  })
})
