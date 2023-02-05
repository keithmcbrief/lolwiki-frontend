import { useEffect, useState } from 'react';

const Roles = () => {
  const [roles, setRoles] = useState([]);

  async function getRoles() {
    const roles = await fetch('http://localhost:3000/roles');
    const res = await roles.json();
    setRoles(res);
  }

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <div>
      <h1>All Roles</h1>
      <ul>
        {roles.map((role) => (
          <li key={role._id}>
            <a href={`/roles/${role._id}`}>{role.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roles;
