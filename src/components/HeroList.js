import React, { useEffect, useState } from 'react';

const HeroList = ({ heroes }) => {
    const [sortedHeroes, setSortedHeroes] = useState([]);

    useEffect(() => {
        const sorted = [...heroes].sort((a, b) => b.humilityScore - a.humilityScore);
        setSortedHeroes(sorted);
    }, [heroes]);

    return (
        <div>
            <h2>Hero List</h2>
            <ul>
                {sortedHeroes.map((hero) => (
                    <li key={hero.id}>
                        {hero.name} | {hero.superpower} | (Humility: {hero.humilityScore})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeroList;
