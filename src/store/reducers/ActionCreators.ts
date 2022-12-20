import { IUser } from '../../models/IUser';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//Redux toolkit with thunk

export const fetchUsers = createAsyncThunk('user/fetchAll', async (thunkAPI) => {
	try {
		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
		return response.data;
	} catch (e) {
		console.log(e);
		// return thunkAPI.rejectWithValue('Can not loading user');
	}
});
