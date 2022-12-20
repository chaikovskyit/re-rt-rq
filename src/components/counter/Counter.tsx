import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';

const Counter = () => {
	const { count } = useAppSelector((state) => state.useReducer);
	const { increment, decrement, reset } = userSlice.actions;
	const dispatch = useAppDispatch();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
				border: '1px solid rgb(4, 230, 247)',
				padding: '5px 10px',
			}}
		>
			<h2>Count: {count}</h2>
			<div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
				<button onClick={() => dispatch(increment(10))}>Increment</button>
				<button onClick={() => dispatch(reset())}>Reset</button>
				<button onClick={() => dispatch(decrement(5))}>Decrement</button>
			</div>
		</div>
	);
};

export default Counter;
