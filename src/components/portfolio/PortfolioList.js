import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import ArtworkCard from './ArtworkCard';
import {
    selectAllTraditionalPaintings,
    selectAllSculpturesAndInstallations,
    selectAllPerformanceAndKineticArt,
    selectAllOtherArt
} from './portfolioSlice';

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
            <Row className='ms-auto'>
                <h1>Traditional Paintings</h1>
                {traditionalPaintings.map((traditionalPainting) => {
                    return (
                        <Col md='4' key={traditionalPainting.id}>
                            <ArtworkCard artwork={traditionalPainting}/>
                        </Col>
                    );
                })}
            </Row>
            <Row className='ms-auto'>
                <h1>Sculptures and Installations</h1>
                {sculpturesAndInstallations.map((sculptureOrInstallation) => {
                    return (
                        <Col md='4' key={sculptureOrInstallation.id}>
                            <ArtworkCard artwork={sculptureOrInstallation}/>
                        </Col>
                    );
                })}
            </Row>
            <Row className='ms-auto'>
                <h1>Performance and Kinetic Art</h1>
                {performanceAndKineticArt.map((performanceOrKineticArt) => {
                    return (
                        <Col md='4' key={performanceOrKineticArt.id}>
                            <ArtworkCard artwork={performanceOrKineticArt}/>
                        </Col>
                    );
                })}
            </Row>
            <Row className='ms-auto'>
                <h1>Other Art</h1>
                {otherArt.map((otherArt) => {
                    return (
                        <Col md='4' key={otherArt.id}>
                            <ArtworkCard artwork={otherArt}/>
                        </Col>
                    );
                })}
            </Row>
        </>
    )
}

export default PortfolioList;