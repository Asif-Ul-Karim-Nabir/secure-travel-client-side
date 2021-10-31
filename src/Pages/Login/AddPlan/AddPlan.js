import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPlan.css'

const AddPlan = () => {
    const { register, handleSubmit ,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/plans',data)
        .then(res =>{
            console.log(res);
            if(res.data.insertedId){
                alert('successfully added plan.')
                reset ()
            }
        })
    }
    return (
        <div className="addPlan-container">
            <h2 className="pt-3">Add New Plans</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <input {...register("descriptions")} placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image URL"/>
                <input type="submit" value="Add Plan" />
            </form>
        </div>
    );
};

export default AddPlan;