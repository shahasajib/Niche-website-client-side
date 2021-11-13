import axios from 'axios';
import React from 'react';
import review from '../../../Images/Banner/reviewbanner.jpg'
import { useForm } from 'react-hook-form';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://agile-everglades-13182.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Review added sucessfully")
                    reset()
                }
            })

    };
    return (
        <div>
            <div>
                <img src={review} class="img-fluid" alt="..." />
            </div>
            <h2 className="Review-text">Client Review</h2>
            <div className="d-flex justify-content-center">

                <form className="formInput" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input type="number" {...register("rating")} placeholder="Rating" />
                    <textarea {...register("comment")} placeholder="Comment" />
                    <input className="btn" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;