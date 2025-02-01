import React, { useEffect, useState } from 'react';
import { getAllHeroes } from '../services/HeroService';
import HeroForm from './HeroForm';
import HeroList from './HeroList';
import '../styles/HeroPage.css';

const HeroPage = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        const subscription = getAllHeroes().subscribe({
            next: (data) => setHeroes(data),
            error: (err) => console.error('Error fetching heroes:', err)
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleAddHero = (newHero) => {
        setHeroes((prevHeroes) => {
            const updatedHeroes = [...prevHeroes, newHero];

            updatedHeroes.sort((a, b) => b.humilityScore - a.humilityScore);

            return updatedHeroes;
        });
    };

    return (
        <div className="hero-page-container">
            <HeroForm onAddHero={handleAddHero} />
            <HeroList heroes={heroes} />
        </div>
    );
};

export default HeroPage;
