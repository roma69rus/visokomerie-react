import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import * as React from 'react';
import { IProductOptions } from '../../../types/productOptionsTypes';
import { IProduct } from '../../../types/productTypes';

export interface IOrderCardProps {
    name: string;
    phone: string;
    ProductOptions: IProductOptions[],
    createdAt: string

}

export function OrderCard({ name, phone, ProductOptions, createdAt }: IOrderCardProps) {

    const [activeNav, setActiveNav] = React.useState<string>('ABOUT')
    console.log("ProductOptions", ProductOptions)

    return (
        <Card className='mb-3'>
            <Card.Header>
                <Nav variant="pills">
                    <Nav.Item>
                        <Nav.Link
                            active={activeNav === "ABOUT"}
                            onClick={() => setActiveNav("ABOUT")}
                        >О заказе</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            active={activeNav === "DETAILS"}
                            onClick={() => setActiveNav("DETAILS")}
                        >Детали</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            {
                activeNav === "ABOUT" &&
                <Card.Body>
                    <Card.Title className='fw-bold'>Время заказа: {createdAt}</Card.Title>
                    <Card.Text>
                        Имя клиента: {name}
                    </Card.Text>
                    <Card.Text>
                        Номер телефона: {phone}
                    </Card.Text>
                </Card.Body>
            }
            {
                activeNav === "DETAILS" &&
                <Card.Body>
                    <Card.Title className='fw-bold'>Время заказа: {createdAt}</Card.Title>
                    {
                        ProductOptions.map((p) => {
                            return (
                                <Card.Text key={p.id}>
                                    Товар: {p.Product?.name} {' '} {p.product_color} Цена: {p.Product?.price as number + p.price_increase}
                                </Card.Text>
                            )
                        })
                    }
                </Card.Body>
            }


        </Card>
    );
}



