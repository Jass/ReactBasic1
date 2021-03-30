import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home'; //remove curly braces after make it function previous: import  {Home}  from './components/Home';
import { FetchData } from './components/FetchData_old';
import FetchDataNew from './components/FetchData';
import  Counter  from './components/Counter';

import './custom.css'

//export default class App extends Component {
//  static displayName = App.name;

//  render () {
//    return (
//      <Layout>
//        <Route exact path='/' component={Home} />
//        <Route path='/counter' component={Counter} />
//        <Route path='/fetch-data' component={FetchData} />
//      </Layout>
//    );
//  }
//}

const App = () => {
    
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/fetch-data-new' component={FetchDataNew} />
        </Layout>
    );

};

export default App;
