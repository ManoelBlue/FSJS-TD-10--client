import React, {useEffect, useState, usState} from 'react';
import {Link} from 'react-router-dom';
// import CourseDetail from './CourseDetail';

import config from '../config';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    // Fetch courses:
    useEffect(() => {
        fetch(`${config.apiBaseUrl}/courses`)
            .then(res => res.json())
            .then(data => setCourses(data));
            // .then(data => setCourses(data));
    })

    // Map over courses
    const coursesList = courses.map((course, index) => (
        <Link
            to={`courses/${course.id}`}
            key={index}
            className="course--module course--link"
        >
            <h2 className="course--label">Course</h2>
            <h3 className="course--title">{course.title}</h3>
        </Link>
    ));

    return (
        <div className="wrap main--grid">
            {coursesList}
        </div>
    )
}

export default Courses;