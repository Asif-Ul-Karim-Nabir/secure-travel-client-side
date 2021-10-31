import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Plan from '../Plan/Plan';
import './Plans.css'

const Plans = () => {
    const [plans, setPlans] = useState([]);
    useEffect( ()=>{
        fetch('https://wicked-blood-26384.herokuapp.com/plans')
        .then(res=>res.json())
        .then(data=>setPlans(data))
    },[])
    return (
        <div className="plans-container pb-3">
            <div className=" w-75 mx-auto">
            <h2 className="pt-4 pb-3">Our Plans</h2>
            <Row xs={1} md={2} lg={2} className="g-4">
              {
                  plans.map(plan=> <Plan
                  key={plan._id}
                  plan={plan}
                  ></Plan>)
              }
            </Row>
            </div>
        </div>
    );
};

export default Plans;