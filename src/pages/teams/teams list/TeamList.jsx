import { Card, Col, Row, Divider, Button, Typography, Flex } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Meta } = Card;


const TeamList = ({ teams, next, setSelectedTeam, payload, initFormData, showModal, onDelete }) => {

    const initCreateUpdate = (id) => {
        if (id === undefined) {
            // console.log("goes")
            payload.current.operation = 'ADD'
            payload.current.data = {}
            initFormData()
            showModal()
        }
        else {
            // console.log("edit");
            payload.current.operation = 'UPDATE'
            payload.current.data.team_id = id

            const teamObj = teams?.find(
                (team) => team.team_id === id
            )

            payload.current.data = teamObj;
            // console.log("pauyy", payload)
            initFormData()
            showModal()
        }


    }


    return (
        <>
            <Button type="primary" onClick={() => initCreateUpdate()} style={{ position: 'absolute', top: '135px', right: '40px' }}>ADD TEAM</Button>
            <img src="assets\teams\logo\ipl-logo.png" width={180} style={{ margin: '40px 652px' }} alt="IPL" />

            <Divider orientation="left"></Divider>
            <Row justify="center" gutter={[24, 24]}>
                {teams.map((team, index) => {
                    return (
                        <Team key={team.team_id} team={team} index={index} onClick={next} setSelectedTeam={setSelectedTeam} initFormData={initFormData} payload={payload} showModal={showModal} initCreateUpdate={initCreateUpdate} onDelete={onDelete} />
                    )
                })}
            </Row>

        </>
    )

}



const Team = ({ team, onClick, setSelectedTeam, initCreateUpdate, showModal, onDelete }) => {
    // console.log('reccc', team)

    const cardColors = ["lightskyblue", "#FFBF00", "#B22222", "#FFD700", "#4682B4", "#EE82EE", "#8B4513"];

    const colorIndex = team.team_id % cardColors.length;

    return (
        <Col>
            <Card
                hoverable
                style={{
                    width: 300,
                    backgroundColor: cardColors[colorIndex],
                    // borderColor: "none"
                }}
                cover={<img alt={team.team_name} src={team.team_logo} onClick={() => {
                    onClick()
                    setSelectedTeam(team)
                }}
                />}
            >
                <div style={{ backgroundColor: cardColors[colorIndex], padding: '8px 16px' }}>
                    <Meta style={{ textAlign: 'center', marginBottom: 20 }} title={<Typography.Title level={4} >{team.team_name}</Typography.Title>} />
                    <Flex style={{ marginTop: '8px', textAlign: 'right', justifyContent: "space-between" }}>
                        <EditOutlined key="edit" onClick={() => { initCreateUpdate(team.team_id); showModal() }} style={{ marginRight: '8px' }} />
                        <DeleteOutlined key="delete" onClick={() => onDelete(team.team_id)} />
                    </Flex>
                </div>
            </Card>
        </Col>
    );
}
export default TeamList;

