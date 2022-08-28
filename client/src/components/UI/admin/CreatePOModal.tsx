import * as React from 'react';
import { DefaultCreateModal } from '../modals/defaultCreateModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { createProductOption } from '../../../http/productAPI';

export interface ICreatePOModalProps {
  onHide: () => void;
  show: boolean;
  ProductId: number;
}

export function CreatePOModal(props: ICreatePOModalProps) {

  const [product_color, setProduct_color] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price_increase, setPrice_increase] = useState<number>(0)
  const [options_slug, setOptions_slug] = useState<string>('')
  // const [ProductId, setProductId] = useState<string>('')
  const [order, setOrder] = useState<number>(0)
  const [files, setFiles] = useState<File[]>([])

  const addProductOptions = () => {
    const formData = new FormData()
    formData.append('product_color', product_color)
    formData.append('options_slug', options_slug)
    formData.append('ProductId', props.ProductId.toString())
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i])
      
    }
    


    createProductOption(formData).then((data) => {
      console.log(data)
      setProduct_color('')
      setOptions_slug('')
      setFiles([])
      props.onHide()
    })


  }

  const setFilesHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files != null) {
      setFiles(evt.target.files as unknown as File[]); //error
      console.log("files", files)
      console.log("evt.target.files", evt.target.files)
    }

  };





  return (
    <DefaultCreateModal
      show={props.show}
      onHide={props.onHide}
      title='Create slide'
      onSave={addProductOptions}

    >
      <Form>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">COLOR</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={product_color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct_color(e.target.value)}
          />
        </InputGroup>

        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
          />
        </InputGroup>

        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">PRICE INCREASE</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={price_increase}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice_increase(Number(e.target.value))}
          />
        </InputGroup>

        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">OPTION SLUG</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={options_slug}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOptions_slug(e.target.value)}
          />
        </InputGroup>

        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">OPTION ORDER</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={order}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOrder(Number(e.target.value))}
          />
        </InputGroup>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Control
            type="file"
            size="sm"
            multiple
            onChange={setFilesHandler}
          />
        </Form.Group>
        {/* <Button variant="primary" type="submit">
                  Сохранить
                </Button> */}
      </Form>
    </DefaultCreateModal>
  );
}
