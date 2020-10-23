import React, { useState } from 'react';
import gql from 'graphql-tag';
import './Output.css';
import { Query, QueryResult } from 'react-apollo';
import { Outputs } from './Outputs';


 export const Output = () => (

  <Query query={gql`{
      persons{
        id,
        location
        }
      }
  `}>
    {(result: QueryResult) => {
      
      if (result.loading) {
        console.log("loading");
        return <p>Loading </p>;
      }
      if (result.error) {
        console.log("error");
  
        return <p>Error </p>;
      }
      return result.data.persons.map(({currentPerson}: any) => (
          <Outputs person={currentPerson}/>
      ));
    }}
  </Query>
 );




