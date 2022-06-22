export const indexReducer = (state = 0, action) => {
	switch (action.type) {
		case "CHANGE_INDEX":
			return action.payload;
		default:
			return state;
	}
};
