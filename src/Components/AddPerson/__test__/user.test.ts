/*
import 'mocha';
import { Filter } from '../../Filter/Filter';

import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  onError: (e) => { console.log(e) },
});

//~/Documents/ultimate-todo/tests/user.test/js
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';
import { prisma } from '../src/generated/prisma-client';
import { client } from './utils/getClient';

beforeAll(async () => {
  await prisma.deleteManyUsers()
})
describe('Tests the createUser Mutation', () => {
  it('should successfully create a user with valid credentials', async () => {
    const ADD_PERSON = gql`
    mutation register($last_name: String!, $first_name: String!, $age: Int!, $location: String!, $description: String!) {
    register(last_name: $last_name, first_name: $first_name, age: $age, location: $location, description: $description)
  }
`;          
     const res = await client.mutate({
      mutation: ADD_PERSON
    })
    const exists = await prisma.$exists.user({id : res.data.createUser.id});
    expect(exists).toBe(true);
  });
  
  it('should not create two users with the same crededntials', async () => {
    const ADD_PERSON = gql`
    mutation register($last_name: String!, $first_name: String!, $age: Int!, $location: String!, $description: String!) {
    register(last_name: $last_name, first_name: $first_name, age: $age, location: $location, description: $description)
  }
`;  
    await expect(client.mutate({
      mutation: ADD_PERSON
    })).rejects.toThrowError("A unique constraint would be violated on User. Details: Field name = email");
  });
});


/*
describe('Page turner', function () {
  it('should return the next page', function () {
    expect(Filter.pageNumber).toEqual(10)
  });
});

describe('Page turner', function () {
    it('should return the previous page', function () {
      expect(
        Filter.pageNumber
        ).toEqual(0)
    });
});*/



