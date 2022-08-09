import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ICategory, IProduct, IProductOptions, IProductOptionsImages } from '../../../store/ProductStore';

export interface IVMCardProps {
  product_id: number,
  name: string,
  // product_description: string | null,
  price: number,
  product_slug: string,
  // sizetable_path: string | null,
  // ProductOptions: Array<IProductOptions>

  product_option_id: number;
  product_option_description: string | null;
  product_color: string;
  price_increase: number;
  // po_order: number | null;
  options_slug: string;
  // ProductId: number;
  ProductOptionsImages: Array<IProductOptionsImages | null>
}

export function VMCard (prop: IVMCardProps) {
  
  let mainImg: string = ''
  if (prop.ProductOptionsImages)
  {
    mainImg = prop.ProductOptionsImages.filter((img) => img?.main_image === true)[0]?.img_path as string
  }


  // mainImg = prodOpt.ProductOptionsImages.filter((img) => img?.main_image === true)[0]?.img_path 
  
  return (
    <Card style={{maxHeight: "680px", border: 0 }}>
      <Card.Img 
        // variant="top" src={process.env.REACT_APP_API_URL + '/' + mainImg} 
        variant="top" src={mainImg} 
      />
      <Card.Body style={{}}>
        <Card.Text className='text-center mb-3'>{prop.name}</Card.Text>
        <Card.Title className='text-center font-weight-bold text-uppercase mb-3'>{prop.product_color as string}</Card.Title>
        <Card.Text className='text-center'>{prop.price + prop.price_increase}</Card.Text>
      </Card.Body>
    </Card>
  );
}
