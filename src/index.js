/**
 * Created by chenfei on 2018/2/5.
 */

import React from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// import {ReactQueryDevtools} from "react-query-devtools";
import initStore from '@src/redux/initStore';
import ReactDom from 'react-dom/client';
import AllRoutes from './AllRoutes';
import './style/varible.less';

const store = initStore();
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // cacheTime: 60 * 60 * 1000, //数据在非激活状态后多少分钟从缓存中移除
            staleTime:  30 * 60 * 1000, //数据失效时长
        }
    }
});

let ReactRoot = ReactDom.createRoot(document.getElementById('container'));

ReactRoot.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <AllRoutes/>
        </Provider>
        {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
);