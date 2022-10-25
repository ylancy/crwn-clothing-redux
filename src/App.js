import { Routes, Route, } from 'react-router-dom';
import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";
import Navigation from "./routes/navigation/navigation";
import SignIn from './routes/signin/signin';
import Checkout from './routes/checkout/checkout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='checkout' element={<Checkout />} />

      </Route>
    </Routes>
  );
}

export default App;
