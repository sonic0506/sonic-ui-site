'use client';

import { Select } from '@xonic0506/sonic-ui';

import { useUsersQuery } from '@/entities/user';

const ALL_USERS = 'all';

interface UserSelectProps {
  userId: number | null;
  onUserChange: (userId: number | null) => void;
}

export function UserSelect({ userId, onUserChange }: UserSelectProps) {
  const { data: users } = useUsersQuery();
  const options = [
    { value: ALL_USERS, label: '모든 사용자' },
    ...users.map((user) => ({ value: String(user.id), label: user.name })),
  ];

  const handleValueChange = (value: string | null) => {
    onUserChange(value === null || value === ALL_USERS ? null : Number(value));
  };

  return (
    <Select
      aria-label="사용자"
      options={options}
      value={userId === null ? ALL_USERS : String(userId)}
      onValueChange={handleValueChange}
    />
  );
}

// 사용자 목록을 불러오는 동안이나 실패했을 때 같은 자리를 지켜요.
export function UserSelectPlaceholder() {
  return (
    <Select
      aria-label="사용자"
      options={[{ value: ALL_USERS, label: '모든 사용자' }]}
      value={ALL_USERS}
      disabled
    />
  );
}
