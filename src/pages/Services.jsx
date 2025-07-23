import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
<<<<<<< HEAD
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
=======
import Header from '../components/Header';
import Footer from '../components/Footer';

const serviceCards = [
  { title: 'Brake Repair', desc: 'Complete brake inspection and repair services.', icon: '🛞' },
  { title: 'Transmission Repair', desc: 'Fix gear shifting and transmission issues.', icon: '⚙️' },
  { title: 'Check Engine Light Diagnostic', desc: 'Get your engine issues diagnosed quickly.', icon: '🔍' },
  { title: 'Lube, Oil & Filter Change', desc: 'Fast oil and filter change service.', icon: '🛢️' },
  { title: 'Preventative Maintenance', desc: 'Keep your car in great shape always.', icon: '🧰' },
  { title: 'Suspension Repair', desc: 'Fix alignment and bumpy rides.', icon: '🔧' },
];

const featureGrid = [
  'Periodic Services',
  'AC Service & Repair',
  'Batteries',
  'Tyres & Wheel Care',
  'Denting & Painting',
  'Detailing Services',
  'Car Spa & Cleaning',
  'Car Inspections',
  'Windshields & Lights',
  'Suspension & Fitments',
  'Clutch & Body Parts',
  'Insurance Claims',
];

const additionalServices = [
  { title: 'Body Repairs', icon: '🚗' },
  { title: 'Radiators & Water Pumps', icon: '💧' },
  { title: 'Air Conditioning Systems', icon: '❄️' },
  { title: 'Hydraulics', icon: '🛠️' },
  { title: 'Engine Repair', icon: '🔩' },
  { title: 'Tinting', icon: '🪟' },
];
>>>>>>> f390404e8bfa606436d2b317729391df70e3f716

const Services = () => {
  const darkOrange = '#e65100';

<<<<<<< HEAD
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
=======
  return (
    <>
    <Header />
      {/* Top Section */}
      <Container className="my-5">
        <div className="text-center">
          <h6 className="text-uppercase" style={{ color: darkOrange }}>Skilled Mechanics Who Love Cars</h6>
          <h2 className="fw-bold" style={{ color: darkOrange }}>Our Services</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et erat, condimentum in.</p>
        </div>

        {/* Middle White Grid */}
        <Row className="g-4 mt-4">
          {serviceCards.map((service, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h4 style={{ color: darkOrange }}>{service.icon} {service.title}</h4>
                  <Card.Text>{service.desc}</Card.Text>
                  <span style={{ color: darkOrange, fontWeight: 'bold' }}>→ View Service Offers</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Icon Feature Grid */}
        <Row className="g-3 mt-5">
          {featureGrid.map((item, idx) => (
            <Col key={idx} xs={6} sm={4} md={3}>
              <Card className="text-center border-0 shadow-sm p-3">
                <Card.Body>
                  <div style={{ fontSize: '1.5rem' }}>🛠️</div>
                  <Card.Text className="mt-2 fw-semibold">{item}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Bottom Orange Section */}
      <div style={{ backgroundColor: darkOrange, color: 'white' }} className="py-5">
        <Container>
          <Row className="g-4">
            {additionalServices.map((service, idx) => (
              <Col md={4} sm={6} key={idx}>
                <div>
                  <h5 className="fw-bold">{service.icon} {service.title}</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
                  <span style={{ fontWeight: 'bold' }}>→ View Service Offers</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer/>
>>>>>>> f390404e8bfa606436d2b317729391df70e3f716
    </>
  );
};

export default Services;
