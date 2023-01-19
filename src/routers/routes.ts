import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-laziload/pages";
import {  LazyPage3 } from "../01-laziload/pages";

type JSXComponent = ()=>JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const Lazy1 = lazy(()=> import(/* webpackChunkName: "LazyPage1"*/'../01-laziload/pages/LazyPage1'));
const Lazy2 = lazy(()=> import(/* webpackChunkName: "LazyPage2"*/'../01-laziload/pages/LazyPage2'));
const Lazy3 = lazy(()=> import(/* webpackChunkName: "LazyPage3"*/'../01-laziload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazi1',
        path: 'lazi1',
        Component: Lazy1,
        name: 'lazi-1',
    },
    {
        to: '/lazi2',
        path: 'lazi2',
        Component: Lazy2,
        name: 'lazi-2',
    },
    {
        to: '/lazi3',
        path: 'lazi3',
        Component: Lazy3,
        name: 'lazi-3',
    }
];


