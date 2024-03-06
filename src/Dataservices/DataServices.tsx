import { Idigimon } from "../Interfaces/Interfaces";

export const getDigimon = async () => {
    const promise = await fetch('https://digimon-api.vercel.app/api/digimon/name/agumon');
    // giving data the type of Idigimon, but adding brackets after to make it an array because Idigimon is initially an object, but in the api, it's wrapped in an array
    const data: Idigimon[] = await promise.json();
    return data;
}

