import * as React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { CATALOG_ROUTE } from '../../../utils/consts';
import { Context, IContext } from '../../..';
import { ListGroup } from 'react-bootstrap';
import { ICategory, IProduct, IProductStore } from '../../../store/ProductStore';
import { getAllCategories } from '../../../http/productAPI';

export interface IVMCategoryProps {
}

export function VMCategory(props: IVMCategoryProps) {
  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    setTimeout(() => navigate(path), 400)
  };

  const { productData } = React.useContext(Context) as IContext


  // const cats = await getAllCategories();
  //       productData.setCategories(cats)
  React.useEffect(() => {
    (async () => {
      if (productData.categories.length === 0) {
        const cats = await getAllCategories()
        productData.setCategories(cats)
        console.log("GET CATS")
      }
    })()
  }, [])

  return (
    <Dropdown text='Каталог' pointing className='link item' style={{ color: "white", marginRight: "10px" }}>
      <Dropdown.Menu>
        {/* <Dropdown.Header className='dropdown__header' style={{height: "auto"}}>Категории</Dropdown.Header> */}
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigateTo(CATALOG_ROUTE)}>Все категории</Dropdown.Item>
        <Dropdown.Divider />
        {productData.categories.map((cat) => {
          return (
            <Dropdown.Item
              key={cat.id}
            // value={cat.name}
            >
              {cat.name}
            </Dropdown.Item>
          )
        })}        
      </Dropdown.Menu>
    </Dropdown>
  );
}
