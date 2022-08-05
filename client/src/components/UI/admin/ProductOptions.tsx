import * as React from 'react';
import { ISlider } from '../../../store/SliderStore';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { CreateSliderModal } from './CreateSliderModal';
import { IProduct, IProductOptions, IProductOptionsImages } from '../../../store/ProductStore';


export interface IAdmProductOptions {
}

export function AdmProductOptions(props: IAdmProductOptions) {

  const { product } = React.useContext(Context) as IContext
  const prod: IProduct = JSON.parse(JSON.stringify(product.product[0]))
  const inputs: Array<IProductOptions> = prod.ProductOptions as Array<IProductOptions>;
  console.log(inputs);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
          Создать слайд
        </Button>
      </div>
      {inputs?.map((po) => {
        return (
          <Row className='mt-4' key={po.id}>
            <Col md={6}>
              <Form>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">COLOR</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={po.product_color as string}
                  />
                </InputGroup>

                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={po.description as string}
                  />
                </InputGroup>

                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">PRICE INCREASE</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={po.price_increase}
                  />
                </InputGroup>

                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">OPTION SLUG</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={po.options_slug}
                  />
                </InputGroup>

                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">OPTION ORDER</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={po.po_order as number}
                  />
                </InputGroup>
              </Form>
            </Col>
            {(po.ProductOptionsImages as IProductOptionsImages[]).map((item) => {
              return (
                <Row className='mt-4'>
                  <Col md={2} className="d-flex justify-content-center">
                    <Image src={item.img_path} style={{ maxWidth: "100%", width: "auto", height: '200px', objectFit: "cover" }} />
                  </Col>
                  <Col md={4} className="d-flex justify-content-center flex-column">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Main Image"
                      checked={item.main_image || false}
                    />
                    <Form.Group controlId="formFileSm" className="mb-3">
                      <Form.Control type="file" size="sm" multiple />
                    </Form.Group>
                  </Col>
                </Row>
              )
            })}
            <hr />
          </Row>
        )
      })}
      <CreateSliderModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}