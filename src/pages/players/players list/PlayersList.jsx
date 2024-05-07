import { useState } from 'react';
import { Card, Row, Col, Typography, Button, Flex } from 'antd'
import { EditOutlined, DeleteOutlined, } from '@ant-design/icons';
const { Meta } = Card;

const PlayerList = ({ players, next, setSelectedPlayer, payload, initFormData, showModal, onDelete }) => {

    const initCreateUpdate = (id) => {
        if (id === undefined) {
            payload.current.operation = 'ADD'
            payload.current.data = {}
        }
        else {
            payload.current.operation = 'UPDATE'
            payload.current.data = {
                playerId: id
            }

        }
        const playerOjb = players?.find(
            (player) => player.playerId === payload.current.data.playerId
        )
        payload.current.data = playerOjb
        // console.log(payload.current.data, "recieved")
        initFormData()
        showModal();
    }
    return (
        <>
            <Button type="primary" onClick={() => initCreateUpdate()} style={{ position: 'absolute', top: '135px', right: '40px' }}>ADD PLAYER</Button>

            <Card style={{ marginTop: '100px', marginRight: '30px', marginLeft: '30px', marginBottom: '50px' }}>
                <Row justify="center" gutter={[24, 24]}>
                    {
                        players?.map(player => {
                            return (<Player key={player.playerId} onClick={next} player={player} setSelectedPlayer={setSelectedPlayer} initCreateUpdate={initCreateUpdate} showModal={showModal} onDelete={onDelete} />
                            )
                        })
                    }
                </Row>
            </Card>
        </>

    )

}

const Player = ({ onClick, player, setSelectedPlayer, initCreateUpdate, showModal, onDelete }) => {
    const [loading, setLoading] = useState(true);
    const onChange = (checked) => {
        setLoading(!checked);
    };
    // console.log("name", player.playerName);
    return (
        <Col>

            <Card
                hoverable
                style={{
                    width: 300,
                    backgroundColor: '#A7C7E7',
                    borderColor: ""
                }}
                cover={<img alt={player.playerName} src={player.photo} onClick={() => {
                    onClick()
                    setSelectedPlayer(player)
                }} />}
            >
                <div style={{ backgroundColor: '#A7C7E7', padding: '8px 16px' }}>
                    <Meta style={{ textAlign: 'center', marginBottom: "20px" }} title={<Typography.Title level={4}>{player.playerName}</Typography.Title>} description={player.specialization} />
                    <Flex style={{ marginTop: '8px', textAlign: 'right', justifyContent: "space-between" }}>
                        <EditOutlined key="edit" onClick={() => { initCreateUpdate(player.playerId); showModal() }} style={{ marginRight: '8px' }} />
                        <DeleteOutlined key="delete" onClick={() => onDelete(player.playerId)} />
                    </Flex>
                </div>
            </Card>
        </Col>
    )

}
export default PlayerList;


