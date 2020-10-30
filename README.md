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


# Overview 

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
We use Apollo Server to connect our frontend to our backend. We define an ApolloClient in App.tsx, which connects to https://localhost:4000. Around all our content we wrap an ApolloProvider, which provides all content with our client. 

## Queries and mutations in frontend
To handle queries and mutations in the fronend we use useLazyQuery and useMutation, imported from '*react-apollo*'. We use lazy queries to be able to call them whenever we need them, no at once. All our queries are handled in Filter.tsx, while our mutation is handled in AddPerson.tsx. We learned about useQuery and useMutation from [this](https://www.apollographql.com/docs/react/development-testing/static-typing/) link, and the lazy queries from [this](https://www.apollographql.com/docs/react/data/queries/#executing-queries-manually) link. 

## Sorting, filtering and pagination
All of our sorting and filtering takes place in the backend. We use *TypeOrm's* built in functionality to do this. 
It is able to sort either alphabetically by first_name or by age. It is possible to search for a name with the search field. It is also possible to filter by age, location, or both. It is not possible to both search and filter at the same time. It is however possible to sort no matter what kind of filters or searches you have applied. We learned about the *TypeOrm* documentation by reading [here](https://typeorm.io/#/find-options).

# State management 

Our team found it okay to communicate between the components without a lot of interaction with a state management instance, but in order to forfill the task requirement, we used our Apollo client for link state cache to store a variable called "Active". This variable lets us communicate with Filter.tsx to render the person-list again after adding a new person is added. This would also solve the problem of re-rendering a component without an infinite loop.  

# Testing
Vi har hatt én brukertesting i slutten av prosjektet for å oppdage feil som vi ikke hadde fanget opp tidligere. I tillegg brukte også Jest for enhetstesting og Cypress til end-to-end testing.

## Cypress

Vi benytter oss av cypress for automatisert end-to-end testing av prosjektet. Den tester de viktigste funksjonaliteten på siden som søk-funksjonaliteten, om personen som ble lagt til i formen faktisk blir lagt til i databasen, i tillegg til at 
filtrering av alder viser kun personer som er 22 år. 
For å kjøre testene navigerer du til frontend og kjører i to terminalinstanser:

`npm start`
`npm run test:cypress`

Testfilen heter end2end_spec.js. 

## Jest / Mocha
Vi brukte Mocha til enhetsteste prosjektet vårt. Der valgte vi å teste nextPage() og previousPage() funksjonaliteten vår. For å kjøre testene skriver man npm test i terminalen inne i frontend.
Mot slutten av prosjektet har vi brukt cypress tester. 

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
