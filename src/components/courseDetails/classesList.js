import React from "react";
import { List, Checkbox } from 'antd';

const ClassesList = ({ list }) => {
    return (
        <div className="list-container">
            <h3>Course content</h3>
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={
                                <Checkbox checked={item.completed}>
                                    <span>{item.title}</span>
                                </Checkbox>
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ClassesList;