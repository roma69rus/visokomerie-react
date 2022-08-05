import * as React from 'react';
import { DefaultCreateModal } from '../modals/defaultCreateModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { ICategory } from '../../../store/ProductStore';

export interface ICreatePTCModalProps {
  onHide: () => void;
  show: boolean;
  cats: ICategory[]
  addCat: (cat: ICategory) => void;
  prodCategories: ICategory[];
}

export function CreatePTCModal(props: ICreatePTCModalProps) {

  const [newCat, setNewCat] = React.useState<ICategory | null>(null)
  
  React.useEffect(() => {
    // console.log(newCat)
  }, [newCat]) 

  return (
    <DefaultCreateModal
      show={props.show}
      onHide={props.onHide}
      title='Create slide'
    >
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className='mb-3'>
          Выберите продукт
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.cats.map((i) => {
            return (
              <Dropdown.Item
                key={i.id}
                // onClick={() => setNewCat(i)}
                onClick={()=> {
                  // props.addCat(i as ICategory)
                  setNewCat(i)
                  
                }}
              >{i.name}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Button
        variant="success"
        type="submit"
        onClick={()=> props.addCat(newCat as ICategory)}
        >
        Сохранить
      </Button>
    </DefaultCreateModal>
  );
}
