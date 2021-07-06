import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import data from "../api/courses";
import CourseCard from "../components/courseCard/courseCard"
import { Spin } from "antd";

const HomePage = () => {
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        setCourses(data);
    }, []);

    return (
        <div className="courses-containter">

            {courses ? courses.results.map((course) =>
                <CourseCard
                    key={course.id}
                    image={course.image}
                    description={course.description}
                    title={course.title}
                    id={course.id} />
            )
                :
                <Spin size="large" className="spinner" />
            }
        </div>
    );

};

export default withRouter(HomePage);