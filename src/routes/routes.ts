import {lazy, LazyExoticComponent} from "react";
import { NoLazy } from "../01-lazyLoad/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages";

type JSXComponent = ()=> JSX.Element

interface Route{
    to: string,
    path: string,
    name: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyLayoutPage1" */ "../01-lazyLoad/layout/LazyLayout") )


export const routes : Route[] = [
    {
        path: "/lazyload/*",
        to: "/lazyload/",
        Component:LazyLayout,
        name: "Lazy Layout"
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component:NoLazy,
        name: "No lazy"
    },
    // {
    //     to: "/lazy3",
    //     path: "lazy3",
    //     Component:Lazy3,
    //     name: "Lazy-3"
    // }
]