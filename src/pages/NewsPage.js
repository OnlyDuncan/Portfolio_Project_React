import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import Header from '../components/Header';
import Image from '../app/assets/The Black Egg.jpeg';

const NewsPage = () => {
    return (
        <Container>
            <Header />
            <Row>
                <Col className='col-md-5'>
                    Ahhhhhh
                </Col>
                <Col />
                <Col className='col-md-6 card border-0'>
                    <Card>
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
            <Row>
                <Col className='col card border-0'>
                    <Card>
                        <CardTitle className='card-header border border-dark' style={{backgroundCOLOR: 'rgb(117, 117, 117)'}}>
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
        </Container>
    )
};

export default NewsPage;