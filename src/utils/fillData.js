export const fillData = (state, setState, value, key) => {
	setState({ ...state, [key]: value });
};
