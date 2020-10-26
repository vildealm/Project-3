import React from 'react';
import gql from 'graphql-tag';
import './Output.css';
import { Query, QueryResult } from 'react-apollo';
import { Outputs } from './Outputs';


const Output = () => (

  <Query query={gql`
      {
        persons{
          id
          first_name
          last_name
          location
          age
          description
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
  
        return <p>{`${result.error}`} </p>;
      }
      return result.data.persons.map(({first_name, last_name, location, age, description}:any) => (
          <Person first_name= {first_name} last_name = {last_name} location = {location} age= {age} description = {description}/>  
      ));}}
  </Query>
 );

export default Output;




