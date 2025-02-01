import React, { useState } from 'react';
import { addHero } from '../services/HeroService';

const HeroForm = ({ onAddHero }) => {
    const [name, setName] = useState('');
    const [superpower, setSuperpower] = useState('');
    const [humilityScore, setHumilityScore] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newHero = {
            name,
            superpower,
            humilityScore: parseInt(humilityScore, 10),
        };

        try {
            const addedHero = await addHero(newHero);
            onAddHero(addedHero);
            setName('');
            setSuperpower('');
            setHumilityScore('');
            setError(null);
        } catch (error) {
            setError('Failed to add hero. Please try again.' + error.message);
        }
    };

    return (
        <div className="hero-form-container">
            <h2 className="hero-form-title">Add a New Hero</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="hero-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Hero Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="superpower" className="form-label">Superpower</label>
                    <input
                        type="text"
                        id="superpower"
                        className="form-input"
                        value={superpower}
                        onChange={(e) => setSuperpower(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="humilityScore" className="form-label">Humility Score</label>
                    <input
                        type="number"
                        id="humilityScore"
                        className="form-input"
                        value={humilityScore}
                        onChange={(e) => setHumilityScore(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Add Hero</button>
            </form>
        </div>
    );
};

export default HeroForm;
