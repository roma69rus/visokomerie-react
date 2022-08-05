import * as React from 'react';
import { ISlider } from '../../../store/SliderStore';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { CreateSliderModal } from './CreateSliderModal';
import { ICategory, IProduct, IProductOptions, IProductOptionsImages } from '../../../store/ProductStore';
import { CreatePOModal } from './CreatePOModal';
import Dropdown from 'react-bootstrap/Dropdown';
import { CreatePTCModal } from './CreatePTCModal';


export interface IAdmProductToCategory {
}

export function AdmProductToCategory(props: IAdmProductToCategory) {

  const { productData } = React.useContext(Context) as IContext
  const prods: IProduct[] = JSON.parse(JSON.stringify(productData.allProducts))
  const prod: IProduct = JSON.parse(JSON.stringify(productData.oneProductOption))
  const inputs: Array<ICategory> = prod.Categories as Array<ICategory>;
  const allCategories: ICategory[] = JSON.parse(JSON.stringify(productData.categories))
  console.log(inputs);

  const [productNameID, setProductNameID] = React.useState(0);
  const [prodCategories, setProdCategories] = React.useState<ICategory[]>(prod.Categories as ICategory[])  
  const [modalShow, setModalShow] = React.useState(false);

  const addProductCategory = (cat: ICategory) => {
    setProdCategories([...prodCategories, cat])
  }

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
                key={i.id}
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
            prodCategories = {prodCategories}
            cats={allCategories}
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