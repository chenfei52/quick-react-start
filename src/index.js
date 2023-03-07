/**
 * Created by chenfei on 2018/2/5.
 */

import React from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import initStore from '@src/redux/initStore';
import ReactDom from 'react-dom/client';
import AllRoutes from './AllRoutes';

const store = initStore();
const queryClient = new QueryClient();

let ReactRoot = ReactDom.createRoot(document.getElementById('container'));

ReactRoot.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <AllRoutes/>
        </Provider>
    </QueryClientProvider>
);