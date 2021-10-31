import React from 'react';
import { Row } from 'react-bootstrap';

const WhyChooseUs = () => {
    return (
        <div className="w-75 mx-auto choose-us">
            <h2 className="py-4">Why Choose Us?</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                <div>
                    <h3>Attention to Details</h3>
                    <p>It’s our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative, while keeping a close eye on the calendar and your budget.</p>
                </div>
                <div>
                    <h3>A Plan for Success</h3>
                    <p>You want results. We have found that the best way to get them is with up front research – of your company, competitors, target market and customer psychographics. Only after we fully understand you and your customers, do we recommend a plan of attack.</p>
                </div>
                <div>
                    <h3>Creativity</h3>
                    <p>We bring our diverse background of advertising, design, branding, public relations, research and strategic planning to work for your company. Not only will your materials look great – they will get results.</p>
                </div>
                <div>
                    <h3>Experts Only</h3>
                    <p>First Impressions is comprised of specialists with corporate and agency experience that hail from various backgrounds. As such, First Impressions will never assign second-tier (or gasp! third tier!) support staff to any account.</p>
                </div>
                <div>
                    <h3>Pricing</h3>
                    <p>Our prices are competitive and fair. There are no surprise bills. Any unexpected or additional expenses must be pre-approved by you. That’s how we would like to be treated, and that is how our clients are treated.</p>
                </div>
                <div>
                    <h3>Award-Winning</h3>
                    <p>We’ve won the international Communicator’s Award on behalf of our clients six times, chosen from over 6000 entries.</p>
                </div>
            </Row>
        </div>
    );
};

export default WhyChooseUs;