import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';

const Purchase = () => {
    const { user } = useAuth()

    const { productId } = useParams();
    // console.log(productId)
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        data.email = user?.email;
        axios.post('https://agile-everglades-13182.herokuapp.com/addOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Products added sucessfully")
                    reset()
                }
            })
    };
    useEffect(() => {
        fetch(`https://agile-everglades-13182.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <Header />
            <div className="container m-5">
                <Row >
                    <Col xs={12} md={6}>
                        <form className="formInput" onSubmit={handleSubmit(onSubmit)}>
                            <h5 className="text-center">Contact information</h5>
                            <input  {...register("name")} placeholder="Name" />
                            <input {...register("email", { required: true, maxLength: 20 })} defaultValue={user?.email} />
                            <input {...register("productName", { required: true, maxLength: 20 })} defaultValue={product.name} />
                            <input {...register("number", { maxLength: 20 })} defaultValue={product.price} />
                            <input type="phoneNumber" {...register("phoneNumber")} placeholder="PhoneNumber" />
                            <input {...register("Address")} placeholder="Address" />
                            <input className="btn" type="Submit" />
                        </form>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Text>
                                    ${product.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div >
        </div>
    );
};

export default Purchase;