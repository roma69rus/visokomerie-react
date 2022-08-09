import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context, IContext } from '../../..';
import { IProduct, IProductOptions } from '../../../store/ProductStore';
import { VMCard } from '../card/VMCard';

export interface IProductGridProps {
}

export function ProductGrid(props: IProductGridProps) {
  const { productData } = React.useContext(Context) as IContext

  const mainPageProduct = JSON.parse(JSON.stringify(productData.allProducts))
  console.log("mainPageProduct", mainPageProduct)

  return (
    <Container>
      <Row className='d-flex justify-content-center'>

        {/* {mainPageProduct.map(({id, name, description, price, product_slug, sizetable_path, ProductOptions}: IProduct) => { */}
        {mainPageProduct.map((prod: IProduct) => {
          return (
            <div>
              {prod.ProductOptions.map((prodOpt) => {
                return (
                  <Col key={prodOpt.id} className='.center-block d-flex justify-content-center px-1 my-2' xs={6} sm={6} md={4} lg={3} style={{ maxWidth: "300px", }}>
                    <VMCard
                      product_id={prod.id}
                      name={prod.name}
                      price={prod.price}
                      product_slug={prod.product_slug}
                      product_option_id={prodOpt.id}
                      product_option_description={prodOpt.description}
                      product_color={prodOpt.product_color}
                      price_increase={prodOpt.price_increase}
                      options_slug={prodOpt.options_slug}
                      ProductOptionsImages={prodOpt.ProductOptionsImages}
                    />
                  </Col>
                )
              })}
            </div>
          )
        })}
      </Row>
    </Container>
  );
}
