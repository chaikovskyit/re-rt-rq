import { IUser } from '../../models/IUser';
import { AppDispatch } from '../store';
import axios from 'axios';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
	} catch (e) {}
};
