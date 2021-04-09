import React, {useEffect, useState, usState} from 'react';
// import CourseDetail from './CourseDetail';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    // Fetch courses:
    useEffect(() => {
        fetch('http://localhost:5000/api/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    })

    // Map over courses

    return (
        <div className="list-of-courses">
            {/* list of mapped courses details */}
        </div>
    )
}

export default Courses;