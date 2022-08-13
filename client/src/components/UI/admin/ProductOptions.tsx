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
import { CreatePOModal } from './CreatePOModal';
import Dropdown from 'react-bootstrap/Dropdown';



export interface IAdmProductOptions {
}

export function AdmProductOptions(props: IAdmProductOptions) {

  const { productData } = React.useContext(Context) as IContext
  const prods: IProduct[] = JSON.parse(JSON.stringify(productData.allProducts))
  const prod: IProduct = JSON.parse(JSON.stringify(productData.productWithOneOption))
  const inputs: Array<IProductOptions> = prod.ProductOptions as Array<IProductOptions>;
  console.log(inputs);

  const [modalShow, setModalShow] = React.useState(false);
  const [productNameID, setProductNameID] = React.useState(0);

  return (
    <div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className='mb-3'>
          Выберите продукт
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {prods.map((i) => {
            return (
              <Dropdown.Item
                onClick={() => setProductNameID(i.id as number)}
              >{i.name}
              </Dropdown.Item>
            )
          })}

        </Dropdown.Menu>
      </Dropdown>

      {productNameID
        ? <>
          <h2>{prod.name}</h2>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
              Создать опцию
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
                    <Form.Group controlId="formFileSm" className="mb-3">
                      <Form.Control type="file" size="sm" multiple />
                    </Form.Group>
                    <Button variant="success" type="submit">
                      Сохранить
                    </Button>
                  </Form>
                </Col>

                <Row className='mt-4 d-flex flex-row'>
                  {(po.ProductOptionsImages as IProductOptionsImages[]).map((item) => {
                    return (
                      <Col md={3} className="d-flex flex-column justify-content-center">
                        <Image src={item.img_path} style={{ maxWidth: "100%", width: "auto", height: '200px', objectFit: "cover" }} />
                        <Form.Check
                          className='PO'
                          style={{ margin: "8px 0 8px 0" }}
                          type="switch"
                          id="custom-switch"
                          label="Main Image"
                          checked={item.main_image || false}
                        />
                      </Col>

                    )
                  })}
                </Row>
                <hr />
              </Row>
            )
          })}
          <CreatePOModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
        : <h2> Выберете продукт</h2>
      }

    </div>
  )
}