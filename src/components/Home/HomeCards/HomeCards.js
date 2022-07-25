import Card from 'react-bootstrap/Card';
import { cuadro } from './HomeCardsInfo';

function HomeCards({cuadro, img, nombre, description}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cuadro.img} />
      <Card.Body>
        <Card.Title>{cuadro.nombre}</Card.Title>
        <Card.Text>
          {cuadro.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HomeCards;