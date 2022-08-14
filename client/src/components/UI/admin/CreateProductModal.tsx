import * as React from 'react';
import { DefaultCreateModal } from '../modals/defaultCreateModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { createProduct, IProductCreate } from '../../../http/productAPI';
import { useState } from 'react';

export interface ICreateProductModalProps {
  onHide: () => void;
  show: boolean;
}

export function CreateProductModal(props: ICreateProductModalProps) {

  const [name, setName] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [price, setPrice] = useState<number | null>(null)
  const [product_slug, setProduct_slug] = useState<string>('')
  const [sizetable, setSizetable] = useState<string>('')
  const [categoryId, setCategoryId] = useState<number | null>(null)


  const addProduct = () => {
    createProduct({ name: name, description: desc, price: price as number, product_slug: product_slug, sizetable_path: sizetable, categoryId: categoryId as number }).then((data) => {
      setName('')
      setDesc('')
      setPrice(null)
      setProduct_slug('')
      setSizetable('')
      setCategoryId(null)
      props.onHide()
    })
  }

  return (
    <DefaultCreateModal
      show={props.show}
      onHide={props.onHide}
      title='Create slide'
      onSave={addProduct}
    >
      <Form>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">NAME</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">DESCRIPTION</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">PRICE</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={price as number}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">PRODUCT SLUG</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={product_slug}
            onChange={(e) => setProduct_slug(e.target.value)}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">SIZETABLE</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={sizetable}
            onChange={(e) => setSizetable(e.target.value)}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">CategoryId</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={categoryId as number}
            onChange={(e) => setCategoryId(Number(e.target.value))}
          />
        </InputGroup>
      </Form>
    </DefaultCreateModal>
  );
}
