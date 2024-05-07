import { Card, Row, Col, Typography } from 'antd';
const { Meta } = Card;

const TeamBatters = ({ batsmen }) => {
    // console.log(batsmen, "B")
    return (
        <>
            <Typography.Title className='what-r-u-text' style={{ margin: 0, textAlign: "left" }}>BATTERS</Typography.Title>
            <Row gutter={[16, 16]}>

                {batsmen?.map((batter) => (
                    <Col>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt={batter.playerName} src={batter.photo} />}
                        >
                            <Meta style={{ textAlign: "center" }} title={batter.playerName} description={batter.specialization} />
                        </Card>
                    </Col>

                ))}
            </Row>
        </>
    );
};

export default TeamBatters

