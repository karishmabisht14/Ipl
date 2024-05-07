import { Card, Flex, Typography, Row, Col } from 'antd';
import moment from 'moment';
const imgStyle = {
    display: 'block',
    width: 550,
    height: 'auto'
};

const PlayerDetail = ({ selectedPlayer }) => {
    // console.log(selectedPlayer, 'selectedPlayer')
    return (
        <Card
            style={{
                width: '100%',
                height: 600,
                backgroundColor: '#F39C12 ',
                borderRadius: 0,
                border: 'none'


            }}
            styles={{
                body: {
                    padding: 0,
                    overflow: 'hidden',

                },
            }}
        >

            <Flex justify="space-between" style={{ marginLeft: 100 }}>
                <img
                    alt="avatar"
                    src={selectedPlayer?.photo}
                    style={imgStyle}
                />
                <Flex
                    vertical
                    align="flex-start"
                    justify="space-between"
                    style={{
                        padding: 32,
                        marginRight: '30%',
                        marginLeft: '5'
                    }}
                >
                    <Typography.Title style={{ fontSize: 75 }}>
                        {selectedPlayer?.playerName}
                    </Typography.Title>

                    <Typography.Title style={{ zIndex: 4, marginTop: '1.5rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                        Player Overview
                    </Typography.Title>
                    <Row gutter={[24, 24]} style={{ border: '1px solid black', rowGap: 0 }} >
                        <Col span={12} style={{ border: '1px solid black', padding: 30, width: 600 }}><strong style={{ fontSize: '20px' }}>{selectedPlayer?.iplDebut}</strong><br /><Typography.Text>
                            IPL Debut
                        </Typography.Text></Col>
                        <Col span={12} style={{ border: '1px solid black', padding: 30, width: 600 }}><strong style={{ fontSize: '20px' }}>{selectedPlayer?.specialization}</strong><br /><Typography.Text>
                            Specialization
                        </Typography.Text></Col>
                        <Col span={12} style={{ border: '1px solid black', padding: 30, width: 600 }}><strong style={{ fontSize: '20px' }}>{moment(selectedPlayer?.dob).format("YYYY-MM-DD")}</strong><br /><Typography.Text>
                            Date Of Birth
                        </Typography.Text></Col>
                        <Col span={12} style={{ border: '1px solid black', padding: 30, width: 600 }}><strong style={{ fontSize: '20px' }}>{selectedPlayer?.innings}</strong><br /><Typography.Text>
                            Innings
                        </Typography.Text></Col>
                    </Row>
                </Flex>
            </Flex>
        </Card>
    )
}
export default PlayerDetail





