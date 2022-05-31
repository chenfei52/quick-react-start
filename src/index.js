/**
 * Created by chenfei on 2018/2/5.
 */

import React, { Suspense } from 'react';
import BasicLayout from './component/BasicLayout';
import {Provider} from 'react-redux';
import initStore from '@src/redux/initStore';
import ReactDom from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router-dom';
import { Router1, Router2, Loading } from './component/component';


const store = initStore();

let ReactRoot = ReactDom.createRoot(document.getElementById('container'));

ReactRoot.render(<Provider store={ store }>
    <HashRouter>
        <Suspense fallback={ <Loading /> }>
            <Routes>
                <Route path="/" element={ <BasicLayout /> }>
                    <Route path="router1" element={ <Router1 /> } />
                    <Route path="router2" element={ <Router2 /> } />
                </Route>
                <Route path={'*'} element={<div>未找到页面</div>} />
            </Routes>
        </Suspense>
    </HashRouter>
</Provider>);