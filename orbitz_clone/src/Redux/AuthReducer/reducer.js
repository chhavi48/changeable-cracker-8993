const initialState = {
	Authdata: {
		isAuth: false,
		token: "",
	},
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};
