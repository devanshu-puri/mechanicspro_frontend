import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInfoCircle, FaHandPointer, FaCheckCircle } from 'react-icons/fa';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import service4 from'../assets/service4.jpg';

const ChooseUs = () => {
  return (
    <div className="container-fluid px-0">
      {/* Why Choose Us */}
      <div style={{ backgroundColor: '#F36D1D' }} className="text-white text-center py-5">
        <h3 className="mb-4 fw-bold">Why Choose Us?</h3>
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          <div className="card border-0" style={{ width: '150px', background: 'transparent' }}>
            <img src={service1} className="card-img-top rounded" alt="Skilled Mechanics" />
            <div className="card-body p-0 mt-2">
              <p className="card-text fw-semibold">Skilled Mechanics</p>
            </div>
          </div>

          <div className="card border-0" style={{ width: '150px', background: 'transparent' }}>
            <img src={service2} className="card-img-top rounded" alt="Satisfied Customers" />
            <div className="card-body p-0 mt-2">
              <p className="card-text fw-semibold">300+ Satisfied Customers</p>
            </div>
          </div>

          <div className="card border-0" style={{ width: '150px', background: 'transparent' }}>
            <img src={service3} className="card-img-top rounded" alt="Years of Experience" />
            <div className="card-body p-0 mt-2">
              <p className="card-text fw-semibold">8+ Years of Experience</p>
            </div>
          </div>

          <div className="card border-0" style={{ width: '150px', background: 'transparent' }}>
            <img src={service4} className="card-img-top rounded" alt="Quality Work" />
            <div className="card-body p-0 mt-2">
              <p className="card-text fw-semibold">Best Quality in Work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Steps to Order Services */}
      <div className="text-center py-5">
        <h4 className="mb-5 fw-bold">Steps to Order Services from us.</h4>
        <div className="container">
          <div className="row gy-4">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-start p-3 bg-light rounded shadow-sm">
                <div className="bg-warning text-white fw-bold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                  01
                </div>
                <div className="ms-3 text-start">
                  <h6 className="mb-1 fw-semibold">Provide vehicle details and service information.</h6>
                </div>
                <div className="ms-auto text-primary fs-4">
                  <FaInfoCircle />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex align-items-center justify-content-start p-3 bg-light rounded shadow-sm">
                <div className="bg-warning text-white fw-bold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                  02
                </div>
                <div className="ms-3 text-start">
                  <h6 className="mb-1 fw-semibold">Choose your preferred Garage.</h6>
                </div>
                <div className="ms-auto text-warning fs-4">
                  <FaHandPointer />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex align-items-center justify-content-start p-3 bg-light rounded shadow-sm">
                <div className="bg-warning text-white fw-bold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                  03
                </div>
                <div className="ms-3 text-start">
                  <h6 className="mb-1 fw-semibold">Review details and confirm your slot.</h6>
                </div>
                <div className="ms-auto text-success fs-4">
                  <FaCheckCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
