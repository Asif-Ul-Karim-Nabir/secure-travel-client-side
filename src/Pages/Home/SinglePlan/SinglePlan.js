import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SinglePlan.css'

const SinglePlan = () => {
    const {_id} = useParams()
    const [singlePlan, setSinglePlan] = useState([])
    const [singlePlanDetails, setSinglePlanDetails] = useState({})
    useEffect( ()=>{
        fetch('https://wicked-blood-26384.herokuapp.com/plans')
        .then(res=>res.json())
        .then(data=>setSinglePlan(data))
    },[])
    useEffect( ()=>{
        const foundSinglePlan = singlePlan.find(plan => (plan?._id) === _id )
        setSinglePlanDetails(foundSinglePlan)
    }
   ,[singlePlan])
    return (
        <div className=" singlePlan-container">
            <div className="w-50 mx-auto">
            <h3 className="py-4">Our Single Plan Page</h3>
            <img src={singlePlanDetails?.img} alt="" />
            <h3>{singlePlanDetails?.name}</h3>
            <h4>Price: ${singlePlanDetails?.price}</h4>
            <p>{singlePlanDetails?.descriptions}</p>
            <button>Add To Order</button>
            </div>
        </div>
    );
};

export default SinglePlan;