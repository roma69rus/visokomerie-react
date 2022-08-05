import * as React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { CATALOG_ROUTE } from '../../../utils/consts';
import { Context, IContext } from '../../..';
import { ListGroup } from 'react-bootstrap';
import { ICategory, IProduct, IProductStore } from '../../../store/ProductStore';

export interface IVMCategoryProps {
}

export function VMCategory(props: IVMCategoryProps) {
  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    setTimeout(() => navigate(path), 400)
  };

  const { productData } = React.useContext(Context) as IContext
  
  const categories: ICategory[] = [...JSON.parse(JSON.stringify(productData.categories))]
  console.log("categories", categories)

  return (
    <Dropdown text='Каталог' pointing className='link item' style={{ color: "white", marginRight: "10px" }}>
      <Dropdown.Menu>
        {/* <Dropdown.Header className='dropdown__header' style={{height: "auto"}}>Категории</Dropdown.Header> */}
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigateTo(CATALOG_ROUTE)}>Все категории</Dropdown.Item>
        <Dropdown.Divider />
        {categories.map((cat) => {
          return (
            <Dropdown.Item 
              key={cat.id}
              // value={cat.name}
            >
              {cat.name}
            </Dropdown.Item>
          )
        })} 
        {/* <Dropdown.Item>Брюки</Dropdown.Item>
        <Dropdown.Item>Рубашки</Dropdown.Item>
        <Dropdown.Item>Костюмы</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}
