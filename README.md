# Finder

Welcome to our application. This application runs on react, apollo server, graphql, with a PostgreSQL database. The application is written in TypeScript.

## Get started
To get started you need to run npm install in the main folder. You also have to navigate into the backend with cd backendm, and run npm install there as well. Then you can run npm start in the folder backend, hit cd .. and run npm start again

TLDR; 
- npm install
- cd backend
- npm install
- npm start
- ** new terminal 
- npm start in main folder
- npm install react-modal@3.11.2
- npm install apollo-boost react-apollo graphql 


## Overview 

This application is a platform to find, add or search on students/employees at their given campus at NTNU. "Finder" lets you filter on location, age and name to find a given person, and due to a large number of people in the system, you can navigate through pages to find who you are looking for. If you, as a user, find the need to add yourself or others to the system, you can simply press Add Person to fill in and submit your wanted information. To make the search more smooth, you can sort the output either alphabetical or based on the users age. 

## Database

We have implemented a database using PostegreSQL on our virtual maschine. To do this we followed [this](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04) tutorial. By following this we set up the table "*persons*" on one of the users (edvardmb). This table has the fields:
- id (primary key): sequencially generated.
- first_name: a string containing the first name of a person
- last_name: a string containing the last name of a person
- age: a number containing the age of a person
- location: a string containing which campus the person belongs to
- description: a string containing something about the person, like a short bio. 

By following [this](https://blog.logrocket.com/setting-up-a-remote-postgres-database-server-on-ubuntu-18-04/) tutorial we were able to connect to our database. This enabled us to be able to connect to it outside the VM. 

## Backend

For the backend we are using GraphQL. We also used TypeOrm, to be able to query more easily. For this we followed [this](https://www.youtube.com/watch?v=3P8cDjHsOCA&t=8s&ab_channel=BenAwad ) tutorial. The code for the backend is located in the folder "backend". We set up a connection to the database in the file "*ormconfig.json*". There we connect to our VM link (it2810-04.idi.ntnu.no), port 5432, and connect to our database ("*person_db*") with the username "*edvardmb*" and the password we set ("*Gruppe4*"). 
- In the folder "*entity*" we have defined **Person** in Person.ts, which contains the fields a person has. 
- In *schema.graphql* we define what our queries and mutation are allowed to do. This includes what they are supposed to take in as input, and what the give back as output. 
- In *resolvers.ts* we work out the functionality of all queries and mutations. Here we define what happens to the input, and how this is used to get what the user wants. 
- In the folder "*types*" we have a file called schema.d.ts. This file is altered automatically based on *shema.graphql* when we run the commaned "*yarn gen-schema-types*". What this does is that it defines what the queries in resolvers are expected to take in, based on what we defined in *schema.graphql*.


## Server
We use Apollo Server to connect our frontend to our backend. The reason we chose Apollo provider, is that, after research and implementation of redux, we found it more intuitive to use a more simple interface. Redux seemes a bit ovekill, given the need of having reducers and actions, whereas Apollo with its provider and cache, makes it a bit more simple. We define an ApolloClient in App.tsx, which connects to https://localhost:4000. Around all our content we wrap an ApolloProvider, which provides all content with our client. 

## Queries and mutations in frontend
To handle queries and mutations in the fronend we use useLazyQuery and useMutation, imported from '*react-apollo*'. We use lazy queries to be able to call them whenever we need them, no at once. All our queries are handled in Filter.tsx, while our mutation is handled in AddPerson.tsx. We learned about useQuery and useMutation from [this](https://www.apollographql.com/docs/react/development-testing/static-typing/) link, and the lazy queries from [this](https://www.apollographql.com/docs/react/data/queries/#executing-queries-manually) link. 

## Sorting, filtering and pagination
All of our sorting and filtering takes place in the backend. We use *TypeOrm's* built in functionality to do this. 
It is able to sort either alphabetically by first_name or by age. It is possible to search for a name with the search field. It is also possible to filter by age, location, or both. It is not possible to both search and filter at the same time. It is however possible to sort no matter what kind of filters or searches you have applied. We learned about the *TypeOrm* documentation by reading [here](https://typeorm.io/#/find-options).
The search field is case sensitive, therefor you have to type in the exact name so that the correct person will show.
# State management 

Our team found it okay to communicate between the components without a lot of interaction with a state management instance, but in order to forfill the task requirement, we used our Apollo client for link state cache to store a variable called "Active". This variable lets us communicate with Filter.tsx to render the person-list again after adding a new person is added. This would also solve the problem of re-rendering a component without an infinite loop.  

#Testing
We have had one user test at the end of the project to detect errors that we had not detected before. In addition, Jest also used for device testing and Cypress for end-to-end testing.

## Cypress

We use cypress for automated end-to-end testing of the project. It tests the most important functionality of the page as the search functionality, whether the person who was added to the form is actually added to the database, in addition to
check that a person is being added.
The only form of user-generated data that is taken in is people. We therefore have a test that checks that the form must be filled in with the correct values ​​in order to create a user. In addition, we also have a test that checks that
the review that was written is actually in the database.

We also have a test that tests the search field. It checks that you actually get the correct search result when you perform a search, and also one that checks that you
gets a message that a search has no hits if you search for something that is not in the database.
To run the tests, navigate to the front end and run in two terminal instances:

`npm start`
`npm run test: cypress`

The test file is named end2end_spec.js.

## Jest Unit testing 

We used Jest for some simple unit testing, which is found in the Filter folder. We decided to test a simple "renders without crashing" test on the <div  data-testid ="personBoxTest" >  in Filters.tsx. , just to execute a unit test in addition to the end-to-end testing. The div is rendered without crashing, hence giving a green "Passed" on the unit test. 


Links:
- [GraphQL API with typeGraphQL and TypeORM](https://blog.logrocket.com/how-build-graphql-api-typegraphql-typeorm/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
also run 
npm i apollo-boost 
npm i react-apollo 
to run Apllo . 

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Known bugs 

For the buttons navigating forth and back, we are aware of the non functionality of «next» after searching for one specific user. Now, there is a button showing up, although it shouldn’t. If we had more time, we would have fixed this. This leads to a stop in the database, which means that the "next" button showing up when there is less tahn 10 persons in the output, you should NOT press the button. 
In addition is the case sensitiveness for the search-field which is explained in " ## Filter"

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
