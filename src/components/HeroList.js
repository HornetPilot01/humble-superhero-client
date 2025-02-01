import React from 'react';

const HeroList = ({ heroes }) => {
    return (
        <div className="hero-list-container">
            <h2 className="hero-list-title">Hero List</h2>
            <table className="hero-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Superpower</th>
                        <th>Humility Score</th>
                    </tr>
                </thead>
                <tbody>
                    {heroes.map((hero) => (
                        <tr key={hero.id} className="hero-item">
                            <td className="hero-name">{hero.name}</td>
                            <td className="hero-superpower">{hero.superpower}</td>
                            <td className="hero-humility">{hero.humilityScore}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HeroList;
