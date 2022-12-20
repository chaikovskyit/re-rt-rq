import { FC } from 'react';
import { IPost } from '../../models/IPost';

interface PostItemProps {
	post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	return (
		<div
			style={{
				border: '1px solid rgb(4, 230, 247)',
				padding: '5px 10px',
				marginBottom: '15px',
				display: 'flex',
				alignItems: 'center',
				gap: 15,
			}}
		>
			<div>
				<p>id: {post.id}</p>
				<p>title: {post.title}</p>
				<p>body: {post.body}</p>
			</div>
			<button>Delete</button>
		</div>
	);
};

export default PostItem;
