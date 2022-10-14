import HomeNav from '../components/home/HomeNav';
import HomeCarousel from '../components/home/HomeCarousel';

const HomePage = () => {
    return (
        <>
            <HomeCarousel className='homeCarousel'/>
            <HomeNav className='containerHome'/>
        </>
    )
};

export default HomePage;