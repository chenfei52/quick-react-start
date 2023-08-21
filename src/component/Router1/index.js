import React, {useState} from 'react';
import {Input, Button} from 'antd';
import {Link} from "react-router-dom";
import './index.less';

export default function Router1() {
    const [number, setNumber] = useState(0);

    const clickFun = (event)=>{
        console.log(event.target);
    }

    return (
        <div className="test">
            <Link to="/router1">路由1</Link>
            <Link to="/router2">路由2</Link>
            <Input onChange={e => setNumber(Number(e.target.value) || 0)}/>
            <button onClick={ clickFun }>111</button>
        </div>
    )
}
