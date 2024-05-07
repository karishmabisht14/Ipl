import { Card, Row, Col, Typography } from 'antd';
const { Meta } = Card;

const TeamBowlers = ({ bowlers }) => {
    return (
        <>
            <Typography.Title className='what-r-u-text' style={{ margin: 0, textAlign: "left" }}>BOWLERS</Typography.Title>
            <Row gutter={[16, 16]}>
                {bowlers?.map((bowler) => (
                    <Col span={[8, 8]}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt={bowler.playerName} src={bowler.photo} />}
                        >
                            <Meta style={{ textAlign: "center" }} title={bowler.playerName} description={bowler.specialization} />
                        </Card>

                    </Col>

                ))}
            </Row>
        </>
    );
};

export default TeamBowlers;

