import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Context, IContext } from '..';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';
import { ProductGrid } from '../components/UI/productGrid/ProductGrid';
import { getAllCategories, getOneCategory, getOptionsByCategorySlug } from '../http/productAPI';
import { ICategoryOptions } from '../types/categoryTypes';

export interface ICatalogProps {
}


export const Catalog = observer((props: ICatalogProps) => {

  const [catsOptions, setCatsOptions] = React.useState<ICategoryOptions[]>([])

  const { catalog_slug } = useParams()

  const { productData } = React.useContext(Context) as IContext

  React.useEffect(() => {
    (async () => {
      setCatsOptions([])

      if (catalog_slug) {
        const cat = await getOneCategory(catalog_slug);
        productData.setCategory(cat)

        const data = await getOptionsByCategorySlug(cat.category_slug)
        setCatsOptions(catsOptions => [...catsOptions, { ...cat, ProductOptions: data }])

      } else {
        const cats = await getAllCategories();
        productData.setCategories(cats)

        productData.categories.map(async (cat) => {
          const data = await getOptionsByCategorySlug(cat.category_slug)
          setCatsOptions(catsOptions => [...catsOptions, { ...cat, ProductOptions: data }])
        })
      }

      console.log("GET CATS")



    })();

  }, []);


  return (
    <div>
      <Header color='BLACK'/>
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
})
