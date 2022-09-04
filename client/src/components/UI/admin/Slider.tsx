import * as React from 'react';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { CreateSliderModal } from './CreateSliderModal';
import { deleteSlide, getSlider, updateSlide } from '../../../http/sliderAPI';
import { ISlider } from '../../../types/sliderTypes';


export interface IAdmSliderProps {
}

export function AdmSlider(props: IAdmSliderProps) {

  const { sliderData } = React.useContext(Context) as IContext
  const [editedSlider, setEditedSlider] = React.useState<ISlider>()
  const [file, setFile] = React.useState<File>()
  const [isLoading, setIsLoading] = React.useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  const updateSlides = async () => {
    const formData = new FormData()
    formData.append('id', editedSlider!.id.toString() as unknown as string)
    formData.append('slide_order', editedSlider!.slide_order?.toString() as string)
    formData.append('btn_text', editedSlider!.btn_text as string)
    formData.append('isVideo', editedSlider!.isVideo?.toString() as string)
    formData.append('url', editedSlider!.url as string)
    formData.append('image', file as File)
    return await updateSlide(formData)
  }

  const setFilesHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      setFile(evt.target.files[0] as unknown as File); //error
      console.log("evt.target.files", evt.target.files[0])
      console.log("files", file)
    }
  };

  return (
    <div>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
          Создать слайд
        </Button>
      </div>
      {!isLoading && (sliderData.slider || []).map((slide) => {
        return (
          <Row className='mt-4' key={slide.id}>
            <Col md={2} className="d-flex justify-content-center">
              {!isLoading ?
                <Image src={process.env.REACT_APP_API_URL + '/' + (slide.img_path)} style={{ maxWidth: "100%", width: "auto", height: '200px', objectFit: "cover" }} />
                : <div>Loading...</div>
              }
            </Col>
            <Col md={6}>
              <Form>
                <Form.Check
                  disabled//={slide.id === editedSlider?.id ? false : true}
                  type="switch"
                  id="custom-switch"
                  label="IsVideo"
                  defaultChecked={slide.isVideo || false}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    slide.isVideo = event.target.checked
                  }}
                />
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Control type="file" size="sm"
                    disabled={slide.id === editedSlider?.id ? false : true}
                    onChange={setFilesHandler}
                  />
                </Form.Group>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">URL</InputGroup.Text>
                  <Form.Control
                    disabled={slide.id === editedSlider?.id ? false : true}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={slide.url as string}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      slide.url = event.target.value
                    }}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">BUTTON TEXT</InputGroup.Text>
                  <Form.Control
                    disabled={slide.id === editedSlider?.id ? false : true}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={slide.btn_text as string}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      slide.btn_text = event.target.value
                    }}
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                  <InputGroup.Text id="inputGroup-sizing-sm">ORDER</InputGroup.Text>
                  <Form.Control
                    disabled={slide.id === editedSlider?.id ? false : true}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={slide.slide_order?.toString()}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      slide.slide_order = Number(event.target.value)
                    }}
                  />
                </InputGroup>
                <Button
                  disabled={slide.id === editedSlider?.id ? false : true}
                  variant="success"
                  type="button"
                  className='mb-2'
                  onClick={() => {
                    setIsLoading(true)
                    setEditedSlider({ ...editedSlider, id: 0 } as ISlider)
                    updateSlides().then((data) => {
                      if (slide && data) {
                        slide.img_path = data.img_path
                      }

                      setIsLoading(false)
                    })
                  }}
                >
                  Сохранить
                </Button>
                <Button
                  disabled={slide.id === editedSlider?.id ? true : false}
                  variant="primary"
                  type="button"
                  className='mb-2 ms-2'
                  onClick={() => {
                    setEditedSlider(slide)
                  }}
                >
                  Редактировать
                </Button>
                <Button variant="outline-danger" className='mb-2 ms-2'
                  disabled={slide.id === editedSlider?.id ? false : true}
                  onClick={() => {
                    setIsLoading(true)
                    deleteSlide(slide.id)
                    const index = sliderData.slider.indexOf(slide);
                    if (index > -1) {
                      sliderData.setSlider(sliderData.slider.splice(index, 1))
                    }
                    console.log("index", index)
                    setIsLoading(false)

                  }}
                >
                  Удалить
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