import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context, IContext } from '..';
import { AdmCategories } from '../components/UI/admin/Categories';
import { AdmProduct } from '../components/UI/admin/Product';
import { AdmProductOptions } from '../components/UI/admin/ProductOptions';
import { AdmProductToCategory } from '../components/UI/admin/ProductToCategory';
import { AdmSlider } from '../components/UI/admin/Slider';
import { AdmTypeBar } from '../components/UI/admin/TypeBar';
import { Header } from '../components/UI/header/Header';
import { getSlider } from '../http/sliderAPI';

export interface IAdminProps {
}

export const Admin = observer((props: IAdminProps) => {
  const [selectedItem, setSelectedItem] = React.useState('')

  const { sliderData } = React.useContext(Context) as IContext
  React.useEffect(() => {
    getSlider().then((data) => {
      sliderData.setSlider(data)
      setSelectedItem('Slider')
    })

    console.log("sliderData.slider", sliderData.slider)

  }, [])

  return (
    <div>
      <Header/>
      <Container>
        <Row className='mt-4'>
          <Col md = {3}>
            <AdmTypeBar
              selectedItem={selectedItem}
              setSelectedItem= {setSelectedItem}
            />
          </Col>
          <Col md = {9}>
            {selectedItem==="Slider" &&
              <AdmSlider/>
            }
            {selectedItem==="Product" &&
              <AdmProduct/>
            }
            {selectedItem==="Category" &&
              <AdmCategories/>
            }
            {selectedItem==="PO" &&
              <AdmProductOptions/>
            }
            {selectedItem==="PTC" &&
              <AdmProductToCategory/>
            }
            
          </Col>
        </Row>
      </Container>
    </div>
  );
})

