import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import Header from '../components/Header';

const ContactMePage = () => {
    return (
        <Container>
            <Header />
            <br />
            <Row>
                <Col outline>
                    <Card>
                        <CardTitle className="card-header border border-dark" style={{backgroundColor: 'rgb(117, 117, 117)'}}>
                            <h3 className='text-light'>Contact Me:</h3>
                        </CardTitle>
                        <CardBody className="card-body border border-dark" style={{backgroundColor: 'rgb(244, 242, 242)'}}>
                            <p>Instagram: <a href="https://www.instagram.com/duncan.payne.art/">duncan.payne.art</a></p>
                            <p>Email: Duncan.C.Payne@gmail.com</p>
                            <p>Phone: 1-405-308-9609</p>
                            <p>For inquiries about pricing, piece availability, exhibitions, commissions, or prints, send me an email, and I will get back to you as soon as possible. Thank you!</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
        </Container>
    )
};

export default ContactMePage;