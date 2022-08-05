import * as React from 'react';
import { DefaultCreateModal } from '../modals/defaultCreateModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

export interface ICreateCategoriesModalProps {
  onHide: () => void;
  show: boolean;
}

export function CreateCategoriesModal(props: ICreateCategoriesModalProps) {
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
          <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"            
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">Category SLUG</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"            
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">Category order</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"            
          />
        </InputGroup>
      </Form>
    </DefaultCreateModal>
  );
}
