import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {
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
