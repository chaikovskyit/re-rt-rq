import { userAPI } from '../../services/UserService';
import UserItem from './UserItem';

const UsersContainer = () => {
	const { data: users, error, isLoading } = userAPI.useFetchAllUsersQuery(5);

	return (
		<div>
			<h1 style={{ textAlign: 'center', color: 'tomato' }}>Users</h1>
			{isLoading && <h2>Loading users ...</h2>}
			{error && <h2>OMG ...</h2>}
			{users && users.map((user) => <UserItem key={user.id} user={user} />)}
		</div>
	);
};

export default UsersContainer;
