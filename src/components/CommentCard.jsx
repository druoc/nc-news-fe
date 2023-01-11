import { Card } from 'antd';
import { convertDate } from '../utils/api';

const CommentCard = ({ comment }) => {
	return (
		<Card
			size="small"
			title={`Posted by ${comment.author} on ${convertDate(
				comment.created_at
			)}`}
			bordered={true}
			style={{ width: 500, maxWidth: '90vw' }}
		>
			<p>{comment.body}</p>
			<span>
				<strong>Votes:</strong> {comment.votes}
			</span>
		</Card>
	);
};

export default CommentCard;
