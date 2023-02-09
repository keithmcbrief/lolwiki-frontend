import { useEffect, useState } from 'react';
import { API_URL } from '../../api';

const ChampionForm = () => {
  const [roles, setRoles] = useState([]);

  async function getRoles() {
    const roles = await fetch(`${API_URL}/roles`);
    const res = await roles.json();
    setRoles(res);
  }

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <div>
      <h1>Create Champion</h1>
      <form action={`${API_URL}/champion/create`} method='POST'>
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
