import * as React from 'react';
import { getOrders } from '../../../http/order';
import { IOrder } from '../../../types/ordersType';
import { OrderCard } from '../card/OrderCard';

export interface IOrderListProps {
}

export function OrderList(props: IOrderListProps) {
    const [isLoading, setIsLoading] = React.useState(false)
    const [OrderData, setOrderData] = React.useState<IOrder[]>([])

    React.useEffect(() => {
        setIsLoading(true);
        getOrders().then((data) => {
            setOrderData(data)
        }).finally(() => {
            setIsLoading(false)
        })

    }, [])


    return (
        <div>
            {isLoading ? <h1>Идет загрузка</h1>
            : OrderData.map((ord) => {                
                return ( 
                    <OrderCard key={ord.id}
                        createdAt={ord.createdAt}
                        name={ord.name}
                        phone={ord.phone}
                        ProductOptions={ord.ProductOptions}
                    />
                )
            })
            }


        </div>
    );
}
