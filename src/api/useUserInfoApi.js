// 此处设置的状态只可在同一个组件共享，用于分离页面的接口调用
import React, { useState, useCallback, useEffect } from 'react';

export default function useUserInfoApi(){
    const [userInfo, setUserInfo] = useState(null);

    const getUserInfo = useCallback(()=>{
        setUserInfo({ name: '陈非' });
    });

    useEffect(()=>{
        setTimeout(()=>{
            setUserInfo({ name: '名称被修改' })
        })
    }, [])

    return {
        userInfo,
        getUserInfo,
        setUserInfo
    }
}
