import React, { useState } from 'react';

const HeroForm = ({ onAddHero }) => {
    const [name, setName] = useState('');
    const [superpower, setSuperpower] = useState('');
    const [humilityScore, setHumilityScore] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && superpower.trim() && humilityScore) {
            onAddHero({ name, superpower, humilityScore: Number(humilityScore) });
            setName('');
            setSuperpower('');
            setHumilityScore('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter hero name"
            />
            <input
                type="text"
                value={superpower}
                onChange={(e) => setSuperpower(e.target.value)}
                placeholder="Enter superpower"
            />
            <input
                type="number"
                value={humilityScore}
                onChange={(e) => setHumilityScore(e.target.value)}
                placeholder="Enter humility score"
            />
            <button type="submit">Add Hero</button>
        </form>
    );
};

export default HeroForm;
