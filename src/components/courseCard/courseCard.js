import React from "react";
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import "./courseCard.scss";

const { Meta } = Card;

const CourseCard = ({ image, title, description, id }) => {
    return (
        <Card>
            <Link to={'/course/' + id}>
                <Meta
                    avatar={<Avatar src={image} />}
                    title={title}
                    description={description}
                />
            </Link>
        </Card>
    )
};

export default CourseCard;
