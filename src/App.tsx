import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import './main.scss';
import { useEffect } from 'react';
import { fetchUsers } from './store/reducers/ActionCreators';

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
			<h2>Count: {count}</h2>
			<button onClick={() => dispatch(increment(10))}>Increment</button>
			<button onClick={() => dispatch(decrement(5))}>Decrement</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
			<div>
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
		</div>
	);
}

export default App;
