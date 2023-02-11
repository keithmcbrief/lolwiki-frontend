import { useEffect, useState } from 'react';
import { API_URL } from '../../api';

const Champions = () => {
  const [champions, setChampions] = useState([]);

  async function getChampions() {
    const champions = await fetch(`${API_URL}/champions`);
    const res = await champions.json();
    setChampions(res);
  }

  useEffect(() => {
    getChampions();
  }, []);

  return (
    <div>
      <h1>All Champions</h1>
      <ul>
        {champions.map((champ) => (
          <li key={champ._id}>
            <a href={`/champion/${champ._id}`}>
              {champ.name}, {champ.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Champions;
