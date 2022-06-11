import React from 'react'
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import  { Product }  from '../components/Product'
interface Props {}

function HomeScreen(props: Props) {
    const {} = props

    return (
        <>
            <h1>
                <Row>
                    {products.map(product=>{

                        return(
                            <Col key ={product._id} sm={12} md={6} lg={4} xl={3}>
                                <h3>
                                    {product.name}
                                    <Product product={product}/>
                                </h3>
                            </Col>
                        )
                    })}
                </Row>

            </h1>
        </>
    )
}

export default HomeScreen
