import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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

const Services = () => {
  const darkOrange = '#e65100';

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
    </>
  );
};

export default Services;
