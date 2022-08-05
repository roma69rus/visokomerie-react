import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export interface IVMCardProps {
}

export function VMCard (props: IVMCardProps) {
  return (
    <Card style={{maxHeight: "680px", border: 0 }}>
      <Card.Img 
        variant="top" src="./1_black_palaco.jpg" 
        // style={{maxHeight: "280px"}}
      />
      <Card.Body style={{}}>
        <Card.Text className='text-center mb-3'> ПАЛАЦО </Card.Text>
        <Card.Title className='text-center font-weight-bold text-uppercase mb-3'>BLUE</Card.Title>
        <Card.Text className='text-center'> 7000 </Card.Text>
      </Card.Body>
    </Card>
  );
}
