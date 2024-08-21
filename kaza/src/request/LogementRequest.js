import logements from '../data/logements.json';

export const  getLogements =()=>{
    return logements;
}
export const  getLogement =(id)=>{
    return logements.find( logement =>
        logement.id === id
    )
}
