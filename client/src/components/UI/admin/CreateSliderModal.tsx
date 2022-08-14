import * as React from 'react';
import { DefaultCreateModal } from '../modals/defaultCreateModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

export interface ICreateSliderModalProps {
  onHide: () => void;
  show: boolean;
}

export function CreateSliderModal(props: ICreateSliderModalProps) {
 
  const addProduct = () => {
    
  }
 
  return (
    <DefaultCreateModal
      show={props.show}
      onHide={props.onHide}
      title='Create slide'
      onSave={addProduct}
    >
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="IsVideo"
        />
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">URL</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">BUTTON TEXT</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">ORDER</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </Form>
    </DefaultCreateModal>
  );
}
