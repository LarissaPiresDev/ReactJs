import './App.css';
import Title from './components/Title';
import Counter from './components/Counter';
import useCountdown from './hooks/useCountdown';

import anonovo from './assets/anonovo.jpg';

function App() {
 const [day, hour, minute, second ] = useCountdown("Jan 1, 2024 00:00:00")
  return (
    <>
      <div className='App' style={{backgroundImage: `url(${anonovo})`}}>
        <div className="container">
          <Title title="Contagem regressiva para 2024"/>
          <div className="coutdown-container">
            <Counter title = "Dias" number={day}/>
            <Counter title = "Horas" number={hour}/>
            <Counter title = "Minutos" number={minute}/>
            <Counter title = "Segundos" number={second}/>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
