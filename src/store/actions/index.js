export const changeIndex = (index) => {
	return {
		type: "CHANGE_INDEX",
		payload: index,
	};
};

export const changeSelectValue = (name) => {
	return {
		type: "CHANGE_SELECT_VALUE",
		payload: name,
	};
};
