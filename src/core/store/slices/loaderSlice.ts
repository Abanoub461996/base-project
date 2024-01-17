import { ReactNode } from 'react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios';

interface LoaderState {
	data: {
		show: boolean;
		animation: ReactNode;
		fetch:any;
	};
}

const initialState: LoaderState = {
	data: {
		show: false,
		animation: null,
		fetch: {
			loading: false,
			error: null,
			data: null,
		},
	},
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
	const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
	return response.data;
});
export const loaderSlice = createSlice({
	name: 'loader',
	initialState,
	reducers: {
		showLoader: (state, action: any) => {
			state.data.show = action.payload.show;
		},
		closeLoader: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending, (state) => {
				state.data.fetch.loading = true;
				state.data.fetch.error = null;
				state.data.fetch.data = null;
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.data.fetch.loading = false;
				state.data.fetch.error = null;
				state.data.fetch.data = action.payload;
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.data.fetch.loading = false;
				state.data.fetch.error = action.error.message;
				state.data.fetch.data = null;
			});
	},
});

export const getLoader = (state: RootState) => state.loader.data;

export const { showLoader, closeLoader }:any = loaderSlice.actions;

export default loaderSlice.reducer;
