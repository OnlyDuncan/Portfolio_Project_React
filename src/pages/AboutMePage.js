import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
import Header from '../components/Header';

const AboutMePage = () => {
    return (
        <Container>
            <Header />
            <br />
            <Row>
                <Col md='5' outline>
                    <Card style={{height:"100%"}}>
                        <CardTitle className="card-header border border-dark" style={{backgroundColor: 'rgb(117, 117, 117)'}}>
                            <h3 className="text-light">Bio:</h3>
                        </CardTitle>
                        <CardBody className="card-body border border-dark" style={{backgroundColor: 'rgb(244, 242, 242)'}}>
                            <p>Duncan Payne is a multi-media artist currently living in Oklahoma City. He graduated with a BFA in Sculpture from the University of Science and Arts of Oklahoma in 2020. His work primarily explores the human condition and conciousness, and incorporates aspects of philosophy, mysticism, psychology, and identity. In the future, he plans to take a few years to pursue a career with his art, and eventually got to grad school for contemporary art.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='2' />
                <Col md='5' outline>
                    <Card style={{height:"100%"}}>
                        <CardTitle className="card-header border border-dark" style={{backgroundColor: 'rgb(117, 117, 117)'}}>
                            <h3 className="text-light">CV:</h3>
                        </CardTitle>
                        <CardBody className="card-header border border-dark" style={{backgroundColor: 'rgb(244, 242, 242)'}}>
                            <p><b>2022</b></p>
                            <p><i>Ruminations Solo Show</i>, Studio Ink, Norman, OK</p>
                            <p><i>Juried Show</i>, Art Hall OKC, Oklahoma City, OK</p>
                            <p><b>2021</b></p>
                            <p><i>Four. Seven. Three. Artist of the Month Show</i>, Four. Seven. Three., Tulsa, OK</p>
                            <p><i>ONE: Avant-Garde</i>, MAINSITE, Norman, OK</p>
                            <p><i>Momentum</i>, MAINSITE, Norman, OK and Living Arts, Tulsa, OK</p>
                            <p><b>2020</b></p>
                            <p><i>Postcard Perspectives</i>, Artspace Untitled, Oklahoma City, OK</p>
                            <p><i>Dopamine</i>, Studio Ink, Norman, OK</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Col outline>
                    <Card fluid>
                        <CardTitle className="card-header border border-dark" style={{backgroundColor: 'rgb(117, 117, 117)'}}>
                            <h3 className="text-light">Artist Statement:</h3>
                        </CardTitle>
                        <CardBody className="card-header border border-dark" style={{backgroundColor: 'rgb(244, 242, 242)'}}>
                            <p>Ruminations. That is the best way I can describe this most recent collection of images. As someone who has struggled with anxiety, depression, ADHD, and OCD their whole life, all of which have been exacerbated by the pandemic, the creation of these pieces served as both a form of painful confrontation, as well as joyful excape. Some are a reflection of those struggles, while others exist as fragmented meditations on existence, consciousness, loss, inevitability, and the passing of time. Ultimately, I see these pieces as a deeply personal ode to both the pain and the joy of the human experience, as well as a reminder that despite everything, there is a future just over the horizon, and no matter how ephemeral it is, it's still worth reaching.</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
        </Container>
    )
};

export default AboutMePage;