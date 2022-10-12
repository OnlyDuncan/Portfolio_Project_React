import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

const HomeNav = () => {
    return (
        <>
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
                    <Button color="primary">
                        <Link to = 'news'>News</Link>
                    </Button>
                    <Button>
                        <NavLink to = 'portfolio'>Portfolio</NavLink>
                    </Button>
                    <Button>
                        <NavLink to = 'about'>About Me</NavLink>
                    </Button>
                    <Button>
                        <NavLink to = 'contact'>Contact Me</NavLink>
                    </Button>
                </ButtonGroup>
            </Row>
        </>
    )
};

export default HomeNav;