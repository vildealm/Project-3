import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { gql } from '@apollo/client';
import {ApolloProvider} from 'react-apollo';
import * as serviceWorker from './serviceWorker';

//API LINK
const client = new ApolloClient({uri: 'https://it2810-04.idi.ntnu.no:3000/graphql'});

ReactDOM.render(
  <React.StrictMode>  
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>, 
    document.querySelector('.app-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
