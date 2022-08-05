import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { VMCard } from '../card/VMCard'; 

export interface IProductGridProps {
}

export function ProductGrid (props: IProductGridProps) {
  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col className='.center-block d-flex justify-content-center px-1 my-2' xs={6} sm={6} md={4} lg={3} style={{maxWidth: "300px", }}>
          <VMCard/>
        </Col>
        <Col className='.center-block d-flex justify-content-center px-1 my-2' xs={6} sm={6} md={4} lg={3} style={{maxWidth: "300px"}}>
          <VMCard/>
        </Col>
        <Col className='.center-block d-flex justify-content-center px-1 my-2' xs={6} sm={6} md={4} lg={3} style={{maxWidth: "300px"}}>
          <VMCard/>
        </Col>
        <Col className='.center-block d-flex justify-content-center px-1 my-2' xs={6} sm={6} md={4} lg={3} style={{maxWidth: "300px"}}>
          <VMCard/>
        </Col>
        <Col className='.center-block d-flex justify-content-center px-1 my-2' xs={6} sm={6} md={4} lg={3} style={{maxWidth: "300px"}}>
          <VMCard/>
        </Col>
      </Row>
    </Container>
  );
}
