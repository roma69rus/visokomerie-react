import * as React from 'react';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { IProduct } from '../../../store/ProductStore';
import { CreateProductModal } from './CreateProductModal';
import { getAllProducts } from '../../../http/productAPI';


export interface IAdmProductProps {
}

export function AdmProduct(props: IAdmProductProps) {

  const { productData } = React.useContext(Context) as IContext

  const [modalShow, setModalShow] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    getAllProducts().then((data) => {
      setIsLoading(true);
      productData.setAllProducts(data)
    }).finally(()=>{
      setIsLoading(false)
    })


  }, [])


  return (
    <div>
      {isLoading ? <h2>Идет загрузка</h2>
      :productData.allProducts.map((prod: IProduct) => {
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
                    onChange = {()=> {}}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">DESCRIPTION</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={prod.description as string}
                    onChange = {()=> {}}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">PRICE</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value = {prod.price}
                    onChange = {()=> {}}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">PRODUCT SLUG</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value = {prod.product_slug}
                    onChange = {()=> {}}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">SIZETABLE</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value = {prod.sizetable_path as string}
                    onChange = {()=> {}}
                  />
                </InputGroup>
                <Button variant="success" type="submit" className='mb-2'>
                  Сохранить
                </Button>
              </Form>
            </Col>
            <hr />
          </Row>
        )
      })
      }
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
          Создать продукт
        </Button>
      </div>
      
      <CreateProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}