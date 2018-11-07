import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import reducer from "./reducer";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  applyMiddleware(sagaMiddleware),
  applyMiddleware(routerMiddleware(history))
];

// const store =
//   process.env.NODE_ENV === "development"
//     ? createStore(
//         reducer,
//         {},
//         compose(
//           ...middlewares,
//           window.__REDUX_DEVTOOLS_EXTENSION__ &&
//             window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
//       )
//     : createStore(reducer, {}, compose(...middlewares));

const store = createStore(reducer, {}, compose(...middlewares));

sagaMiddleware.run(saga);

export default store;
