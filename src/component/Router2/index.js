import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { withRouter } from "react-router-dom";
import './index.scss';

function Router2(){
    const [num, setNum] = useState(0);

    useEffect(()=>{
        let timer = setInterval(()=>{
            setNum(new Date().getTime());
        }, 10);
        return ()=>{
            clearInterval(timer);
        }
    }, [])

    return (
        <div className="color" >
            <Input />
            <div className="click">
                {num}
                <button onClick={ ()=>alert(1234) }>点击</button>
            </div>
        </div>
    )
}
export default withRouter(Router2);
