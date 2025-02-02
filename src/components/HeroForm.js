import React, { useState } from 'react';
import { addHero } from '../services/HeroService';
import { ToastContainer, toast } from 'react-toastify';

const HeroForm = ({ onAddHero }) => {
    const [name, setName] = useState('');
    const [superpower, setSuperpower] = useState('');
    const [humilityScore, setHumilityScore] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newHero = {
            name,
            superpower,
            humilityScore: parseInt(humilityScore, 10),
        };

        await addHero(newHero).subscribe({
            next: (result) => {
                onAddHero(result);
                setName('');
                setSuperpower('');
                setHumilityScore('');

                toast.success('Hero added successfully!');
            },
            error: (error) => {
                toast.error(error?.message || 'Failed to add hero');
            }
        });
    };

    return (
        <div className="hero-form-container">
            <h2 className="hero-form-title">Add a New Hero</h2>
            <form onSubmit={handleSubmit} className="hero-form">
                <div className="form-group">
                    <input
                        placeholder='Hero Name'
                        type="text"
                        id="name"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        placeholder='Superpower'
                        type="text"
                        id="superpower"
                        className="form-input"
                        value={superpower}
                        onChange={(e) => setSuperpower(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        placeholder='Humility Score'
                        type="number"
                        id="humilityScore"
                        className="form-input"
                        value={humilityScore}
                        onChange={(e) => setHumilityScore(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Add Hero</button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default HeroForm;
