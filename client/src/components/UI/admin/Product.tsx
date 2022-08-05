import * as React from 'react';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { IProduct } from '../../../store/ProductStore';
import { CreateProductModal } from './CreateProductModal';


export interface IAdmProductProps {
}

export function AdmProduct(props: IAdmProductProps) {

  const { product } = React.useContext(Context) as IContext
  const inputs: Array<IProduct> | null = JSON.parse(JSON.stringify(product.product))
  console.log(inputs);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
          Создать продукт
        </Button>
      </div>
      {inputs?.map((prod) => {
        return (
          <Row className='mt-4' key={prod.id}>
            <Col md={9}>
              <Form>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">NAME</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={prod.name}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">DESCRIPTION</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={prod.description as string}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">PRICE</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value = {prod.price}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">PRODUCT SLUG</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value = {prod.product_slug}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">SIZETABLE</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value = {prod.sizetable_path as string}
                  />
                </InputGroup>
              </Form>
            </Col>
            <hr />
          </Row>
        )
      })}
      <CreateProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}