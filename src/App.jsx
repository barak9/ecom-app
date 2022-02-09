import React from 'react';
import {Provider} from 'react-redux';
import {Home} from './components/Home';
import {Nav} from './components/Nav';
// import {Header} from './components/Header';
import {Cart} from './components/Cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Store} from './store/Index';
import {Details} from './components/Details';


const App = () => {
    return (
        <Router>
        <Provider store={Store}>
            <Nav/>
        <Route path="/ecom-app" exact component={Home} />
        
        <Route path="/cart" exact component={Cart} />
        <Route path='/details/:id' exact component={Details} />
        </Provider>
        </Router>
    );
}

export {App};

  