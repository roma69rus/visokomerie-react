import * as React from 'react';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { CreateSliderModal } from './CreateSliderModal';
import { ICategory } from '../../../types/categoryTypes';
import { deleteCategory, updateCategory } from '../../../http/productAPI';
import { CreateCategoriesModal } from './CreateCategoriesModal';


export interface IAdmCategoriesProps {
}

export function AdmCategories(props: IAdmCategoriesProps) {

  const { productData } = React.useContext(Context) as IContext
  const [editedCategory, setEditedCategory] = React.useState<ICategory>()
  const [isLoading, setIsLoading] = React.useState(false);


  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
          Создать новую категорию
        </Button>
      </div>
      {(productData.categories || []).map((cat) => {
        return (
          <Row className='mt-4' key={cat.id}>
            {!isLoading && <Col md={6}>
              <Form>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">NAME</InputGroup.Text>
                  <Form.Control
                    disabled={cat.id === editedCategory?.id ? false : true}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={cat.name as string}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      cat.name = event.target.value
                    }}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
                  <Form.Control
                    disabled={cat.id === editedCategory?.id ? false : true}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={cat.description as string}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      cat.description = event.target.value
                    }}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">Category SLUG</InputGroup.Text>
                  <Form.Control
                    disabled={cat.id === editedCategory?.id ? false : true}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={cat.category_slug as string}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      cat.category_slug = event.target.value
                    }}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">Category order</InputGroup.Text>
                  <Form.Control
                    disabled={cat.id === editedCategory?.id ? false : true}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={cat.category_order as number}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      cat.category_order = Number(event.target.value)
                    }}
                  />
                </InputGroup>
                <Button variant="success" type="button" className='mb-2'
                  disabled={cat.id === editedCategory?.id ? false : true}
                  onClick={() => {
                    setIsLoading(true)
                    setEditedCategory({ ...editedCategory, id: 0 } as ICategory)
                    console.log("CAT", cat)
                    updateCategory(cat).then((data) => {
                      setIsLoading(false)
                    })
                  }}
                >
                  Сохранить
                </Button>
                <Button
                  disabled={cat.id === editedCategory?.id ? true : false}
                  variant="primary"
                  type="button"
                  className='mb-2 ms-2'
                  onClick={() => {
                    setEditedCategory(cat)
                  }}
                >
                  Редактировать
                </Button>
                <Button variant="outline-danger" className='mb-2 ms-2'
                  disabled={cat.id === editedCategory?.id ? false : true}
                  onClick={() => {
                    setIsLoading(true)
                    deleteCategory(cat.id as number).then((data)=> {
                      const index = productData.categories.indexOf(cat);
                      if (index > -1) {
                        productData.setCategories(productData.categories.splice(index, 1)) 
                      }
                      console.log("index", index)
                      setIsLoading(false)
                    })                    
                  }}
                >
                  Удалить
                </Button>
              </Form>
            </Col>}
            <hr />
          </Row>
        )
      })}
      <CreateCategoriesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}