// import { useState, useEffect } from 'react';
// import { getSession } from 'next-auth/client';

import ProfileForm from '@/Components/Profile/ProfileForm';
import styles from '@/styles/Profile/UserProfile.module.css';

function UserProfile() {
	// const [isLoading, setIsLoading] = useState(true);
	// const [loadedSession, setLoadedSession] = useState();

	// useEffect(() => {
	// 	getSession().then((session) => {
	// 		if (!session) {
	// 			window.location.href = '/auth';
	// 		} else {
	// 			setIsLoading(false);
	// 			setLoadedSession(session);
	// 		}
	// 	});
	// }, []);

	// if (isLoading) {
	// 	return <p className={styles.profile}>Loading...</p>;
	// }

	return (
		<section className={styles.profile}>
			<h1>Your User Profile</h1>
			<ProfileForm />
		</section>
	);
}

export default UserProfile;
