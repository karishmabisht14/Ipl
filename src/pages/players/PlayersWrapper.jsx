import { useState } from "react"
import PlayerDetailPage from "./player detail/PlayerDetailPage"
import { SingleStepRouter } from "./players list/singleStepRouter"

const UI = {
    PlayerListPage: 'PlayerListPage',
    PlayerDetailPage: 'PlayerDetailPage'
}


const PlayersWrapper = () => {
    const [ui, setUI] = useState(UI.PlayerListPage)
    const [selectedPlayer, setSelectedPlayer] = useState(null)
    return (
        <>
            {ui === UI.PlayerListPage && <SingleStepRouter next={() => {
                setUI(UI.PlayerDetailPage)
            }} setSelectedPlayer={setSelectedPlayer}
            />
            }

            {ui === UI.PlayerDetailPage && <PlayerDetailPage back={() => setUI(UI.PlayerListPage)} selectedPlayer={selectedPlayer}
            />}
        </>


    )
}
export default PlayersWrapper