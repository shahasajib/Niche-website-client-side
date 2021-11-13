import React from 'react';
import './AddProducts.css'
import banner from '../../../Images/Banner/AddProductsBanner.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../../Shared/Header/Header';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://agile-everglades-13182.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Products added sucessfully")
                    reset()
                }
            })

    };
    return (
        <div>
            <Header />
            <div>
                <img src={banner} className="img-fluid h-50" alt="" />
                <h2 className="centered display-3"><u>Add Products</u></h2>
            </div>
            <Container className="background">
                <Row>
                    <Col className="d-flex justify-content-center" >
                        <form className="formInput" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                            <input type="number" {...register("price")} placeholder="Price" />
                            <textarea {...register("description")} placeholder="Description" />
                            <input  {...register("img")} placeholder="Img Url" />
                            <input className="btn" type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddProducts;