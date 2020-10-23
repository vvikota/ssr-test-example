import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import News from "./news.jsx";
import Catalog from "./catalog.jsx";
import Contact from "./contact.jsx";
import Reviews from "./reviews.jsx";
import NoMatch from "./no-match.jsx";
import Menu from "./menu.jsx";

class App extends Component{
  render() {
    // console.log(this.props.data)
    return (
      <section>
        <Menu />

        <Switch>

           <Route 
             path='/news'
             render={(props) => <News />}
           />

           <Route 
             path='/catalog'
             render={(props) => <Catalog />}
           />

           <Route 
             path='/reviews'
             render={(props) => <Reviews />} 
           />

           <Route 
             path='/contact' 
             render={(props) => <Contact />}
           />
           
          <Route render={(props) => <NoMatch {...props} />}/>
        </Switch> 
      </section>
    );
  }
} 

export default App;