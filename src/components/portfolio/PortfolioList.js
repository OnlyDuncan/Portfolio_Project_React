import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
    Col,
    Row, 
    ListGroup, 
    ListGroupItem, 
    NavLink
} from 'reactstrap';
import ArtworkCard from './ArtworkCard';
import {
    selectAllTraditionalPaintings,
    selectAllSculpturesAndInstallations,
    selectAllPerformanceAndKineticArt,
    selectAllOtherArt
} from './portfolioSlice';
import portfolioListStyle from '../../styles/PortfolioList.css';

const PortfolioList = () => {
    const [height, setHeight] = useState(window.innerHeight -158);
    
    const updateHeight = () => {
            setHeight(window.innerHeight -158);
    }
    useEffect(() => {
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const traditionalPaintings = useSelector(selectAllTraditionalPaintings);
    const sculpturesAndInstallations = useSelector (selectAllSculpturesAndInstallations);
    const performanceAndKineticArt = useSelector(selectAllPerformanceAndKineticArt);
    const otherArt = useSelector(selectAllOtherArt);

    return (
        <>
            <Row style={portfolioListStyle}>
                <Col sm='3'>
                    <ListGroup flush>
                        <ListGroupItem className='list-group-item' color='secondary'>
                            <NavLink href='#traditional-paintings' className='link'>Traditional Paintings</NavLink>
                        </ListGroupItem>
                        <ListGroupItem className='list-group-item' color='secondary'>
                            <NavLink
                            href='#sculptures-and-installations' className='link'>Sculptures and Installations</NavLink>
                        </ListGroupItem>
                        <ListGroupItem className='list-group-item' color='secondary'>
                            <NavLink href='#performance-and-kinetic-art' className='link'>Performance and Kinetic Art</NavLink>
                        </ListGroupItem>
                        <ListGroupItem className='list-group-item' color='secondary'>
                            <NavLink href='#other-art' className='link'>Other Art</NavLink>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col sm='9' style={{maxHeight: height, overflowY: 'scroll'}}>
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