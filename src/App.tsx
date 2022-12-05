import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import './main.scss';

function App() {
	const { count } = useAppSelector((state) => state.useReducer);
	const { increment, decrement, reset } = userSlice.actions;
	const dispatch = useAppDispatch();
	console.log('Update', { count });

	return (
		<div className='App'>
			<h1>Hello RTK</h1>
			<h2>Count: {count}</h2>
			<button onClick={() => dispatch(increment(10))}>Increment</button>
			<button onClick={() => dispatch(decrement(5))}>Decrement</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
		</div>
	);
}

export default App;
