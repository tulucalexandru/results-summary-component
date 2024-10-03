import Card from "./Card";
import CategoryCard from "./CategoryCard";
import styles from '../styles/SummaryCard.module.scss';
import reaction_logo from '../assets/images/icon-reaction.svg';
import memory_logo from '../assets/images/icon-memory.svg';
import verbal_logo from '../assets/images/icon-verbal.svg';
import visual_logo from '../assets/images/icon-visual.svg';

const SummaryCard = () => {
    return (
        <Card className={styles.card}>
            <h1>Summary</h1>
            <CategoryCard className={styles.reaction}>
                <img src={reaction_logo} alt="reaction" />
                <h1>Reaction</h1>
                <p>80 <em> / 100</em></p>
            </CategoryCard>
            <CategoryCard className={styles.memory}>
                <img src={memory_logo} alt="reaction" />
                <h1>Memory</h1>
                <p>92 <em> / 100</em></p>
            </CategoryCard>
            <CategoryCard className={styles.verbal}>
                <img src={verbal_logo} alt="reaction" />
                <h1>Verbal</h1>
                <p>61 <em> / 100</em></p>
            </CategoryCard>
            <CategoryCard className={styles.visual}>
                <img src={visual_logo} alt="reaction" />
                <h1>Visual</h1>
                <p>73 <em> / 100</em></p>
            </CategoryCard>
            <button>Continue</button>
            
            
        </Card>
    );
}

export default SummaryCard;
