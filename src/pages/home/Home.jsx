import { useEffect, useState } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';
import { onSnapshot } from 'firebase/firestore';

const Home = () => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		watchPostsChanges(setPosts);
		return () => watchPostsChanges();
	}, []);

	return <h1>Home</h1>;
};

const watchPostsChanges = setPosts => {
	onSnapshot(blogCollectionReference, snapshot => {
		const allPosts = snapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}));
		allPosts.length === 0 ? setPosts(null) : setPosts(allPosts);
	});
};
export default Home;
