async function getUsers(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}
async function UsersPage({ params }) {
  const user = await getUsers(params.id);
  const { avatar, email, id, first_name, last_name } = user;
  return (
    <div className='row'>
      <div className='col-md-6 offset-md-3'>
        <div className='card text-center'>
          <div className='card-header'>
            <img src={avatar} alt={email} />
          </div>
          <div className='card-body text-right'>
            <h3>
              {id} {first_name} {last_name}
            </h3>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
