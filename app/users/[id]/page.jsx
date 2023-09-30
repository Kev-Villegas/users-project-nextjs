async function getUsers(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}
async function UsersPage({ params }) {
  const user = await getUsers(params.id);
  return (
    <div>
      <h1>Users Details...</h1>
      <div>
        <img src={user.avatar} alt='' />
        <div>
          <h3>
            {user.id} {user.first_name} {user.last_name}
          </h3>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
