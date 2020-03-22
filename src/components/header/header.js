import React, { Component } from "react";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import "./header.scss"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Header extends Component {
    state = {
        current: ""
    }

    componentDidMount() {
        const { pathname } = document.location;
        console.log(pathname)
        if (pathname.indexOf("classroom") > -1) {
            this.setState({
                current: "classroom",
            });
        } else if (pathname.indexOf("course") > -1) {
            this.setState({
                current: "current",
            });
        } else {
            this.setState({
                current: "courses",
            });
        }
    }

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="courses">
                    <Link to="/">Browse Courses </Link>
                </Menu.Item>

                <Menu.Item key="current">
                    <Link to="/course/1">Current Course </Link>
                </Menu.Item>
                <Menu.Item key="classroom">
                    <Link to="/course/1/classroom">Classroom</Link>
                </Menu.Item>
                <span className="user">  <Avatar size="small" icon={<UserOutlined />} /> David</span>
            </Menu>
        )
    }
}

export default Header;
