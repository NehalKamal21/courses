import React, { useEffect, useState } from 'react';
import _ from "lodash";
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'antd';
import Completed from "../components/courseDetails/completed";
import ClassesList from "../components/courseDetails/classesList";
import CourseCard from "../components/courseCard/courseCard";
import data from "../api/courseDetails.json";

const CourseDetails = props => {
    const [courseContent, setContent] = useState({});
    const [count, setCount] = useState(0);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        setContent(data);
        if (!_.isEmpty(courseContent)) {
            setCount(courseContent.content.filter((course) => { return course.completed }).length);
            setPercent((count / courseContent.content.length) * 100);
        }
    }, [courseContent, count]);

    return (
        <div className="course-details-container">
            {!_.isEmpty(courseContent) &&
                <Row>
                    <Col span={16} offset={4}>
                        <h2>{courseContent.title}</h2>
                        <div className="enrolled">{courseContent.enrolled && 'Currently enrolled'}</div>
                        <div className="description">
                            <p>{courseContent.description}</p>
                            <Completed percent={percent} />
                        </div>
                        <div className="details-container">
                            <ClassesList list={courseContent.content} />
                            <div className="similar-container">
                                <h3>Similar Course</h3>
                                <CourseCard
                                    image={courseContent.similar.image}
                                    description={courseContent.similar.description}
                                    title={courseContent.similar.title}
                                    id={courseContent.similar.id}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            }
        </div>
    )
}

export default withRouter(CourseDetails);