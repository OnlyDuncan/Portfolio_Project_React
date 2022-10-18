import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navstyle from '../../styles/HomeNav.css'

const HomeNav = () => {
    return (
        <Container className='containerHome'>
            <Row>
                <Col className = 'align-items-center'>
                    <h1>Duncan Payne</h1>
                </Col>
            </Row>
            <Row>
                <Col className = 'align-items-center'>
                    <h3>Multi-Media Artist</h3>
                </Col>
            </Row>
            <Row>
                <ButtonGroup vertical>
                    <Link className='link' to = 'news'>
                        <Button outline size='lg'>
                            News
                        </Button>
                    </Link>
                    <Link className='link' to = 'portfolio'>
                        <Button outline size='lg'>
                            Portfolio
                        </Button>
                    </Link>
                    <Link  className='link' to = 'about'>
                        <Button outline size='lg'>
                            About Me
                        </Button>
                    </Link>
                    <Link className='link' to = 'contact'>
                        <Button outline size='lg'>
                            Contact Me
                        </Button>
                    </Link>
                </ButtonGroup>
            </Row>
        </Container>
    )
};

export default HomeNav;