import './App.css';
import Header from './components/header';
import Products from './components/products';
import ProductDetail from './components/product-detail';

import Login from './components/login';
import SignUp from './components/signup';
import ImageSlide from './components/image-slide';
import Footer from './components/footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={ImageSlide} />
          <Route path="/products" exact component={Products}/>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/products/:id" component={ProductDetail} />

          <Footer/>
        </div>
      </Router>
  );
}

export default App;
