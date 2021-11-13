import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Header from '../Shared/Header/Header';
import toybanner from '../../Images/Banner/dollBanner.jpg'
import { Image } from 'react-bootstrap';
import './Products.css'

const Products = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('https://agile-everglades-13182.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div>
            <Header />
            <div>
                <Image src={toybanner} fluid />
            </div>
            <div className='container'>
                <div className="Productstext">
                    <h4><i>Shop To</i></h4>
                    <h2 className="headerToys"><b>Our Shop</b></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        toys.map(toy => <Product
                            key={toy._id}
                            toy={toy}
                        >

                        </Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;