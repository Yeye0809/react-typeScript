import { lazy, LazyExoticComponent } from "react";

import NoFount from "../01-laziload/pages/NoFount";


type JSXComponent = ()=>JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyLayout"*/'../01-laziload/lazyLayout/LazyLayout'));


export const routes: Route[] = [
    {
        path: '/laziload/*',
        to: '/laziload/',
        Component: LazyLayout,
        name: 'lazi-Layout',
    },
    {
        to: '/no-found',
        path: 'no-found',
        Component: NoFount,
        name: 'no-found',
    },
  
];


