import { ReactElement } from 'react';

export interface ProductCardProps{
    product: Product
    children?: ReactElement | ReactElement[]
}
export interface Product{
    id: string;
    title:string;
    img?: string;
}
// interface ProductButtonsProps {
//     increaseBy:(value:number)=>void;
//     counter:number;
// } interface commented because now is receiving the props as Higher order component using useContext and getting subscribed to any state from his parent component
export interface ProductContextProps {
    counter: number;
    increaseBy:(value:number)=>void;
    product: Product
}

export interface ProductCardHOCProps{
    ({ product, children }: ProductCardProps ): JSX.Element,
    Title: ({ title }: {title?: string}) => JSX.Element,
    Image: ({ img }: {img?: string}) => JSX.Element,
    Buttons: ()=> JSX.Element
}