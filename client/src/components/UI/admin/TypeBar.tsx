import * as React from 'react';
import { observer } from 'mobx-react-lite'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Context } from '../../..';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../../utils/consts';

export interface IAdmTypeBarProps {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

export const AdmTypeBar = observer((props: IAdmTypeBarProps) => {
  const { userData } = useContext(Context) as any
  const navigate = useNavigate()
  return (
    <div>
      <ListGroup>
        <ListGroup.Item
          active={props.selectedItem === "Slider"}
          onClick={(event: any) => {
            props.setSelectedItem("Slider")
          }}
        >Slider
        </ListGroup.Item>
        <ListGroup.Item
          active={props.selectedItem === "Category"}
          onClick={(event: any) => {
            props.setSelectedItem("Category")
          }}
        >Category
        </ListGroup.Item>
        <ListGroup.Item
          active={props.selectedItem === "Product"}
          onClick={(event: any) => {
            props.setSelectedItem("Product")
          }}
        >Product
        </ListGroup.Item>
        <ListGroup.Item
          active={props.selectedItem === "PO"}
          onClick={(event: any) => {
            props.setSelectedItem("PO")
          }}
        >Product-Options
        </ListGroup.Item>
        <ListGroup.Item
          active={props.selectedItem === "PTC"}
          onClick={(event: any) => {
            props.setSelectedItem("PTC")
          }}
        >Product-To-Category
        </ListGroup.Item>
      </ListGroup>
      <Button
        variant="danger"
        style={{ marginTop: "30px", marginBottom: "30px" }}
        onClick={()=> {
          userData.setIsAuth(false)
          userData.setUser({})
          localStorage.removeItem('token')
          navigate(SHOP_ROUTE)
          console.log(userData)
        }}
      >Выйти
      </Button>
    </div>
  );
})
