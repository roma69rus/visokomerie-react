import * as React from 'react';
import { Context, IContext } from '..';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';
import { ProductGrid } from '../components/UI/productGrid/ProductGrid';
import { getAllCategories, getOptionsByCategorySlug } from '../http/productAPI';
import { ICategory, ICategoryOptions, IProduct, IProductOptions } from '../store/ProductStore';

export interface ICatalogProps {
}


export function Catalog(props: ICatalogProps) {

  const [catsOptions, setCatsOptions] = React.useState<ICategoryOptions[]>([])

  const { productData } = React.useContext(Context) as IContext

  React.useEffect(() => {
    (async () => {
      setCatsOptions([])

      if (productData.categories.length === 0){
        const cats = await getAllCategories();
        productData.setCategories(cats)
        console.log("GET CATS")
      }
      

      productData.categories.map(async (cat) => {
        const data = await getOptionsByCategorySlug(cat.category_slug)
        setCatsOptions(catsOptions => [...catsOptions, { ...cat, ProductOptions: data }])
      })
    })();

  }, []);


  return (
    <div>
      <Header />
      {catsOptions.map(cat => {
        return (
          <div key={cat.id}>
            <h2 className='catalog__heading' style={{ textAlign: "center", marginTop: "50px" }}>{cat.name}</h2>
            <p className='catalog__text'>{cat.description}</p>
            <ProductGrid
              key={cat.id}
              productsOptions={cat.ProductOptions}
            />
          </div>
        )
      })}
      <VMFooter />
    </div>
  );
}
