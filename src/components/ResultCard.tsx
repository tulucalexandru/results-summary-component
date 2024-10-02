import Card from "./Card";
import Result from "./Result";
import styles from '../styles/ResultCard.module.scss'

const ResultCard = () => {
    return (
        <Card className={styles.card} title="Your Result">
        <Result></Result>
        <h2>Great</h2>
        <p>Your performance exceed 65% of the people
             conducting the test here!</p>
        </Card>
    );
}

export default ResultCard;
