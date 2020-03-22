import React from "react"
import { Progress } from 'antd';

const Completed = ({ percent }) => {
    return (
        <div>
            <Progress type="circle" status="active" percent={percent.toFixed(2)} />
        </div>
    );
}

export default Completed;