import { PropsWithChildren, ReactNode } from "react";

type CardProps = {
    title?: string;
    text?: string;
    children?: ReactNode;
    className?: string;
}

const Card = (props: PropsWithChildren<CardProps>) => {
   return <div className={props.className}>
    {props.title && <h1>{props.title}</h1>}
    {props.children}
   </div>
} 

export default Card;