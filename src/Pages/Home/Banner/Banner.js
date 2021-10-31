import React from 'react';
// import banner1 from '../../../images/banner/secure-travel-banner-1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            {/* <img src={banner1} alt="" /> */}
            <h2>We Are Creative Secure Travel.</h2>
            <br />
             <div className="top-banner">
             <p>Secure Travel and Tours is one of the leading travel and tours agency in Bangladesh, providing flight <br /> tickets, tours, car hire and hotels.</p>
            <p>Travel safety and security are becoming increasingly important <br /> in all companies. Travel related risks need to be managed in a holistic way.</p>
             </div>
            <br />
            <br />
            <input type="text" name="" id="" placeholder="Type..." className="search" />
            <input type="submit" value="search" className="search-btn" />
            <br />
            <br />
            <h5 className="pt-4">We are care for you.</h5>
            <div className="bottom-banner">
                <p>Upcomming Plans</p>
                <p>Featured Plans</p>
                <p>All Plans</p>
            </div>
        </div>
    );
};

export default Banner;