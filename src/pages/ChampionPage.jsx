import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../api';

const ChampionPage = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/champion/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <h1>
        {data?.name}, {data?.title}
      </h1>
      <span style={{ display: 'inline' }}>
        Roles:{' '}
        {data?.role.map((role, i) => {
          return (
            <span>
              {role?.name}
              {i + 1 !== data?.role.length && ', '}
            </span>
          );
        })}
      </span>
      <p>{data?.summary}</p>
      <hr />
      <div>
        <a href={`${API_URL}/champion/${id}/delete`}>Delete Champion</a>
      </div>
      <div>
        <Link to={`/champion/${id}/update`}>Update Champion</Link>
      </div>
    </div>
  );
};

export default ChampionPage;
