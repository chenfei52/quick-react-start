import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { controlTopMenu } from '@src/redux/globalSlice';
import userApi from "../../api/user";
import './index.less';

export default function Header() {
    const { hideTopMenu } = useSelector(state=>{ return state.global });
    const { userInfo } = useSelector(state=>{ return state.user });
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(userApi.getUserInfo());
    }, [])

    return (
        <div className="header">
            这是头部, 用户名为: {userInfo && userInfo.name}
            <Link to="router1">路由1</Link>
            <Link to="router2">路由2</Link>
            {
                hideTopMenu ? '隐藏' : '显示'
            }
            <button onClick={ ()=>dispatch(controlTopMenu(!hideTopMenu)) }>切换</button>
        </div>
    )
}
