import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className='card-container'>
        <div className='card-main'>
          <Card
          className= 'card-sedans' 
          image= 'sedans'
          title= 'Sedans'
          description= 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
          />

          <Card
          className= 'card-suvs'  
          image= 'suvs'
          title= 'Suvs'
          description= 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
          />

          <Card
          className= 'card-luxury'  
          image= 'luxury'
          title= 'Luxury'
          description= 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
