import ProfileForm from '@/Components/Profile/ProfileForm';
import styles from '@/styles/Profile/UserProfile.module.css';

function UserProfile() {
	// Redirect away if NOT auth

	return (
		<section className={styles.profile}>
			<h1>Your User Profile</h1>
			<ProfileForm />
		</section>
	);
}

export default UserProfile;
