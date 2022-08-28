import * as React from 'react';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { CreateSliderModal } from './CreateSliderModal';
import { getSlider } from '../../../http/sliderAPI';


export interface IAdmSliderProps {
}

export function AdmSlider(props: IAdmSliderProps) {

  const { sliderData } = React.useContext(Context) as IContext



  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
          Создать слайд
        </Button>
      </div>
      {(sliderData.slider || []).map((slide) => {
        return (
          <Row className='mt-4' key={slide.id}>
            <Col md={2} className="d-flex justify-content-center">
              <Image src={process.env.REACT_APP_API_URL + '/' + slide.img_path} style={{ maxWidth: "100%", width: "auto", height: '200px', objectFit: "cover" }} />
            </Col>
            <Col md={6}>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="IsVideo"
                  checked={slide.isVideo || false}
                  onChange = {()=> {}}
                  onClick = {()=>{}}
                />
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Control type="file" size="sm" />
                </Form.Group>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">URL</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={slide.url as string}
                    onChange = {()=> {}}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">BUTTON TEXT</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={slide.btn_text as string}
                    onChange = {()=> {}}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">ORDER</InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={slide.btn_text as string} 
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
      })}
      <CreateSliderModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}