import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {
  const [product,setProduct]=useState('');
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>{
      console.log(response);
      setProduct(...product,response.data);
    })
    .catch(error=>{
      console.log(error);
    })
  },[])
  return (
    <div className="App">
      <Header/>
      <div className='container mx-auto'>
        <div className='grid grid-cols-4 gap-4 my-5'>
          <Cart/>
        </div>
      </div>
    </div>
  );
}

export default App;
