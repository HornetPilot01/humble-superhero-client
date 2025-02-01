import { GET_ALL_HERO_API, CREATE_NEW_HERO_API } from "../constants/backEnd-api";
import { from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

export const getAllHeroes = () => {
    return from(fetch(GET_ALL_HERO_API)).pipe(
        mergeMap(response =>
            from(response.json()).pipe(
                mergeMap(result => {
                    if (!response.ok) {
                        throw new Error(result.message || 'Failed to load heroes');
                    }
                    return from([result]);
                })
            )
        ),
        catchError(error => {
            console.error('Error loading heroes:', error);
            throw error;
        })
    );
};

export const addHero = (newHero) => {
    return from(
        fetch(CREATE_NEW_HERO_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHero),
        })
    ).pipe(
        mergeMap(response =>
            from(response.json()).pipe(
                mergeMap(result => {
                    if (!response.ok) {
                        throw new Error(result.message || "Failed to add hero");
                    }
                    return from([result]);
                })
            )
        ),
        catchError(error => {
            console.error('Error adding hero:', error);
            throw error;
        })
    );
};