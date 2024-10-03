import ResultCard from './components/ResultCard'
import SummaryCard from './components/SummaryCard'
import Card from './components/Card'
import './styles/App.scss';
import styles from './styles/AppCard.module.scss';

function App() {

  return (
    <Card className={styles.card}>
      <ResultCard>
      </ResultCard>
      <SummaryCard></SummaryCard>
    </Card>
  )
}

export default App
