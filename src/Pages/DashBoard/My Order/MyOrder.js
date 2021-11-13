import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import orderimg from '../../../Images/Banner/order.jpg'

const MyOrder = () => {
    const [order, setOrder] = useState([])
    const [control, setControl] = useState(false);
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://agile-everglades-13182.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [control]);



    const handleDelete = (id) => {
        fetch(`https://agile-everglades-13182.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert("Are You Sure? Delete this order item.")
                    setControl(!control);
                }
            });
        // console.log(id);
    };




    return (
        <div>
            <div>
                <img src={orderimg} class="img-fluid" alt="..." />
            </div>
            <div>
                {order?.map((toy) => (
                    <div className="col-md-4">
                        <div className=" border border p-3">
                            <h4>Customar name:{toy?.name}</h4>
                            <h5> Address: {toy?.Address}</h5>

                            <button
                                onClick={() => handleDelete(toy?._id)}
                                className="btn btn-danger"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MyOrder;