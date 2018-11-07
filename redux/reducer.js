import { combineReducers } from "redux";
import authReducer, { moduleName as authModule } from "ducks/auth";
import routerReducer, { moduleName as routerModule } from "ducks/router";
import flightsListReducer, {
  moduleName as flightsListModule
} from "ducks/flightsList";

export default combineReducers({
  [authModule]: authReducer,
  [routerModule]: routerReducer,
  [flightsListModule]: flightsListReducer
});
