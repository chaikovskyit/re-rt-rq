import { IUser } from '../../models/IUser';
import { AppDispatch } from '../store';
import axios from 'axios';
import { userSlice } from './UserSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Classik redux
//====================
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(userSlice.actions.usersFetching());
// 		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
// 		dispatch(userSlice.actions.usersFetchingSuccess(response.data));
// 	} catch (e) {
// 		dispatch(userSlice.actions.usersFetchingError('error'));
// 	}
// };

//Redux toolkit with thunk
//=========================
export const fetchUsers = createAsyncThunk('user/fetchAll', async (thunkAPI) => {
	const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
	return response.data;
});
