import * as React from 'react';
import { DefaultCreateModal } from '../modals/defaultCreateModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

export interface ICreateProductModalProps {
  onHide: () => void;
  show: boolean;
}

export function CreateProductModal(props: ICreateProductModalProps) {
  return (
    <DefaultCreateModal
      show={props.show}
      onHide={props.onHide}
      title='Create slide'
    >
      <Form>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">NAME</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">DESCRIPTION</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">PRICE</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">PRODUCT SLUG</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">SIZETABLE</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </Form>
    </DefaultCreateModal>
  );
}
