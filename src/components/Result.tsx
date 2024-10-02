import Card from "./Card";
import styles from '../styles/Result.module.scss';

const Result = () => {
    return (
        <Card className={styles.card}>
           <h1>76</h1> 
           <p>of 100</p>
        </Card>
    );
}

export default Result;
