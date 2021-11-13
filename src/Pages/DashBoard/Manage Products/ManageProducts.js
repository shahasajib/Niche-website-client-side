import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './ManageProducts.css'

const ManageProducts = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://agile-everglades-13182.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleDelete = id => {
        const uri = `https://agile-everglades-13182.herokuapp.com/products/${id}`
        fetch(uri, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Are You Sure Delete This item.")
                    const remainingProducts = product.filter(p => p._id !== id);
                    setProduct(remainingProducts);
                }
            })
    }
    return (
        <div className="container manageProduct">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    product.map(data => (


                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>
                                        {data.description}
                                    </Card.Text>
                                    <Card.Text>
                                        ${data.price}
                                    </Card.Text>
                                    <button onClick={() => handleDelete(data._id)} className="btn btn-warning">Delete</button>
                                </Card.Body>
                            </Card>
                        </Col>





                    ))
                }
            </div>
        </div >
    );
};

export default ManageProducts;