import { API_URL } from '../../api';

const RoleForm = () => {
  const url = `${API_URL}/role/create`;

  return (
    <div>
      <h1>Create Role</h1>
      <form action={url} method='POST'>
        <label htmlFor='name'>Role</label>
        <input type='text' name='name' required />
        <button style={{ marginTop: '12px' }}>Create</button>
      </form>
    </div>
  );
};

export default RoleForm;
