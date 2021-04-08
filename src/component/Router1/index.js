import React, {useState} from 'react';
import {Input, Button} from 'antd';
import {useSelector} from 'react-redux';
import Req from '@src/util/request';
import styles from './index.module.scss';
import {createSelector} from "reselect";

const getList = createSelector(
    [
        state => state?.global?.list,
        (_, number) => number
    ],
    (list, number) => list.filter(item => item >= number)
)

export default function Router1() {
    console.log('router1 渲染');
    const [number, setNumber] = useState(0);

    const list = useSelector(state => getList(state, number));


    return (
        <div className={styles.test}>
            <Input onChange={e => setNumber(Number(e.target.value) || 0)}/>
            {list.join(',')}
        </div>
    )
}
