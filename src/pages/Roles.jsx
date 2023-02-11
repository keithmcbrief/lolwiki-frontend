import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../api';

const Roles = () => {
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
      <h1>All Roles</h1>
      <ul>
        {roles.map((role) => (
          <li key={role._id}>
            <Link to={`/role/${role._id}`}>{role.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roles;
