import { useSelector } from 'react-redux';
import { Col, Row, Nav, NavItem, NavLink } from 'reactstrap';
import ArtworkCard from './ArtworkCard';
import {
    selectAllTraditionalPaintings,
    selectAllSculpturesAndInstallations,
    selectAllPerformanceAndKineticArt,
    selectAllOtherArt
} from './portfolioSlice';
import Scrollspy from 'react-scrollspy';

const PortfolioList = () => {
    const traditionalPaintings = useSelector(selectAllTraditionalPaintings);
    const sculpturesAndInstallations = useSelector (selectAllSculpturesAndInstallations);
    const performanceAndKineticArt = useSelector(selectAllPerformanceAndKineticArt);
    const otherArt = useSelector(selectAllOtherArt);
    console.log('Traditional Paintings:', traditionalPaintings);
    console.log('Sculptures And Installations:', sculpturesAndInstallations);
    console.log('Performance And Kinetic Art:', performanceAndKineticArt);
    console.log('Other Art:', otherArt);

    return (
        <>
            <Row>
                <Col sm='3'>
                    <Nav vertical>
                        <Scrollspy 
                            className='list-group' 
                            items={ ['traditional-paintings', 'sculptures-and-installations', 'performance-and-kinetic-art', 'other-art'] }
                            currentClassName='is-current'
                        >
                            <NavItem className='list-group-item' active color='secondary'>
                                <NavLink href='#traditional-paintings'>Traditional Paintings</NavLink>
                            </NavItem>
                            <NavItem className='list-group-item'>
                                <NavLink 
                                href='#sculptures-and-installations'
                                >Sculptures and Installations</NavLink>
                            </NavItem>
                            <NavItem className='list-group-item'>
                                <NavLink href='#performance-and-kinetic-art'>Performance and Kinetic Art</NavLink>
                            </NavItem>
                            <NavItem className='list-group-item'>
                                <NavLink href='#other-art'>Other Art</NavLink>
                            </NavItem>
                        </Scrollspy>
                    </Nav>
                </Col>
                <Col sm='9' style={{height: "1080px", overflowY: 'scroll'}}>
                    <Row className='ms-auto' id='traditional-paintings'>
                        <h1>Traditional Paintings</h1>
                        {traditionalPaintings.map((traditionalPainting) => {
                            return (
                                <Col md='4' key={traditionalPainting.id}>
                                    <ArtworkCard artwork={traditionalPainting}/>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className='ms-auto' id='sculptures-and-installations'>
                        <h1>Sculptures and Installations</h1>
                        {sculpturesAndInstallations.map((sculptureOrInstallation) => {
                            return (
                                <Col md='4' key={sculptureOrInstallation.id}>
                                    <ArtworkCard artwork={sculptureOrInstallation}/>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className='ms-auto' id='performance-and-kinetic-art'>
                        <h1>Performance and Kinetic Art</h1>
                        {performanceAndKineticArt.map((performanceOrKineticArt) => {
                            return (
                                <Col md='4' key={performanceOrKineticArt.id}>
                                    <ArtworkCard artwork={performanceOrKineticArt}/>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className='ms-auto' id='other-art'>
                        <h1>Other Art</h1>
                        {otherArt.map((otherArt) => {
                            return (
                                <Col md='4' key={otherArt.id}>
                                    <ArtworkCard artwork={otherArt}/>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default PortfolioList;