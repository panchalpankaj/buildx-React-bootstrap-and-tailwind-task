import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Clouser() {
  return (
    <Carousel>
      
      <Carousel.Item>
        <div style={{
          width: '100%',
          height: '400px',
          backgroundImage: `url(Image/1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}></div>
          <Carousel.Caption className='text-start' style={{ position: 'absolute', top: '20%', left: '10%', width: '80%',height: '60%', zIndex: 1 }}>
            <h1 style={{ fontSize: '36px' }}>Third Slide Label</h1>
            <p className='mb-3'>
              Praesent commodo cursus magna, <br/>vel scelerisque nisl consectetur.
            </p>
            <Button variant="warning" className="mt-8">Learn More</Button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

    
      <Carousel.Item>
        <div style={{
          width: '100%',
          height: '400px',
          backgroundImage: `url(Image/1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}></div>
          <Carousel.Caption className='text-start' style={{ position: 'absolute', top: '20%', left: '10%', width: '80%', height: '60%', zIndex: 1 }}>
            <h1 style={{ fontSize: '36px' }}>Third Slide Label</h1>
            <p>
              Praesent commodo cursus magna,<br/> vel scelerisque nisl consectetur.
            </p>
            <Button variant="warning" className="mt-8">Learn More</Button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

     
      <Carousel.Item>
        <div style={{
          width: '100%',
          height: '400px',
          backgroundImage: `url(Image/1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}></div>
          <Carousel.Caption className='text-start' style={{ position: 'absolute', top: '20%', left: '10%', width: '80%', height: '60%', zIndex: 1 }}>
            <h1 style={{ fontSize: '36px' }}>Third Slide Label</h1>
            <p>
              Praesent commodo cursus magna,<br/> vel scelerisque nisl consectetur.
            </p>
            <Button variant="warning" className="mt-8">Learn More</Button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Clouser;