import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Imported Images for Specialized Services
import periodic from '../assets/periodic.png';
import ac from '../assets/ac.png';
import battery from '../assets/battery.png';
import tyre from '../assets/tyre.png';
import dent from '../assets/dent.png';
import detail from '../assets/detail.png';
import spa from '../assets/spa.png';
import inspection from '../assets/inspection.png';

const Services = () => {
  const darkOrange = '#e65100';

  // Section 2 Services
  const coreServices = [
    { title: 'Brake Repair', desc: 'Complete brake inspection and repair services.', icon: '🛞' },
    { title: 'Transmission Repair', desc: 'Fix gear shifting and transmission issues.', icon: '⚙️' },
    { title: 'Check Engine Light Diagnostic', desc: 'Get your engine issues diagnosed quickly.', icon: '🔍' },
    { title: 'Lube, Oil & Filter Change', desc: 'Fast oil and filter change service.', icon: '🛢️' },
    { title: 'Preventative Maintenance', desc: 'Keep your car in great shape always.', icon: '🧰' },
    { title: 'Suspension Repair', desc: 'Fix alignment and bumpy rides.', icon: '🔧' },
  ];

  // Section 3 Feature Grid
  const specializedServices = [
    { name: 'Periodic Services', image: periodic },
    { name: 'AC Service & Repair', image: ac },
    { name: 'Batteries', image: battery },
    { name: 'Tyres & Wheel Care', image: tyre },
    { name: 'Denting & Painting', image: dent },
    { name: 'Detailing Services', image: detail },
    { name: 'Car Spa & Cleaning', image: spa },
    { name: 'Car Inspections', image: inspection },
  ];

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>

{/* SECTION 1 */}
<Container className="my-5 d-flex flex-column align-items-center text-center">
  <h1 className="fw-bold mb-3" style={{ color: '#e65100', fontSize: '3rem' }}>
    Main Services
  </h1>
  <h4 className="fw-semibold mb-2" style={{ color: '#e65100' }}>
    Skilled Mechanics Who Love Cars
  </h4>
  <p className="text-muted" style={{ maxWidth: '600px' }}>
    From preventive care to full-scale repairs — we do it all with a passion for performance.
  </p>
</Container>



        {/* SECTION 2 */}
        <Container fluid className="py-5" style={{ backgroundColor: '#ea580c' }}>
          <Container>
            <Row className="g-4">
              {coreServices.map((service, idx) => (
                <Col md={4} sm={6} key={idx}>
                  <Card
                    className="h-100 shadow service-card border-0 text-center"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <Card.Body>
                      <h4 style={{ color: '#ea580c' }}>{service.icon} {service.title}</h4>
                      <p style={{ color: '#ea580c' }}>{service.desc}</p>
                      <span style={{ color: '#ea580c', fontWeight: 'bold' }}>→ View Service Offers</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>

{/* SECTION 3 - More Specialized Services */}
{/* SECTION 3 - More Specialized Services */}
<Container className="my-5">
  <h2 className="text-center mb-5 fw-bold" style={{ color: '#333' }}>
    More Specialized Services
  </h2>
  <Row className="g-4 justify-content-center">
    {specializedServices.slice(0, 6).map((service, index) => (
      <Col key={index} md={4} sm={6} className="d-flex justify-content-center">
        <Card
          className="shadow text-center"
          style={{
            width: '216px',
            height: '216px',
            border: '2px solid #ea580c',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <img
              src={service.image}
              alt={service.name}
              style={{ width: '150px', height: '150px', objectFit: 'contain', marginBottom: '10px' }}
            />
            <Card.Title style={{ fontSize: '1rem', color: '#333' }}>{service.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>





        <Footer />

        {/* Hover Animations */}
        <style>{`
          .service-card:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 20px rgba(255, 102, 0, 0.4);
            transition: all 0.3s ease;
          }
          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
          }
        `}</style>
      </div>
    </>
  );
};

export default Services;
