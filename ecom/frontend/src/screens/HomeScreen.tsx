import React,{useState,useEffect} from 'react'
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import  { Product }  from '../components/Product'
import axios from 'axios';
interface Props {}

function HomeScreen(props: Props) {
    const {} = props
    const [products,setProducts] = useState<Array<any>>([])

    const fetchProduct=async()=>{
        let data :any;
        try{
            data = (await axios.get('http://127.0.0.1:8001/getProducts/?format=json'))
        } catch(error){
            console.log("fetch fails",error)
        }
        return data
    }
    useEffect(() =>{
        console.log('use effect triggered')
        fetchProduct().then((result)=>{
            console.log("getdata",result)
            setProducts(result.data)
        })
    },[])
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
