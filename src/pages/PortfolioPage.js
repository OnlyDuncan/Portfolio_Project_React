import { Container } from 'reactstrap';
import Header from '../components/Header';
import PortfolioList from '../components/portfolio/PortfolioList';

const PortfolioPage = () => {
    return (
        <Container>
            <Header />
            <PortfolioList />
        </Container>
    )
};

export default PortfolioPage;