import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
	data: {
		loggedIn: boolean;
		about: string;
		name: string;
		email: string;
		gender: string;
		dateOfBirth: any;
		// city: string;
		// country: string;
		// id: string;
		// role: string;
		// mainAccount: string;
	};
}

const initialState: UserState = {
	data: {
		loggedIn: false,
		about: "",
		name: "",
		email: "",
		gender: "",
		dateOfBirth: "",
		// city: "",
		// country: "",
		// id: '',
		// role: '',
		// mainAccount: '',
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: any) => {
			state.data = action.payload;
		},
		resetUser: () => initialState,
	},
});

export const getUser = (state: RootState) => state.user.data;

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
