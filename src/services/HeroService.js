import { GET_ALL_HERO_API, CREATE_NEW_HERO_API } from "../constants/backEnd-api";
 

export const getAllHeroes = async () => {
    try {
        const response = await fetch(GET_ALL_HERO_API);
        if (!response.ok) {
            throw new Error('Failed to fetch heroes');
        }
        const heroes = await response.json();
        return heroes;
    } catch (error) {
        console.error('Error loading heroes:', error);
        throw error;
    }
};

export const addHero = async (newHero) => {
    try {
        const response = await fetch(CREATE_NEW_HERO_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHero),
        });
        if (!response.ok) {
            throw new Error('Failed to add hero');
        }
        const addedHero = await response.json();
        return addedHero;
    } catch (error) {
        console.error('Error adding hero:', error);
        throw error;
    }
};
