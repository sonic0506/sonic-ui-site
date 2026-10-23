import { z } from 'zod';

// JSONPlaceholder /users 응답에서 화면이 쓰는 값만 받아요(나머지 필드는 버려요).
export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type User = z.infer<typeof userSchema>;
