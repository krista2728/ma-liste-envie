import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [gift, setGift] = useState(0);
  const {id, giftName, description, image} = data[gift];

  const previousGift = () => {
    setGift((gift => {
      gift --;
      if(gift < 0) {
        return data.length-1;
      }
      return gift;
    }))
  }

  const nextGift = () => {
    setGift((gift => {
      gift ++;
      if (gift > data.length-1) {
        gift = 0;
      }
      return gift
    }))
  }

  return (<div>
    <div className='container'>
    <h1>Wish List</h1>
    </div>


    <div className='container'>
    <img src={image} width="300px" alt='gift' />
    </div>

    <div className='container'>
    <h2>{id} - {giftName}</h2>
    </div>

    <div className='container'>
    <h2> {description} </h2>
    </div>

    <div className='btn container'>
    <button onClick={previousGift}>Previous</button>
    <button onClick={nextGift}>Next</button>
    </div>

      
    </div>
  );
}

export default App;
