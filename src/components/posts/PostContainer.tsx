import { postAPI } from '../../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
	const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(6);
	return (
		<div>
			<h2 style={{ textAlign: 'center' }}>Posts</h2>
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>Something wrong ...</h2>}
			{posts && posts?.map((post) => <PostItem key={post.id} post={post} />)}
		</div>
	);
};

export default PostContainer;
