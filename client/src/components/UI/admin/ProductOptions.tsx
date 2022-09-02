import * as React from 'react';
import { Context } from '../../..';
import { IContext } from '../../..';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { CreatePOModal } from './CreatePOModal';
import Dropdown from 'react-bootstrap/Dropdown';
import { deleteImage, deleteOptions, deleteProduct, getAllProducts, getOptionsByProductName, getOptionsByProductNameAndImages, updateImage, updateProductOption } from '../../../http/productAPI';
import { IProductOptionCreate, IProductOptions, IProductOptionsImages } from '../../../types/productOptionsTypes';
import { IProduct } from '../../../types/productTypes';



export interface IAdmProductOptions {
}

export function AdmProductOptions(props: IAdmProductOptions) {

  const { productData } = React.useContext(Context) as IContext

  const [modalShow, setModalShow] = React.useState(false);
  const [productNameID, setProductNameID] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [editedProductOpt, setEditedProductOpt] = React.useState<IProductOptions>()
  const [files, setFiles] = React.useState<File[]>([])

  React.useEffect(() => {
    getAllProducts().then((data) => {
      setIsLoading(true);
      productData.setAllProducts(data)
    }).finally(() => {
      setIsLoading(false)
    })


  }, [productNameID])

  const updateProductOptions = async () => {
    const formData = new FormData()
    formData.append('id', editedProductOpt!.id.toString() as unknown as string)
    formData.append('product_color', editedProductOpt!.product_color)
    formData.append('options_slug', editedProductOpt!.options_slug)
    formData.append('ProductId', editedProductOpt!.ProductId.toString())
    formData.append('description', editedProductOpt!.description as string)
    formData.append('po_order', editedProductOpt!.po_order as unknown as string)
    formData.append('price_increase', editedProductOpt!.price_increase as unknown as string)
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i])
    }


    return await updateProductOption(formData)
  }

  const setFilesHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      setFiles([...files, ...evt.target.files as unknown as File[]]); //error
      console.log("evt.target.files", evt.target.files)
      console.log("files", files)
    }
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className='mb-3'>
          Выберите продукт
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {(productData.allProducts || []).map((i) => {
            return (
              <Dropdown.Item
                key={i.id}
                onClick={() => {
                  getOptionsByProductNameAndImages(i.product_slug).then((data) => {
                    setIsLoading(true)
                    setProductNameID(i.id as number)
                    productData.setProductWithOptions(data)

                    console.log("DATA2", data)

                  }).finally(() => {
                    setIsLoading(false)
                  })
                }}
              >
                {i.name}
              </Dropdown.Item>
            )
          })}

        </Dropdown.Menu>
      </Dropdown>

      {!isLoading && productNameID
        ? <>
          <h2>{productData.productWithOptions?.name}</h2>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
              Создать опцию
            </Button>
          </div>
          {productData.productWithOptions?.ProductOptions.map((po) => {
            return (
              <Row className='mt-4' key={po.id}>
                <Col md={6}>
                  <h2>{po.product_color}</h2>
                  <Form>
                    <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                      <InputGroup.Text id="inputGroup-sizing-sm">COLOR</InputGroup.Text>
                      <Form.Control
                        disabled={po.id === editedProductOpt?.id ? false : true}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={po.product_color as string}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          po.product_color = event.target.value
                        }}
                      />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                      <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
                      <Form.Control
                        disabled={po.id === editedProductOpt?.id ? false : true}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={po.description as string}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          po.description = event.target.value
                        }}
                      />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                      <InputGroup.Text id="inputGroup-sizing-sm">PRICE INCREASE</InputGroup.Text>
                      <Form.Control
                        disabled={po.id === editedProductOpt?.id ? false : true}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={po.price_increase}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          po.price_increase = Number(event.target.value)
                        }}
                      />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                      <InputGroup.Text id="inputGroup-sizing-sm">OPTION SLUG</InputGroup.Text>
                      <Form.Control
                        disabled={po.id === editedProductOpt?.id ? false : true}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={po.options_slug}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          po.options_slug = event.target.value
                        }}
                      />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
                      <InputGroup.Text id="inputGroup-sizing-sm">OPTION ORDER</InputGroup.Text>
                      <Form.Control
                        disabled={po.id === editedProductOpt?.id ? false : true}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={po.po_order as number}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          po.po_order = Number(event.target.value)
                        }}
                      />
                    </InputGroup>
                    <Form.Group controlId="formFileSm" className="mb-3">
                      <Form.Control type="file" size="sm" multiple
                        disabled={po.id === editedProductOpt?.id ? false : true}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          setFilesHandler(event)

                        }}
                      />
                    </Form.Group>
                    <Button variant="success" type="button"
                      disabled={po.id === editedProductOpt?.id ? false : true}
                      className='mb-2 ms-2'
                      onClick={async () => {
                        setIsLoading(true)
                        const options = await updateProductOptions()
                        setEditedProductOpt({ ...editedProductOpt, id: 0 } as IProductOptions)
                        po.ProductOptionsImages.concat(options.ProductOptionsImages)
                        setIsLoading(false)
                      }}
                    >
                      Сохранить
                    </Button>
                    <Button
                      disabled={po.id === editedProductOpt?.id ? true : false}
                      variant="primary"
                      type="button"
                      className='mb-2 ms-2'
                      onClick={() => {
                        setEditedProductOpt(po)
                      }}
                    >
                      Редактировать
                    </Button>
                    <Button variant="outline-danger" className='mb-2 ms-2'
                      disabled={po.id === editedProductOpt?.id ? false : true}
                      onClick={() => {
                        setIsLoading(true)
                        deleteOptions(po.id as number).then((data) => {
                          const index = productData?.productWithOptions?.ProductOptions.indexOf(po) as number;
                          if (index > -1) {
                            (productData?.productWithOptions?.ProductOptions as IProductOptions[]).splice(index, 1)
                          }
                          console.log("index", index)
                          setIsLoading(false)
                        })
                      }}
                    >
                      Удалить
                    </Button>
                  </Form>
                </Col>

                <Row className='mt-4 d-flex flex-row'>
                  {(po.ProductOptionsImages as IProductOptionsImages[])?.map((item) => {
                    return (
                      <Col md={3} className="d-flex flex-column justify-content-center" key={item.id}>

                        {(!isLoading) &&
                          <>
                            <Image src={process.env.REACT_APP_API_URL + '/' + item.img_path} style={{ maxWidth: "100%", width: "auto", height: '200px', objectFit: "cover" }} />
                            <Form.Check
                              disabled={po.id === editedProductOpt?.id ? false : true}
                              className='PO'
                              style={{ margin: "8px 0 8px 0" }}
                              type="switch"
                              id="custom-switch"
                              label="Main Image"
                              defaultChecked={item.main_image || false}
                              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                item.main_image = event.target.checked
                                updateImage(event.target.checked, item.id)
                              }}
                            />
                            <Button variant="outline-danger" size="sm" className='mb-4'
                              disabled={po.id === editedProductOpt?.id ? false : true}
                              onClick={() => {
                                setIsLoading(true)
                                deleteImage(item.id)
                                const index = po.ProductOptionsImages.indexOf(item);
                                if (index > -1) {
                                  po.ProductOptionsImages.splice(index, 1);
                                }
                                setIsLoading(false)

                              }}
                            >
                              Удалить
                            </Button>
                          </>
                        }
                      </Col>
                    )
                  })}
                </Row>
                <hr />
              </Row>
            )
          })}
          <CreatePOModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            ProductId={productNameID}
          />
        </>
        : <h2> Выберете продукт</h2>
      }

    </div>
  )
}