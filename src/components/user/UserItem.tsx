import React, { FC } from 'react';
import { IUser } from '../../models/IUser';

interface UserItemProps {
	user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
	return (
		<div
			key={user.id}
			style={{
				border: '1px solid rgb(4, 230, 247)',

				marginBottom: '15px',
			}}
		>
			<p>ID: {user.id}</p>
			<p>Name: {user.name}</p>
			<p>Email: {user.email}</p>
		</div>
	);
};

export default UserItem;
