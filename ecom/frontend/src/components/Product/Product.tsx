import React from 'react'
import { Card,CardImg } from 'react-bootstrap'
import Rating  from '../Rating'
type Props = {
    product : any;
}
export const Product : React.FC<Props>= ({product}) =>{
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <CardImg src={product.image}/>
            </a>
            <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong>
                        {product.name}
                    </strong>
                </Card.Title>
            </a>
                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numReviews}
                        <Rating value={product.rating} text = {`${product.rating} from ${product.numReviews}`} color = {`#f8e825`}/>

                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>

        </Card>
    )
}
