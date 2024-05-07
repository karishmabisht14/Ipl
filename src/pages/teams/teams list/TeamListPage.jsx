import TeamList from "./TeamList"
import bg from "../../../image/teams-card-bg.svg"
import bgg from "../../../image/teams-tata-logo-bg.svg"

const TeamListPage = ({ next, setSelectedTeam, updatedCount, initFormData, showModal, payload, onDelete, teams }) => {

    return (
        <>
            {teams && <div style={{ backgroundImage: `url(${bg})`, backgroundColor: '#071026', backgroundRepeat: 'repeat-y', backgroundPosition: 'bottom' }}>
                <div style={{
                    backgroundImage: `url(${bgg})`, position: 'absolute',
                    top: '-60',
                    right: '50%',
                    margin: '0 auto',
                    width: '1175px',
                    height: '404px',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    margin: '0 -580px',
                    // border: '1px solid red'
                }}></div>
                <TeamList teams={teams} next={next} setSelectedTeam={setSelectedTeam} payload={payload}
                    initFormData={initFormData}
                    updatedCount={updatedCount}
                    showModal={showModal}
                    onDelete={onDelete} />

            </div>
            }
        </>
    );

}
export default TeamListPage;
