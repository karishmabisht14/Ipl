import teamsData from "./teams.json"
import crud from "../../utils/crudService";

let teams = teamsData

export const getTeam = () => {
    return new Promise(resolve => {
        teams = crud.get(teams)
        resolve(teams[0]);
    })
};

export const getTeams = () => {
    return new Promise(resolve => {
        teams = crud.get(teams)
        resolve(teams);
    })
};

export const addTeam = (newTeam) => {
    return new Promise(resolve => {
        // console.log(newTeam)
        teams = crud.add([...teams], newTeam)
        resolve(teams);
    })
};

export const removeTeam = (id) => {
    return new Promise(resolve => {
        // console.log(id)
        teams = crud.remove([...teams], id, "team_id")
        resolve(teams);
    })
};

export const updateTeam = (updateTeam) => {
    return new Promise(resolve => {
        teams = crud.update([...teams], updateTeam, "team_id")
        // console.log("teams", teams);
        resolve(teams);
    })
};
