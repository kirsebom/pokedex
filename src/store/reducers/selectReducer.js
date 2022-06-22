export const selectReducer = (state = "bulbasaur", action) => {
	switch (action.type) {
		case "CHANGE_SELECT_VALUE":
			return action.payload;
		default:
			return state;
	}
};
