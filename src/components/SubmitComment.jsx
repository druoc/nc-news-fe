import { Form, Input, Typography, Button, Space } from 'antd';
import { useState } from 'react';
import { postArticleComment } from '../utils/api';

const SubmitComment = ({ article_id, username }) => {
	const { TextArea } = Input;
	const { Title } = Typography;
	const [commentText, setCommentText] = useState('');

	const [commentError, setCommentError] = useState('');
	const [commentSuccess, setCommentSuccess] = useState('');

	const handleInput = (event) => {
		setCommentText(event.target.value);
	};

	const handleSubmit = (e) => {
		if (!commentText) {
			setCommentError('Please enter a comment');
			setTimeout(() => {
				setCommentError('');
			}, 3000);
		} else {
			postArticleComment(article_id, username, commentText)
				.then((response) => {
					setCommentSuccess('Your comment has been posted');

					setTimeout(() => {
						setCommentSuccess('');
						setCommentText('');
					}, 3000);
				})
				.catch((err) => {
					if (err.response) {
						setCommentError('There was a problem posting your comment');
						setTimeout(() => {
							setCommentError('');
							setCommentText('');
						}, 3000);
					}
				});
		}
	};

	return (
		<section className="comment-submit">
			<Title
				level={5}
				style={{ display: 'flex', justifyContent: 'center', color: '#fff' }}
			>
				Add a comment:
			</Title>

			<Form onFinish={handleSubmit}>
				<Form.Item>
					<TextArea
						rows={4}
						onChange={handleInput}
						placeholder="Enter your comment"
						value={commentText}
					/>
				</Form.Item>
				<Space>
					<Form.Item>
						<Button htmlType="submit">Add Comment</Button>
					</Form.Item>

					<div className="error-container">
						<span
							style={{
								color: 'red',
								display: 'flex',
								marginBottom: '20px',
								marginLeft: '40px',
								fontSize: '1.6em',
							}}
						>
							{commentError}
						</span>
						<span
							style={{
								color: '#60c904',
								display: 'flex',
								marginBottom: '20px',
								marginLeft: '40px',
								fontSize: '1.4em',
							}}
						>
							{commentSuccess}
						</span>
					</div>
				</Space>
			</Form>
		</section>
	);
};

export default SubmitComment;
