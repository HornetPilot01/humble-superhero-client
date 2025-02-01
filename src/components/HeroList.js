const HeroList = ({ heroes }) => {
    return (
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
    );
};

export default HeroList;
