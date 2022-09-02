import * as React from 'react';
import { DefaultCreateModal } from '../modals/defaultCreateModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { ICategory } from '../../../types/categoryTypes';
import { Context, IContext } from '../../..';
import { IProduct } from '../../../types/productTypes';
import { createRel } from '../../../http/productAPI';

export interface ICreatePTCModalProps {
  onHide: () => void;
  show: boolean;
}

export function CreatePTCModal(props: ICreatePTCModalProps) {

  const [newCat, setNewCat] = React.useState<ICategory>()
  const { productData } = React.useContext(Context) as IContext

  React.useEffect(() => {
    // console.log(newCat)
  }, [newCat])


  return (
    <DefaultCreateModal
      show={props.show}
      onHide={props.onHide}
      title='Create slide'
      onSave={() => {
        createRel(productData?.productWithOptions?.id as number, newCat?.id as number)
        props.onHide()
      }}

    >
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className='mb-3'>
          {newCat ? <div>{newCat.name}</div> : <div>Выберите категрию</div>}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {productData.categories.map((i) => { 
            return (
              <Dropdown.Item
                key={i.id}
                onClick={() => {
                  setNewCat(i)
                }}
              >{i.name}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
      {/* <Button
        variant="success"
        type="submit"
        onClick={() => props.addCat(newCat as ICategory)}
      >
        Сохранить
      </Button> */}
    </DefaultCreateModal>
  );
}
