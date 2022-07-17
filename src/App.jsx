import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { CartContainer } from './components/CartContainer';
import { Navbar } from './components/Navbar';
import { calculateTotals } from './features/cart/CartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(calculateTotals());
    // eslint-disable-next-line
  }, [cartItems]);


  return (
    <main>
      <Navbar />
      <CartContainer/>
    </main>
  );
}

export default App;
