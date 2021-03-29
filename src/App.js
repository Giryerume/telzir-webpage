import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/ProductsPage/Products';
import Services from './components/pages/ServicesPage/Services';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
