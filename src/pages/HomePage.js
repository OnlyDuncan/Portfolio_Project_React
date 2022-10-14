import { Container } from 'reactstrap';
import HomeNav from '../components/home/HomeNav';
import HomeCarousel from '../components/home/HomeCarousel';

const HomePage = () => {
    return (
        <Container>
            <HomeCarousel />
            <HomeNav />
        </Container>
    )
};

export default HomePage;