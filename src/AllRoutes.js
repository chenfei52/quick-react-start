import React, { Suspense } from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import BasicLayout from "./page/BasicLayout";
import {Loading, Router1, Router2} from "./page/component";

export default function AllRoutes(){
    return (
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
    )
}