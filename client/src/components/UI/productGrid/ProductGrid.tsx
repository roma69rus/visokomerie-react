import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context, IContext } from '../../..';
import { IProductOptions, IProductOptionsImages } from '../../../types/productOptionsTypes';
import { IProduct } from '../../../types/productTypes';
import { VMCard } from '../card/VMCard';
export interface IProductGridProps {
  productsOptions: IProductOptions[]
}

export function ProductGrid({ productsOptions }: IProductGridProps) {

  return (
    <Container>
      <Row className='d-flex justify-content-center mb-5'>

        {/* {mainPageProduct.map(({id, name, description, price, product_slug, sizetable_path, ProductOptions}: IProduct) => { */}
        {productsOptions.map((opt: IProductOptions) => {
          return (
            <Col
              key={opt.id}
              className='.center-block d-flex justify-content-center px-1 my-2' xs={6} sm={6} md={4} lg={3}
              style={{ maxWidth: "300px", }}>
              <VMCard
                product_id={opt.Product?.id as number}
                name={opt.Product?.name as string}
                price={opt.Product?.price as number} 
                product_slug={opt?.Product?.product_slug as string}
                product_option_id={opt?.id as number}
                product_option_description={opt?.description as string}
                product_color={opt?.product_color as string}
                price_increase={opt?.price_increase as number}
                options_slug={opt?.options_slug as string}
                ProductOptionsImages={opt?.ProductOptionsImages as IProductOptionsImages[]}
              />
            </Col>
          )

        })}
      </Row>
    </Container>
  );
}
