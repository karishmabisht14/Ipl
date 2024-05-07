import { useEffect, useState } from "react"
import { getPlayers } from "../../../services/players/players"
import PlayerList from "./PlayersList"
import CreateUpdatePlayer from "./CreateUpdatePlayer"

const PlayerListPage = ({ next, setSelectedPlayer, updatedCount, initFormData, showModal, payload, onDelete }) => {
    const [players, setPlayers] = useState(null)
    useEffect(() => {
        getPlayers().then((players) => setPlayers(players), console.log("playerssss", players)
        )
    }, [updatedCount])

    return (
        <>
            {players &&
                <PlayerList players={players} next={next} setSelectedPlayer={setSelectedPlayer} initFormData={initFormData} showModal={showModal} payload={payload} onDelete={onDelete} />
            }

        </>

    )
}
export default PlayerListPage