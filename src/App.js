import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Products';
import SingleProduct from './Views/SingleProduct';


function App() {
    return ( 
        <div className = "App" >

            <Router>

                <Header/>

                <div className="p-3">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>

                        <Route path="/about">
                            <About/>
                        </Route>

                        <Route exact path="/products">
                            <Product/>
                        </Route>

                        <Route path="/products/:id">
                            <SingleProduct/>
                        </Route>
                    </Switch>
                </div>

                <Footer/>

            </Router>
            
        </div>
      );
}

export default App;