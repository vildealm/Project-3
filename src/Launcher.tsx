//her genererer man spørringene til Graphql

import React, { Component } from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const LAUNCHES_QUERY = gql`
query LaunchesQuery{
    persons {
        last_name
        first_name 
       
    }
}
`;

export class Launcher extends Component {
    render() {
        return (
            <div>
                <h1>Launching</h1>
            <Query query = {LAUNCHES_QUERY}>
                {({loading, error , data } : any) => {
                        if (loading) return <h4>Loadng...</h4>
                        if (error) console.log(error);
                        console.log(data);
                        return <h1>Test</h1>
                    }
                }
                </Query>
            </div>
        )
    }
}

export default Launcher

