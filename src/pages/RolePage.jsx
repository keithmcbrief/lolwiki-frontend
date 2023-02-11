import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../api';

const RolePage = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/role/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <h1>{data?.role.name}</h1>
      <span style={{ display: 'inline' }}>Champions: </span>
      {data?.champions.map((champion) => (
        <div>
          <Link to={`/champion/${champion._id}`}>
            {champion.name}, {champion.title}
          </Link>
          <p>{champion.summary}</p>
        </div>
      ))}
      <hr />
      <div>
        <Link to={`${API_URL}/role/${id}/delete`}>Delete Role</Link>
      </div>
    </div>
  );
};

export default RolePage;
