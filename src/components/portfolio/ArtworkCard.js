import { Card, CardImg } from 'reactstrap';

const ArtworkCard = ({ artwork }) => {
    const { image } = artwork;
    return (
        <Card>
            <CardImg width='100%' src={image}/>
        </Card>
    );
};

export default ArtworkCard;