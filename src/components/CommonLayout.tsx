import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Col, Container, Row } from 'react-bootstrap';

interface CommonLayoutProps {
  children: React.ReactNode;
}

export const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col xs={10}>
            <div className="m-4">{children}</div>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
