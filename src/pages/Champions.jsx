import { useEffect, useState } from 'react';

const Champions = () => {
  const [champions, setChampions] = useState([]);

  async function getChampions() {
    const champions = await fetch('http://localhost:3000/champions');
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
