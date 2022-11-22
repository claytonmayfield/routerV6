import React from 'react'
import { useLocation } from 'react-router-dom';
import Courses from './Courses';
// this is the page that shows infomoration about the Course
const Dashboard = () => {
    const location = useLocation();
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{location.state}</h5>
                {/* I could not figure out how to make the info for each courses */}
                <p className="card-text">Learn from the industry experts in live one to one session</p>
            </div>
        </div>
    )
}

export default Dashboard
