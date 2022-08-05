import * as React from 'react';
import { observer } from 'mobx-react-lite'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Context } from '../../..';

export interface IAdmTypeBarProps {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

export const AdmTypeBar = observer((props: IAdmTypeBarProps) => {
  
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

    </div>
  );
})
