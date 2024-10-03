import Card from "./Card";
import styles from '../styles/CategoryCard.module.scss';
import { ReactNode } from "react";

type CategoryCardProps = {
    className?: string;
    children?: ReactNode;
}

const CategoryCard = ({className, children}: CategoryCardProps) => {
    return (
        <Card className={className + ' ' + styles.card}>
            {children}
        </Card>
    );
}

export default CategoryCard;
