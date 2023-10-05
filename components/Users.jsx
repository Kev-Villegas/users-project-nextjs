'use client';
import { useRouter } from 'next/navigation';

function Users({ users }) {
  const router = useRouter();
  return (
    <ul className='list-group'>
      {users.map((user) => (
        <li
          className='list-group-item d-flex justify-content-between align-items-center'
          key={user.id}
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <div>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img
            src={user.avatar}
            alt={user.email}
            width={150}
            height={150}
            style={{ borderRadius: '55%' }}
          />
        </li>
      ))}
    </ul>
  );
}

export default Users;
