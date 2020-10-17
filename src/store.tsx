import {configure} from 'redux-data-fetching';

const rootValue = {
  user: ({id}) => api.getMutation(id),
  users: () => api.getUsers()
};

let {reducer, middleware, actions, DataFetcher, DataHandlers} = configure(graphQLSchema, {somecontext: "ok", api: {}}, rootValue);

createStore(combineReducers({
  data: reducer,
}), {}, compose(
  applyMiddleware(middleware)
));

export { actions, DataFetcher, DataHandlers };
