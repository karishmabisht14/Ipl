import playersData from "./players.json";
import crud from "../../utils/crudService";

let players = playersData;   

export const getPlayers =() =>{
    return new Promise(resolve=>{
        players = crud.get(players)
        resolve(players)
    })

}

export const addPlayer = (newPlayer) => {  
      
    return new Promise(resolve => {
        //const response = fetch(url/addPlayer)
        players = crud.add([...players], newPlayer)
            resolve(players);
    })
};

export const removePlayer = (id, pk) => {    
    return new Promise(resolve => {
        //const response = fetch(url/removePlayer)
        players = crud.remove([...players], id,pk)
        resolve(players);
        // console.log(players)
    })
};

export const updatePlayer = (updatePlayer) => {     
    //const response = fetch(url/updatePlayer)   
    return new Promise(resolve => {       
        players = crud.update([...players], updatePlayer)
        resolve(players);
    })
};

// const Main = () =>{
//     addPlayer({        
//             "playerId": 2,
//             "playerName": "abc",
//             "dob": "date",
//             "specialization":"def",
//             "photo": "URL",
//             "iplDebut": 2000,
//             "inning": 345,
//             "runs": 1000,
//             "bsr": 178,
//             "ba": 67,
//             "economy": 0,
//             "wickets": 0        
//     }).then((res) => {
//         players = res;
//         console.log("added", players)
//         console.log("a",res)
       
//     }).catch((err) => {
//         console.log(err);
//     })

//     addPlayer({        
//         "playerId": 3,
//         "playerName": "abc",
//         "dob": "date",
//         "specialization":"def",
//         "photo": "URL",
//         "iplDebut": 2000,
//         "inning": 345,
//         "runs": 1000,
//         "bsr": 178,
//         "ba": 67,
//         "economy": 0,
//         "wickets": 56        
// }).then((res) => {
//     console.log("a",res)
// }).catch((err) => {
//     console.log(err);
// })


// setTimeout(function(){
//     removePlayer(1).then((res) => {
//         console.log("r", res);
//         players = res;
      
//     }).catch((err) => {
//         console.log(err);
//     })
// },3000)
   
// setTimeout(function(){
//     updatePlayer({
//         "playerId": 2,
//         "playerName": "abc",
//         "dob": "date",
//         "specialization":"def",
//         "photo": "URL",
//         "iplDebut": 2000,
//         "inning": 345,
//         "runs": 1000,
//         "bsr": 178,
//         "ba": 67,
//         "economy": 0,
//         "wickets": 4
//     }).then((res)=>{
//         console.log("u",res);
//     }).catch(err => {
//         console.log(err);
//     })   
// },6000)
// }

// export default Main;
