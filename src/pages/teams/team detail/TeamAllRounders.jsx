import { Card, Row, Col, Typography } from 'antd';
const { Meta } = Card;

const TeamAllRounders = ({ allrounders }) => {
    return (
        <>
            <Typography.Title className='what-r-u-text' style={{ margin: 0, textAlign: "left" }}>All Rounders</Typography.Title>
            <Row gutter={[16, 16]}>
                {allrounders?.map((allrounder) => (
                    <Col>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt={allrounder.playerName} src={allrounder.photo} />}
                        >
                            <Meta style={{ textAlign: "center" }} title={allrounder.playerName} description={allrounder.specialization} />
                        </Card>
                    </Col>

                ))}
            </Row>

        </>
    );
};

export default TeamAllRounders;