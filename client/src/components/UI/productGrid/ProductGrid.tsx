import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context, IContext } from '../../..';
import { IProduct, IProductOptions } from '../../../store/ProductStore';
import { VMCard } from '../card/VMCard';
export interface IProductGridProps {
  productsOptions: IProductOptions[]
}

export function ProductGrid({ productsOptions }: IProductGridProps) {

  return (
    <Container>
      <Row className='d-flex justify-content-center'>

        {/* {mainPageProduct.map(({id, name, description, price, product_slug, sizetable_path, ProductOptions}: IProduct) => { */}
        {productsOptions.map((opt: IProductOptions) => {
          return (
            <Col
              key={opt.id}
              className='.center-block d-flex justify-content-center px-1 my-2' xs={6} sm={6} md={4} lg={3}
              style={{ maxWidth: "300px", }}>
              <VMCard
                product_id={opt.Product!.id}
                name={(opt.Product as IProduct).name}
                price={(opt.Product as IProduct).price} 
                product_slug={(opt.Product as IProduct).product_slug}
                product_option_id={opt.id}
                product_option_description={opt.description}
                product_color={opt.product_color}
                price_increase={opt.price_increase}
                options_slug={opt.options_slug}
                ProductOptionsImages={opt.ProductOptionsImages}
              />
            </Col>
          )

        })}
      </Row>
    </Container>
  );
}
