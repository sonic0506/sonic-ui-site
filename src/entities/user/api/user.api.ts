import { http } from '@/shared/api';

import { userSchema } from '../model/user.schema';

export async function getUsers() {
  return userSchema.array().parse(await http<unknown>('/users'));
}
