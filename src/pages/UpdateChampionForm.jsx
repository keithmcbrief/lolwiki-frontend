import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../api';

const UpdateChampionForm = () => {
  const url = `${API_URL}/champion/create`;
  const { id } = useParams();
  const [roles, setRoles] = useState([]);
  const [data, setData] = useState({});
  const [checkboxes, setCheckboxes] = useState();

  async function getData() {
    const roles = await fetch(`${API_URL}/roles`);
    const res = await roles.json();
    setRoles(res);
    fetch(`${API_URL}/champion/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }

  function checkRole(name, arr) {
    let match = false;
    for (let i = 0; i < arr.length; ++i) {
      if (name === arr[i].name) {
        match = true;
      }
    }
    return match;
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      let checkboxesArr = roles.map((role) => (
        <div>
          {checkRole(role.name, data.role) ? (
            <input
              value={role._id}
              id={role._id}
              defaultChecked
              type='checkbox'
              name='role'
            />
          ) : (
            <input value={role._id} id={role._id} type='checkbox' name='role' />
          )}
          <label htmlFor='role'>{role.name}</label>
        </div>
      ));
      setCheckboxes(checkboxesArr);
    }
  }, [data]);

  return (
    <div>
      <h1>Update Champion</h1>
      <form action={url} method='POST'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' defaultValue={data.name} required />
        <label htmlFor='name'>Title</label>
        <input type='text' name='title' defaultValue={data.title} required />
        <label htmlFor='summary'>Summary</label>
        <textarea name='summary' defaultValue={data.summary} required />
        <label htmlFor='role' style={{ display: 'block' }}>
          Role
        </label>
        {checkboxes}
        <button style={{ marginTop: '12px' }}>Create</button>
      </form>
    </div>
  );
};

export default UpdateChampionForm;
