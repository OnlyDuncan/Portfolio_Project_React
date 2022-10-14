import HomeNav from '../components/home/HomeNav';
import HomeCarousel from '../components/home/HomeCarousel';
import carouselStyle from '../styles/HomeCarousel.css';
import navStyle from '../styles/HomeNav.css';

const HomePage = () => {
    return (
        <>
            <HomeCarousel style={carouselStyle}/>
            <HomeNav style={navStyle}/>
        </>
    )
};

export default HomePage;