import { Container, Row, Col, Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import Header from '../components/Header';
import newsImage from '../app/assets/The Black Egg.jpeg';

const NewsPage = () => {
    return (
        <Container>
            <Header />
            <br />
            <Row>
                <Col md='5'>
                    <Card>
                        <CardImg width='100%' src={ newsImage } />
                    </Card>
                </Col>
                <br />
                <Col />
                <Col md='6' outline>
                    <Card style={{height:"100%"}}>
                        <CardTitle className='card-header border border-dark' style={{backgroundColor: 'rgb(117, 117, 117)'}}>
                            <h3 className='text-light'>Recently Produced Work:</h3>
                        </CardTitle>
                        <CardBody className='card-body border border-dark' style={{backgroundColor: 'rgb(244, 242, 242)'}}>
                            <p>Title: "The Black Egg"</p>
                            <p>Medium: Mixed Media, Ashes on Watercolor Paper</p>
                            <p>Size: 22 inches x 16 inches</p>
                            <p>Year: 2022</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Col outline>
                    <Card>
                        <CardTitle className='card-header border border-dark' style={{backgroundColor: 'rgb(117, 117, 117)'}}>
                            <h3 className='text-light'>Current Shows and Exhibitions:</h3>
                        </CardTitle>
                        <CardBody className='card-body border border-dark' style={{backgroundColor: 'rgb(244, 242, 242)'}}>
                            <p>Ruminations Solo Show</p>
                            <p>Studio Ink, 220 E Main St, Norman, Ok, 73069</p>
                            <p>November 11th - December 5th 2022</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
        </Container>
    )
};

export default NewsPage;