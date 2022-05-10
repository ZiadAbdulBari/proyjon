import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AllProduct from './components/AllProduct/AllProduct';
import Header from './components/Header/Header';

function App() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>{
      console.log(response);
      setProducts(...products,response.data);
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
        {
          products.map((product,index)=>{
            return(
              <AllProduct key={index} product={product}/>
            )
          })
        } 
        </div>
      </div>
    </div>
  );
}

export default App;
