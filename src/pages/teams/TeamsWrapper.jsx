
import TeamDetailPage from "./team detail/TeamDetailPage"
import MultiStepRouter from "./teams list/MultiStepRouter"
import { useEffect, useState } from "react"
import { getTeams } from "../../services/teams/teams"

const UI = {
    TeamListPage: 'TeamListPage',
    TeamDetailPage: 'TeamDetailPage'
}


const TeamsWrapper = () => {
    const [ui, SetUI] = useState(UI.TeamListPage)
    const [selectedTeam, setSelectedTeam] = useState(null)
    const [updatedCount, setUpdatedCount] = useState(0);
    // console.log("set", selectedTeam)
    const [teams, setTeams] = useState(null)
    useEffect(() => {
        getTeams().then((teams) => setTeams(teams))
    }, [updatedCount])

    return (
        <>
            {ui === UI.TeamListPage && <MultiStepRouter next={() => {
                SetUI(UI.TeamDetailPage)

            }} setSelectedTeam={setSelectedTeam} teams={teams} setUpdatedCount={setUpdatedCount} updatedCount={updatedCount}
            />}
            {ui === UI.TeamDetailPage && <TeamDetailPage back={() => SetUI(UI.TeamListPage)} selectedTeam={selectedTeam} teams={teams} setSelectedTeam={setSelectedTeam} />}

        </>
    )

}
export default TeamsWrapper