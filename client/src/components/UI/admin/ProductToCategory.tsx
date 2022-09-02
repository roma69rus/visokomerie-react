import * as React from 'react';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { CreatePTCModal } from './CreatePTCModal';
import { deleteRel, getAllProducts, getOptionsByProductName } from '../../../http/productAPI';
import { ICategory } from '../../../types/categoryTypes';
import { IProduct } from '../../../types/productTypes';


export interface IAdmProductToCategory {
}

export function AdmProductToCategory(props: IAdmProductToCategory) {

  const { productData } = React.useContext(Context) as IContext

  const [productNameID, setProductNameID] = React.useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    getAllProducts().then((data) => {
      setIsLoading(true);
      productData.setAllProducts(data)
    }).finally(() => {
      setIsLoading(false)
    })


  }, [productNameID])

  return (
    <div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className='mb-3'>
          Выберите продукт
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {(productData.allProducts || []).map((i) => {
            return (
              <Dropdown.Item
                key={i.id}
                onClick={() => {
                  getOptionsByProductName(i.product_slug).then((data) => {
                    setIsLoading(true)
                    setProductNameID(i.id as number)
                    productData.setProductWithOptions(data)
                  }).finally(() => {
                    setIsLoading(false)
                  })
                }}
              >{i.name}
              </Dropdown.Item>
            )
          })}

        </Dropdown.Menu>
      </Dropdown>

      {!isLoading && productNameID
        ? <>
          <h2>{productData.productWithOptions?.name}</h2>

          {(productData?.productWithOptions?.Categories as ICategory[]).map((cat: ICategory) => {
            return (
              <Row className='mt-4' key={cat.id}>
                {!isLoading &&
                  <Col md={6}>
                    <Form>
                      <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                        <Form.Control
                          disabled
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                          defaultValue={(cat as ICategory).name}
                        />
                        <Button variant="danger" size="lg"
                          onClick={() => {
                            setIsLoading(true)
                            deleteRel(productData.productWithOptions?.id as number, cat.id as number).then((data) => {
                              const index = (productData?.productWithOptions?.Categories as ICategory[]).indexOf(cat) as number;
                              if (index > -1) {

                                (productData?.productWithOptions?.Categories as ICategory[]).splice(index, 1)
                              }
                              console.log("index", index)
                              setIsLoading(false)
                            })
                          }}
                        >
                          удалить
                        </Button>
                      </InputGroup>
                    </Form>
                  </Col>
                }
              </Row>
            )
          })}
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg"
              onClick={() => setModalShow(true)}
            >
              Добавить категорию
            </Button>
          </div>
          <CreatePTCModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
        : <h2> Выберете продукт</h2>
      }

    </div>
  )
}