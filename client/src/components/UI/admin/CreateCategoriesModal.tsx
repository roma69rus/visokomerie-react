import * as React from 'react';
import { DefaultCreateModal } from '../modals/defaultCreateModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { ICategory } from '../../../types/categoryTypes';
import { createCategory } from '../../../http/productAPI';
import { Context, IContext } from '../../..';

export interface ICreateCategoriesModalProps {
  onHide: () => void;
  show: boolean;
}

export function CreateCategoriesModal(props: ICreateCategoriesModalProps) {
  const { productData } = React.useContext(Context) as IContext
  const [cat, setCat] = React.useState<ICategory>({
    "id": 0,
    "name": "",
    "description": "",
    "category_slug": "",
    "category_order": 0,
  })

  const createCat = async () => {
    createCategory(cat).then((data) => {
      productData.setCategories([...productData.categories.concat(data)])
      setCat({
        "id": 0,
        "name": "",
        "description": "",
        "category_slug": "",
        "category_order": 0,
      })
      props.onHide()
    })
    
  }

  return (
    <DefaultCreateModal
      show={props.show}
      onHide={props.onHide}
      title='Create slide'
      onSave={createCat}

    >
      <Form>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">NAME</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCat({...cat, name: event.target.value})
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCat({...cat, description: event.target.value})
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">Category SLUG</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCat({...cat, category_slug: event.target.value})
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">Category order</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCat({...cat, category_order: Number(event.target.value)})
            }}
          />
        </InputGroup>
      </Form>
    </DefaultCreateModal>
  );
}
