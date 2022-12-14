import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import './main.scss';
import { useEffect } from 'react';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/posts/PostContainer';
import UsersContainer from './components/user/UsersContainer';
import Counter from './components/counter/Counter';

function App() {
	const { count, users, isLoading, error } = useAppSelector((state) => state.useReducer);
	const { increment, decrement, reset } = userSlice.actions;
	const dispatch = useAppDispatch();
	console.log('users', users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div className='App'>
			<h1>Hello RTK</h1>
			<Counter />
			<div style={{ marginBottom: 70 }}>
				<h2 style={{ textAlign: 'center' }}>Users</h2>
				{isLoading && <h1>Loading ...</h1>}
				{error && <h1>Something wrong ...</h1>}
				{users &&
					users.map((user) => {
						return (
							<div
								key={user.id}
								style={{
									border: '1px solid rgb(4, 230, 247)',
									padding: '5px 10px',
									marginBottom: '15px',
								}}
							>
								<p>ID: {user.id}</p>
								<p>Name: {user.name}</p>
								<p>Email: {user.email}</p>
							</div>
						);
					})}
			</div>
			<PostContainer />
			<UsersContainer />
		</div>
	);
}

export default App;
