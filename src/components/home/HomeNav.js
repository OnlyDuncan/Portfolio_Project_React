import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
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
                <ButtonGroup vertical size = 'lg'>
                    <Button outline>
                        <Link className='link' to = 'news'>News</Link>
                    </Button>
                    <Button outline>
                        <NavLink className='link' to = 'portfolio'>Portfolio</NavLink>
                    </Button>
                    <Button outline>
                        <NavLink className='link' to = 'about'>About Me</NavLink>
                    </Button>
                    <Button outline>
                        <NavLink className='link' to = 'contact'>Contact Me</NavLink>
                    </Button>
                </ButtonGroup>
            </Row>
        </Container>
    )
};

export default HomeNav;