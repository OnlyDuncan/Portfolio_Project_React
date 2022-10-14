import { UncontrolledCarousel } from 'reactstrap';
import Image1 from '../../app/assets/The Punishment of Narcissus Entry.jpg';
import Image2 from '../../app/assets/The Black Egg.jpeg';
import Image3 from '../../app/assets/Sleep 5 entry.jpg';

const items = [
  {
    src: Image1,
    key: 1,
  },
  {
    src: Image2,
    key: 2,
  },
  {
    src: Image3,
    key: 3,
  },
];

function HomeCarousel() {
  return (
    <UncontrolledCarousel className='carousel-fade' interval={5000} items={items}/>
  );
}

export default HomeCarousel;