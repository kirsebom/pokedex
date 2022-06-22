import { combineReducers } from "redux";
import { indexReducer } from "./indexReducer";
import { selectReducer } from "./selectReducer";

const allReducers = combineReducers({
	index: indexReducer,
	name: selectReducer,
});

export default allReducers;
