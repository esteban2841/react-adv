import { Props as ProductCardProps } from '../../components/ProductCard';
import { ProductTitleProps } from '../../components/ProductTitle';
import { ProductImageProps } from '../../components/ProductImage';
import { ProductButtonsProps } from '../../components/ProductButtons';


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
    product: Product;
    maxCount?:number
}

export interface onChangeArgs{
    product : Product;
    count : number
}

export interface ProductInCart extends Product{
    count: number
}

  
export interface ProductCardHOCProps{
    ({ product, children }: ProductCardProps ): JSX.Element,
    Title: ( Props: ProductTitleProps) => JSX.Element,
    Image: ( Props: ProductImageProps ) => JSX.Element,
    Buttons: (Props:ProductButtonsProps)=> JSX.Element
}
export interface InitialValues{
    count?:number;
    maxCount?:number
}

export interface ProductCardsHandler{
    count: number;
    isMaxCountReached: boolean;
    maxCount?:number;
    product:Product;
    increaseBy: (value:number)=>void;
    reset:()=>void
}

