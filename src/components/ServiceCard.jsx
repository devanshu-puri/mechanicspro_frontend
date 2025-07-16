import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ title, description }) => (
  <Card className="h-100 shadow-sm border-0">
    <Card.Body>
      <Card.Title className="fs-5 fw-bold text-primary">{title}</Card.Title>
      <Card.Text className="text-muted">{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default ServiceCard;
