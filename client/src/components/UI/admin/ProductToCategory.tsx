import * as React from 'react';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { CreatePTCModal } from './CreatePTCModal';
import { getAllProducts, getOptionsByProductName } from '../../../http/productAPI';
import { ICategory } from '../../../types/categoryTypes';


export interface IAdmProductToCategory {
}

export function AdmProductToCategory(props: IAdmProductToCategory) {

  const { productData } = React.useContext(Context) as IContext

  const [productNameID, setProductNameID] = React.useState(0);
  const [prodCategories, setProdCategories] = React.useState<ICategory[]>([]) 
  const [modalShow, setModalShow] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const addProductCategory = (cat: ICategory) => {
    setProdCategories([...prodCategories, cat])
  }



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

                    setProdCategories(productData.productWithOptions?.Categories as ICategory[])

                    
                  }).finally(()=> {
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

          {prodCategories.map((cat: ICategory) => {  
            return (
              <Row className='mt-4' key={cat.id}>
                <Col md={6}>
                  <Form>
                    <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                      <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={(cat as ICategory).name}
                      />
                      <Button variant="danger" size="lg"
                      //  onClick={}
                      >
                        удалить
                      </Button>
                    </InputGroup>
                  </Form>
                </Col>
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
            prodCategories={prodCategories}
            cats={productData.categories}
            addCat={addProductCategory}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
        : <h2> Выберете продукт</h2>
      }

    </div>
  )
}