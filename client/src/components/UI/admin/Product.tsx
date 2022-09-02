import * as React from 'react';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { CreateProductModal } from './CreateProductModal';
import { deleteProduct, getAllProducts, updateProduct } from '../../../http/productAPI';
import { IProduct } from '../../../types/productTypes';


export interface IAdmProductProps {
}

export function AdmProduct(props: IAdmProductProps) {

  const { productData } = React.useContext(Context) as IContext

  const [modalShow, setModalShow] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true)
  const [editedProduct, setEditedProduct] = React.useState<IProduct>()


  React.useEffect(() => {
    getAllProducts().then((data) => {
      setIsLoading(true);
      productData.setAllProducts(data)
    }).finally(() => {
      setIsLoading(false)
    })

  }, [])


  return (
    <div>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
          Создать продукт
        </Button>
      </div>
      {isLoading ? <h2>Идет загрузка</h2>
        : productData.allProducts.map((prod: IProduct) => {
          return (
            <Row className='mt-4' key={prod.id}>
              <Col md={9}>
                <Form>
                  <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                    <InputGroup.Text id="inputGroup-sizing-sm">NAME</InputGroup.Text>
                    <Form.Control
                      disabled={prod.id === editedProduct?.id ? false : true}
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      defaultValue={prod.name}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        prod.name = event.target.value
                      }}
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                    <InputGroup.Text id="inputGroup-sizing-sm">DESCRIPTION</InputGroup.Text>
                    <Form.Control
                      disabled={prod.id === editedProduct?.id ? false : true}
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      defaultValue={prod.description as string}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        prod.description = event.target.value
                      }}
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                    <InputGroup.Text id="inputGroup-sizing-sm">PRICE</InputGroup.Text>
                    <Form.Control
                      disabled={prod.id === editedProduct?.id ? false : true}
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      defaultValue={prod.price}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        prod.price = Number(event.target.value)
                      }}
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                    <InputGroup.Text id="inputGroup-sizing-sm">PRODUCT SLUG</InputGroup.Text>
                    <Form.Control
                      disabled={prod.id === editedProduct?.id ? false : true}
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      defaultValue={prod.product_slug}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        prod.product_slug = event.target.value
                      }}
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                    <InputGroup.Text id="inputGroup-sizing-sm">SIZETABLE</InputGroup.Text>
                    <Form.Control
                      disabled={prod.id === editedProduct?.id ? false : true}
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      defaultValue={prod.sizetable_path as string}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        prod.sizetable_path = event.target.value
                      }}
                    />
                  </InputGroup>
                  <Button
                    disabled={prod.id === editedProduct?.id ? false : true}
                    variant="success"
                    type="button"
                    className='mb-2'
                    onClick={() => {
                      setEditedProduct({ ...editedProduct, id: 0 } as IProduct)
                      updateProduct(editedProduct!)

                    }}

                  >
                    Сохранить
                  </Button>
                  <Button
                    disabled={prod.id === editedProduct?.id ? true : false}
                    variant="primary"
                    type="button"
                    className='mb-2 ms-2'
                    onClick={() => {
                      setEditedProduct(prod)
                    }}
                  >
                    Редактировать
                  </Button>
                  <Button variant="outline-danger" className='mb-2 ms-2'
                  disabled={prod.id === editedProduct?.id ? false : true}
                  onClick={() => {
                    setIsLoading(true)
                    deleteProduct(prod.id as number).then((data)=> {
                      const index = productData.allProducts.indexOf(prod);
                      if (index > -1) {
                        productData.allProducts.splice(index, 1) 
                      }
                      console.log("index", index)
                      setIsLoading(false)
                    })                    
                  }}
                >
                  Удалить
                </Button>
                </Form>
              </Col>
              <hr />
            </Row>
          )
        })
      }


      <CreateProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}