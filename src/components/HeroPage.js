import React, { useState, useEffect } from 'react';
import HeroForm from './HeroForm';
import HeroList from './HeroList';
import '../styles/HeroPage.css';

const HeroPage = () => {
    const [heroes, setHeroes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const sortedHeroes = [...heroes].sort((a, b) => b.humilityScore - a.humilityScore);
        setHeroes(sortedHeroes);
    }, [heroes]);

    const addHero = (hero) => {
        const newHero = { ...hero, id: heroes.length + 1 };
        setHeroes([...heroes, newHero]);
    };

    return (
        <div className="hero-page-container">
            <HeroForm addHero={addHero} error={error} />
            <HeroList heroes={heroes} />
        </div>
    );
};

export default HeroPage;
