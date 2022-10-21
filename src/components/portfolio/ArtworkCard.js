import { useState } from 'react';
import { Card, CardImg, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

const ArtworkCard = ({ artwork }) => {
    const { name, image, medium, size, year, description } = artwork;

    const [artworkModalOpen, setArtworkModalOpen] = useState(false);

    return (
        <>
            <Card>
                <CardImg width='100%' src={image} onClick={() => setArtworkModalOpen(true)}/>
            </Card>
            <Modal isOpen={artworkModalOpen} size='xl'>
                <ModalHeader color='secondary' toggle={() => setArtworkModalOpen(false)} style={{backgroundColor: 'grey', color: 'white'}}>
                    <h1>{name}</h1>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col sm='6'>
                            <img className='img-fluid' src={image} alt={description}/>
                        </Col>
                        <Col sm='6'>
                            <h4>Medium:</h4>
                            <p>{medium}</p>
                            <h4>Size:</h4>
                            <p>{size}</p>
                            <h4>Year:</h4>
                            <p>{year}</p>
                            <h4>Description:</h4>
                            <p>{description}</p>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </>
    );
};

export default ArtworkCard;