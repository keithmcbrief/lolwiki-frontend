import { useEffect, useState } from 'react';

const ChampionForm = () => {
  const url = 'http://localhost:3000/champion/create';
  const [roles, setRoles] = useState([]);

  async function getRoles() {
    const roles = await fetch('http://localhost:3000/roles');
    const res = await roles.json();
    console.log(res)
    setRoles(res);
  }

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <div>
      <h1>Create Champion</h1>
      <form action={url} method='POST'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' required />
        <label htmlFor='name'>Title</label>
        <input type='text' name='title' required />
        <label htmlFor='summary'>Summary</label>
        <textarea name='summary' required />
        <label htmlFor='role' style={{ display: 'block' }}>
          Role
        </label>
        {roles.map((role) => (
          <div>
            <input value={role._id} id={role._id} type='checkbox' name='role' />{' '}
            <label htmlFor='role'>{role.name}</label>
          </div>
        ))}
        <button style={{ marginTop: '12px' }}>Create</button>
      </form>
    </div>
  );
};

export default ChampionForm;
