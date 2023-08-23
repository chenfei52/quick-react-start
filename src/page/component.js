/* eslint-disable */

//组建用于集中导出自定义的所有组件 方便在别的组件中批量、多次调用

import React, { lazy } from 'react';

export Header from '../component/Header';
export Loading from '../component/Loading';

export const Login = lazy(() => import(/* webpackChunkName: "login" */ './Login'));
export const Router1 = lazy(() => import(/* webpackChunkName: "router1" */ './Router1'));
export const Router2 = lazy(() => import(/* webpackChunkName: "router2" */ './Router2'));
