import { Layout, Carousel, Image, Card, Col, Row, Typography, Button } from 'antd';
import bg from '../../image/home-bg.svg'
import bgg from '../../image/home-bgg.svg'

 

const { Content } = Layout;


const HomePage = () => {

    var date = new Date();
    var hours = date.getHours();

    let message;


    if (hours < 12) {
        message = "Good Morning!";
    } else if (hours < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    return (
        <Content >
            <Card style={{ height: '1200px', backgroundImage: `url(${bg})`, backgroundRepeat: 'repeat-y', borderRadius: 0, padding: '0px' }}>

                <Carousel autoplay style={{ height: '700px' }}>
                    <div>
                        <Image preview={false} width={'100%'} height={700} src="assets\home\crouselPhotos\C5.png" />
                    </div>
                    <div>
                        <Image preview={false} width={'100%'} height={700} src="assets\home\crouselPhotos\C4.png" />
                    </div>
                    <div>
                        <Image preview={false} width={'100%'} height={700} src="assets\home\crouselPhotos\C3.png" />
                    </div>
                    <div>
                        <Image preview={false} width={'100%'} height={700} src="assets\home\crouselPhotos\C2.png" />
                    </div>
                    <div>
                        <Image preview={false} width={'100%'} height={700} src="assets\home\crouselPhotos\C1.png" />
                    </div>

                </Carousel>
                <Card style={{ backgroundColor: '#10172b', backgroundImage: `url(${bgg})`, height: 300, borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px', borderLeft: '0px', backgroundRepeat: 'repeat-y' }}>
                    <Typography.Title level={3} style={{ color: 'white', marginLeft: '75px', lineHeight: 1.5, marginBottom: '0.1rem', fontStyle: 'italic' }}>{message}</Typography.Title>
                    <Typography style={{ color: 'white', marginLeft: '75px', fontFamily: 'Rubik sans-serif', marginBottom: '0.9rem' }}>curated photos for you</Typography>

                    <div style={{}}>
                        <Image
                            preview={false}
                            height={148}
                            hoverable
                            style={{ border: '1px solid white', width: '128px', height: '148px', marginLeft: '75px', borderRadius: 15 }}
                            src="assets\home\curatedPhotos\CP1.jpg"
                        />

                        <Image
                            preview={false}
                            height={148}
                            style={{ border: '1px solid white', width: '128px', height: '148px', marginLeft: '75px', borderRadius: 15 }}
                            src="assets\home\curatedPhotos\CP2.jpg"
                        />
                        <Image
                            preview={false}
                            height={148}
                            style={{ border: '1px solid white', width: '128px', height: '148px', marginLeft: '75px', borderRadius: 15 }}
                            src="assets\home\curatedPhotos\CP3.jpg"
                        />
                        <Image
                            preview={false}
                            height={148}
                            style={{ border: '1px solid white', width: '128px', height: '148px', marginLeft: '75px', borderRadius: 15 }}
                            src="assets\home\curatedPhotos\CP4.jpeg"
                        />
                        <Image
                            preview={false}
                            height={148}
                            style={{ border: '1px solid white', width: '128px', height: '148px', marginLeft: '75px', borderRadius: 15 }}
                            src="assets\home\curatedPhotos\CP5.jpeg"
                        />
                        <Image
                            preview={false}
                            height={148}
                            style={{ border: '1px solid white', width: '128px', height: '148px', marginLeft: '75px', borderRadius: 15 }}
                            src="assets\home\curatedPhotos\CP6.jpg"
                        />

                    </div>

                    {/* <Typography style={{ marginLeft: '85px', color: 'white', fontFamily: 'Rubik sans-serif', fontSize: 14 }}>M46-CSKvSRH</Typography> */}

                </Card>

                <Typography.Title level={2} style={{ marginLeft: '550px', fontStyle: 'italic', color: '#1d1d1d' }}>  What Are You Looking For?
                </Typography.Title>
                <Row style={{ marginLeft: '220px', letterSpacing: '1px', fontWeight: 700, transform: 'skew(-10deg)' }}>
                    <Col span={6}><Button className='button-86' href={`/players`} style={{ color: 'white' }} > All Players</Button></Col>
                    <Col span={6}><Button className='button-86' href={`/teams`} style={{ color: 'white' }}> All Teams</Button></Col>
                    <Col span={6}><Button className='button-86' href={`/upcomingMatches`} style={{ color: 'white' }}>Upcoming Matches </Button></Col>
                    <Col span={6}><Button className='button-86' href={`/completedMatches`} style={{ color: 'white' }}>Completed Matches</Button></Col>
                </Row>
            </Card>

        </Content>
    );
};

export default HomePage;

