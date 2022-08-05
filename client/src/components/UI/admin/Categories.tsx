import * as React from 'react';
import { ISlider } from '../../../store/SliderStore';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { CreateSliderModal } from './CreateSliderModal';
import { ICategory } from '../../../store/ProductStore';


export interface IAdmCategoriesProps {
}

export function AdmCategories(props: IAdmCategoriesProps) {

  const { productData } = React.useContext(Context) as IContext
  const inputs: Array<ICategory> | null = JSON.parse(JSON.stringify(productData.categories))
  console.log(inputs);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
          Создать новую категорию
        </Button>
      </div>
      {inputs?.map((cat) => {
        return (
          <Row className='mt-4' key={cat.id}>
            <Col md={6}>
              <Form>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">NAME</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={cat.name as string}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={cat.description as string}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">Category SLUG</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={cat.category_slug as string}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">Category order</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={cat.category_order as number}
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
      })}
      <CreateSliderModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}