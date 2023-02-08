import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChampionPage = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/champion/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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
          return <span>{role?.name}{i+1 !== data?.role.length && ', '}</span>;
        })}
      </span>
      <p>{data?.summary}</p>
      <hr />
      <div>
        <a href=''>Delete Champion</a>
      </div>
      <div>
        <a href=''>Update Champion</a>
      </div>
    </div>
  );
};

export default ChampionPage;
