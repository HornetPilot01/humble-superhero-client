import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroList from './components/HeroList';
import HeroForm from './components/HeroForm';

const App = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/superheroes/get_all')
      .then(response => {
        setHeroes(response.data);
      })
      .catch(error => {
        console.error('Error fetching heroes:', error);
      });
  }, []);

  const addHero = (hero) => {
    axios.post('http://localhost:3000/superheroes/create_new', hero)
      .then(response => {
        setHeroes([...heroes, response.data]);
      })
      .catch(error => {
        console.error('Error adding hero:', error);
      });
  };

  return (
    <div className="App">
      <h1>Humble Superheroes</h1>
      <HeroForm onAddHero={addHero} />
      <HeroList heroes={heroes} />
    </div>
  );
};

export default App;
