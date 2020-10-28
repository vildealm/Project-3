import React, { useState, Component } from 'react';
import gql from 'graphql-tag';
import './Output.css';
import { Query, QueryResult } from 'react-apollo';
//import { Outputs } from './Outputs';
import Person from '../Person/Person';





var target = document.querySelector('#element'); 

let listen : any = [];

function iterate (length :any ) {
    console.log(length)

}



const Output = (props: any) => (


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

      listen.push(result.data.persons);
      console.log(listen[0][1].location);
      iterate(listen[0].length)

      return result.data.persons.map(({first_name, last_name, location, age, description}:any) => (
        <div id = "element">
            <Person first_name= {first_name} last_name = {last_name} location = {location} age= {age} description = {description}/>
         </div>
      ));}}
  </Query>
 );

export default Output;




