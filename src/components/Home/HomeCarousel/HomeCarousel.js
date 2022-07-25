import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css'



function HomeCarousel() {
    return (
      <Carousel fade>
        <Carousel.Item className='homeCar'>
            <img
                className="d-block w-100 slide1"
                src={require("../../../img/crsl1C.png")}
                alt="Primera imagen de Carousel"
            />
          <Carousel.Caption>
            <h3>Jensen Artwork</h3>
            <p>Cuadros pintados al óleo sobre lienzo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='homeCar'>
            <img
                className="d-block w-100 slide2"
                src={require("../../../img/crsl2C.png")}
                alt="Segunda imagen de Carousel"
            />
  
          <Carousel.Caption>
            <h3>Jensen Artwork</h3>
            <p>Especialidad en paisajes y objetos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='homeCar'>
            <img
                className="d-block w-100 slide3"
                src={require("../../../img/crsl3C.png")}
                alt="Tercera imagen de Carousel"
            />
  
          <Carousel.Caption>
            <h3>Jensen Artwork</h3>
            <p>¡Haz tu pedido ya!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default HomeCarousel;
/*function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='homeCar'>
        <img
          className="d-block w-100 slide1"
          src={require("../../img/crsl1C.png")}
          alt="Primera imagen de Carousel"
        />
      </Carousel.Item>
      <Carousel.Item className='homeCar'>
        <img
            className="d-block w-100 slide2"
            src={require("../../img/crsl2C.png")}
            alt="Segunda imagen de Carousel"
            />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='homeCar'>
        <img
            className="d-block w-100 slide3"
            src={require("../../img/crsl3C.png")}
            alt="Tercera imagen de Carousel"
            />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel*/