import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = ({ toy }) => {
    const { _id, name, price, description, img } = toy || {};
    const history = useHistory()
    const handlePurchase = _id => {
        console.log(_id)
        history.push(`/pro/${_id}`)
    }
    return (
        <div>
            <div className="col ">
                <div className="card h-100">
                    <img src={img} className="h-50 img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>

                        <h5 className="card-title">${price}</h5>
                        <h6 className="card-text">{description}</h6>

                        <button onClick={() => handlePurchase(_id)} className="btn btn-success">shop Now</button>


                    </div>
                </div >
            </div >
        </div >
    );
};

export default Product;