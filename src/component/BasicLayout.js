/* eslint-disable */
import React, { Suspense } from 'react';
import { Header } from './component';
import {Outlet} from "react-router-dom";

export default function BasicLayout() {
    return (
        <div>
            <Header/>

            <div className={"content"}>
                <Outlet />
            </div>
        </div>
    )
}
