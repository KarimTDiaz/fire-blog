import styled from 'styled-components';

const PostsContainer = styled.div`
	padding: 1rem;
`;
const StyledPost = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	margin-bottom: 1rem;
	border: 1px solid black;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`;

const PostTitle = styled.h2``;
const PostInfo = styled.p``;

const PostImageContainer = styled.div`
	position: relative;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	overflow: hidden;
`;
const PostImage = styled.img`
	width: 100vw;
	min-height: 200px;
	max-height: 200px;
	object-fit: cover;
`;
const PostImageOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
`;
const ActionButtons = styled.div`
	display: flex;
	gap: 0.5rem;
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
`;
export {
	ActionButtons,
	PostImage,
	PostImageContainer,
	PostImageOverlay,
	PostInfo,
	PostTitle,
	PostsContainer,
	StyledPost
};
