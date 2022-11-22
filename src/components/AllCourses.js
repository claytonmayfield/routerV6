import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// this page has a list of all the courses on it. this page can also take you to bundles and let you see info about each courses
const AllCourses = () => {
    // course list is below 
    const courseList = ['AWD1000 - Web Development Technologies', 'AWD1100 - Programming Fundamentals with C#', 'AWD1111 Database Driven Web Development I', 'AWD1115 Database Driven Web Development I']
    return (
        <div className="container">
            <h2>All Courses</h2>
            <ul className="list-group mb-2">
                {courseList.map(course => (
                    <NavLink key={course} to={`/courses/allcourses/${course}`}      className="list-group-item list-group-item-action">
                        <li className="list-group-item">{course}</li>
                    </NavLink>
                ))}
            </ul>  
            <Outlet />      
        </div>
    )
}

export default AllCourses
